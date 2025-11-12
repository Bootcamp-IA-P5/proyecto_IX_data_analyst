"""build_powerbi_processed.py

Script para combinar todos los archivos `processed_<city>.csv`
en un único `data/powerbi/processed_all_cities.csv` listo para drill-through en PowerBI.

Uso (desde la raíz del repo):
    python scripts/build_powerbi_processed.py

Opcionales:
    --source-dir DATA_DIR (por defecto data/processed)
    --out-dir OUT_DIR (por defecto data/powerbi)
    --versioned (añade timestamp al nombre de salida)

El script añade la columna `city` extrayéndola del nombre del archivo.
Genera también un pequeño informe `processed_all_cities_report_<timestamp>.csv` con filas por archivo.
"""
from pathlib import Path
import pandas as pd
import re
import argparse
from datetime import datetime


def infer_city_from_filename(name: str) -> str:
    m = re.search(r"processed_([a-z0-9_\-]+)\.csv", name, re.IGNORECASE)
    if m:
        return m.group(1).lower()
    return Path(name).stem.lower()


def normalize_columns(df: pd.DataFrame) -> pd.DataFrame:
    # normaliza nombres de columnas: lower, strip, replace spaces
    df = df.rename(columns={c: str(c).strip().lower().replace(' ', '_') for c in df.columns})
    return df


def main(source_dir: Path, out_dir: Path, versioned: bool = False):
    source_dir = Path(source_dir)
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    files = sorted(source_dir.glob('processed_*.csv'))
    if not files:
        print(f'No se encontraron archivos processed_*.csv en {source_dir}')
        return 1

    parts = []
    summary = []
    # collect all columns to ensure consistent schema
    all_columns = set()
    for f in files:
        try:
            df = pd.read_csv(f)
        except Exception as e:
            print(f'Error leyendo {f}: {e}')
            continue
        df = normalize_columns(df)
        city = infer_city_from_filename(f.name)
        df['city'] = city
        parts.append(df)
        summary.append({'file': f.name, 'city': city, 'rows': len(df)})
        all_columns.update(df.columns.tolist())

    if not parts:
        print('No se cargó ningún dataframe válido.')
        return 1

    # ensure consistent columns across parts: add missing cols with NA
    all_columns = list(all_columns)
    norm_parts = []
    for df in parts:
        for c in all_columns:
            if c not in df.columns:
                df[c] = pd.NA
        # reorder columns to a stable order
        df = df[all_columns]
        norm_parts.append(df)

    combined = pd.concat(norm_parts, ignore_index=True, sort=False)

    # prefer ordering: city, id, price, latitude, longitude, neighbourhood, then the rest
    preferred = ['city', 'id', 'price', 'latitude', 'longitude', 'neighbourhood']
    cols = list(combined.columns)
    ordered = [c for c in preferred if c in cols]
    for c in cols:
        if c not in ordered:
            ordered.append(c)
    combined = combined[ordered]

    ts = datetime.utcnow().strftime('%Y%m%dT%H%M%SZ')
    out_name = 'processed_all_cities.csv'
    if versioned:
        out_name = f'processed_all_cities_{ts}.csv'

    out_path = out_dir / out_name
    combined.to_csv(out_path, index=False)

    # also write a small report
    report_path = out_dir / f'processed_all_cities_report_{ts}.csv'
    pd.DataFrame(summary).to_csv(report_path, index=False)

    print(f'Combined {len(parts)} files -> {out_path} ({len(combined)} rows, {len(combined.columns)} cols)')
    print(f'Report saved in {report_path}')
    return 0


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Combine processed CSVs into a single file for PowerBI (drill-through)')
    parser.add_argument('--source-dir', type=str, default='data/processed', help='Directorio donde están los processed_*.csv')
    parser.add_argument('--out-dir', type=str, default='data/powerbi', help='Directorio de salida para processed_all_cities.csv')
    parser.add_argument('--versioned', action='store_true', help='Guardar versión timestamped del fichero de salida')
    args = parser.parse_args()
    raise SystemExit(main(args.source_dir, args.out_dir, args.versioned))
