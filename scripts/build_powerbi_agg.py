"""build_powerbi_agg.py

Script para combinar todos los archivos `agg_neighbourhood_<city>.csv`
en un único `data/powerbi/agg_all_cities.csv` listo para PowerBI.

Uso (desde la raíz del repo):
    python scripts/build_powerbi_agg.py

Opcionales:
    --source-dir DATA_DIR (por defecto data/processed)
    --out-dir OUT_DIR (por defecto data/powerbi)
    --versioned (añade timestamp al nombre de salida)

El script añade la columna `city` extrayéndola del nombre del archivo.
"""
from pathlib import Path
import pandas as pd
import re
import argparse
from datetime import datetime


def infer_city_from_filename(name: str) -> str:
    # busca la porción entre "agg_neighbourhood_" y ".csv"
    m = re.search(r"agg_neighbourhood_([a-z0-9_\-]+)\.csv", name, re.IGNORECASE)
    if m:
        return m.group(1).lower()
    # fallback: tomar nombre base
    return Path(name).stem.lower()


def normalize_columns(df: pd.DataFrame) -> pd.DataFrame:
    # normaliza nombres de columnas: lower, strip, replace spaces
    df = df.rename(columns={c: str(c).strip().lower().replace(' ', '_') for c in df.columns})
    return df


def main(source_dir: Path, out_dir: Path, versioned: bool = False):
    source_dir = Path(source_dir)
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    files = sorted(source_dir.glob('agg_neighbourhood_*.csv'))
    if not files:
        print(f'No se encontraron archivos agg_neighbourhood_*.csv en {source_dir}')
        return 1

    parts = []
    summary = []
    for f in files:
        city = infer_city_from_filename(f.name)
        try:
            df = pd.read_csv(f)
        except Exception as e:
            print(f'Error leyendo {f}: {e}')
            continue
        df = normalize_columns(df)
        # aseguramos la columna neighbourhood exista con nombre conocido
        if 'neighbourhood' not in df.columns and 'neighborhood' in df.columns:
            df = df.rename(columns={'neighborhood': 'neighbourhood'})
        df['city'] = city
        parts.append(df)
        summary.append({'file': f.name, 'city': city, 'rows': len(df)})

    if not parts:
        print('No se cargó ningún dataframe válido.')
        return 1

    combined = pd.concat(parts, ignore_index=True, sort=False)

    # reordenar columnas colocando city y neighbourhood al inicio si existen
    cols = list(combined.columns)
    ordered = []
    for c in ['city', 'neighbourhood']:
        if c in cols:
            ordered.append(c)
    for c in cols:
        if c not in ordered:
            ordered.append(c)
    combined = combined[ordered]

    ts = datetime.utcnow().strftime('%Y%m%dT%H%M%SZ')
    out_name = 'agg_all_cities.csv'
    if versioned:
        out_name = f'agg_all_cities_{ts}.csv'

    out_path = out_dir / out_name
    combined.to_csv(out_path, index=False)

    # also write a small report
    report_path = out_dir / f'agg_all_cities_report_{ts}.csv'
    pd.DataFrame(summary).to_csv(report_path, index=False)

    print(f'Combined {len(parts)} files -> {out_path} ({len(combined)} rows)')
    print(f'Report saved in {report_path}')
    return 0


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Combine agg_neighbourhood CSVs into a single file for PowerBI')
    parser.add_argument('--source-dir', type=str, default='data/processed', help='Directorio donde están los agg_neighbourhood_*.csv')
    parser.add_argument('--out-dir', type=str, default='data/powerbi', help='Directorio de salida para agg_all_cities.csv')
    parser.add_argument('--versioned', action='store_true', help='Guardar versión timestamped del fichero de salida')
    args = parser.parse_args()
    raise SystemExit(main(args.source_dir, args.out_dir, args.versioned))
