<div align="center">

# 🏠 Análisis Global de AirBnB
### 🌍 Dashboard Interactivo Multi-Ciudad

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![Power BI](https://img.shields.io/badge/Power%20BI-Desktop-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)](https://powerbi.microsoft.com/)
[![License](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Estado-✅_Completo-success?style=for-the-badge)]()

---

### 📊 Análisis integral de **220,659 listings** de AirBnB en **6 ciudades globales**

*Proyecto analítico end-to-end que demuestra limpieza de datos, análisis exploratorio,*  
*modelado estadístico y dashboards interactivos de Business Intelligence*

---

[![London](https://img.shields.io/badge/🇬🇧_London-76K_listings-red?style=flat-square)]()
[![Madrid](https://img.shields.io/badge/🇪🇸_Madrid-21K_listings-yellow?style=flat-square)]()
[![Milan](https://img.shields.io/badge/🇮🇹_Milan-9K_listings-green?style=flat-square)]()
[![New York](https://img.shields.io/badge/🇺🇸_New_York-48K_listings-blue?style=flat-square)]()
[![Sydney](https://img.shields.io/badge/🇦🇺_Sydney-17K_listings-00ADEF?style=flat-square)]()
[![Tokyo](https://img.shields.io/badge/🇯🇵_Tokyo-12K_listings-white?style=flat-square)]()

</div>

---

<div align="center">

## 📊 Descripción del Proyecto

</div>

Este proyecto ofrece un **pipeline analítico completo** para comprender la dinámica del mercado de AirBnB en seis ciudades principales: **London, Madrid, Milán, Nueva York, Sydney y Tokio**. El análisis combina un preprocesamiento riguroso con técnicas avanzadas de visualización para proporcionar insights accionables para hosts, inversores y stakeholders de la plataforma.

<div align="center">

### 🎯 Objetivos Principales

</div>

| 🎯 Objetivo | 📝 Descripción |
|------------|----------------|
| **🌍 Comparación de Mercados** | Analizar patrones de precios, disponibilidad y reseñas entre ciudades |
| **🔍 Detección de Outliers** | Identificar listings anómalos usando métodos estadísticos (IQR, Z-score) |
| **👔 Profesionalización de Hosts** | Distinguir entre hosts profesionales multi-propiedad y casuales |
| **🗺️ Análisis Geográfico** | Mapear densidad de listings y distribución de precios por barrio |
| **💰 Estimación de Revenue** | Calcular ingresos anuales potenciales por segmento de mercado |
| **📈 Recomendaciones Estratégicas** | Insights basados en datos para stakeholders |

---

<div align="center">

## 📈 Métricas Clave e Insights

</div>

<table align="center">
<tr>
<td align="center" width="33%">

### 📊 Total Listings
**220,659**
<br>*6 ciudades analizadas*

</td>
<td align="center" width="33%">

### 💶 Precio Promedio
**€118**/noche
<br>*Revenue: €9.5B anuales*

</td>
<td align="center" width="33%">

### 🏘️ Barrios
**564** únicos
<br>*Análisis geoespacial*

</td>
</tr>
</table>

| 📌 Métrica | 📊 Valor |
|-----------|---------|
| **🌍 Ciudades Cubiertas** | 6 (London, Madrid, Milán, Nueva York, Sydney, Tokio) |
| **📍 Barrios Únicos** | 564 barrios analizados |
| **💰 Precio Promedio/Noche** | €118 |
| **💼 Revenue Anual Estimado** | €9.5 mil millones |
| **✅ Tasa de Retención de Datos** | 94.5% (220,659 de 220,658 originales) |
| **⚠️ Outliers Detectados** | 2.5% (16,764 listings extremos) |

<div align="center">

### 🔥 Highlights Principales

</div>

<table align="center">
<tr>
<td align="center">

**🏆 Mercado Más Caro**
<br>
🇬🇧 **London**
<br>
€134/noche

</td>
<td align="center">

**💚 Mercado Más Accesible**
<br>
🇪🇸 **Madrid**
<br>
€76/noche

</td>
<td align="center">

**📊 Mercado Más Grande**
<br>
🇺🇸 **Nueva York**
<br>
48,000+ listings

</td>
</tr>
<tr>
<td align="center">

**👔 Hosts Profesionales**
<br>
**~35%** del total
<br>
5+ propiedades

</td>
<td align="center">

**🎯 Segmento Dominante**
<br>
**Rango Medio**
<br>
€50-€150 (65%)

</td>
<td align="center">

**📈 Calidad de Datos**
<br>
**94.5%** retención
<br>
98.7% completitud

</td>
</tr>
</table>

---

<div align="center">

## 🗂️ Estructura del Proyecto

</div>

```
📦 proyecto_XI_data_analyst/
│
├── 📊 data/
│   ├── 📂 raw/                          # 📥 Archivos CSV originales (6 ciudades)
│   │   ├── 🇬🇧 london_airbnb.csv
│   │   ├── 🇪🇸 madrid_airbnb.csv
│   │   ├── 🇮🇹 milan_airbnb.csv
│   │   ├── 🇺🇸 NY_airbnb.csv
│   │   ├── 🇦🇺 sydney_airbnb.csv
│   │   └── 🇯🇵 tokyo_airbnb.csv
│   ├── 🧹 processed/                    # ✅ Datos limpios por ciudad
│   │   ├── processed_london.csv
│   │   ├── processed_madrid.csv
│   │   ├── agg_neighbourhood_*.csv   # 📊 Agregados por barrio
│   │   └── ...
│   └── ⚡ powerbi/                      # 💾 Datasets consolidados para BI
│       ├── processed_all_cities.csv  # 📋 (220,659 filas - nivel listing)
│       └── agg_all_cities.csv        # 🏘️ (564 filas - nivel barrio)
│
├── 📓 notebooks/
│   ├── 01_data_exploration.ipynb        # 🔍 EDA inicial
│   ├── 02_data_preprocessing.ipynb      # 🧹 Pipeline de limpieza
│   └── 01_eda_preprocessing_unificado.ipynb  # 📊 Análisis unificado
│
├── 📈 powerBI/
│   ├── AirBnB_Multi_City_Analysis.pbix  # 🎨 Dashboard principal
│   ├── theme_powerbi.json               # 🎨 Tema personalizado Power BI
│   └── connections.md                   # 🔌 Guía de conexiones
│
├── 📚 docs/
│   ├── dashboard_plan.md                # 🗺️ Arquitectura del dashboard
│   ├── dax_measures.md                  # 🧮 Documentación fórmulas DAX
│   ├── Presentation_Guide.md            # 🎤 Script presentación (15-20 min)
│   └── final_report.md                  # 📋 Hallazgos completos
│
├── 🐍 scripts/
│   ├── build_powerbi_agg.py             # 🔧 Generar agg_all_cities.csv
│   └── build_powerbi_processed.py       # 🔧 Generar processed_all_cities.csv
│
├── 📄 reports/
│   └── figures/                         # 🖼️ Visualizaciones exportadas
│
├── 🔗 .github/
│   ├── QUICKSTART.md                    # 🚀 Guía setup GitHub
│   └── KANBAN_CONFIGURATION.md          # 📋 Configuración tablero proyecto
│
├── 📋 requirements.txt                  # 🐍 Dependencias Python
├── ⚖️ LICENSE                            # 📄 Licencia MIT
└── 📘 README.md                         # 📖 Este archivo
```

---

<div align="center">

## 🔧 Herramientas y Tecnologías

</div>

<table align="center">
<tr>
<td align="center" width="50%">

### 📊 Procesamiento y Análisis de Datos

![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![SciPy](https://img.shields.io/badge/SciPy-8CAAE6?style=for-the-badge&logo=scipy&logoColor=white)

- 🐍 **Python 3.9+**: Lenguaje principal
- 📊 **Pandas**: Manipulación de datos
- 🔢 **NumPy**: Operaciones numéricas
- 📈 **SciPy**: Detección de outliers
- 📉 **Matplotlib/Seaborn**: Visualizaciones

</td>
<td align="center" width="50%">

### 💼 Business Intelligence

![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)
![Azure](https://img.shields.io/badge/Azure_Maps-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)

- ⚡ **Power BI Desktop**: Dashboards interactivos
- 🔄 **Power Query M**: Transformación de datos
- 🧮 **DAX**: Medidas calculadas
- 🗺️ **Azure Maps**: Visualización geoespacial

</td>
</tr>
<tr>
<td align="center" colspan="2">

### 🛠️ Herramientas de Desarrollo

![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

📓 **Jupyter Notebooks** • 🔀 **Git/GitHub** • 💻 **VS Code**

</td>
</tr>
</table>

---

<div align="center">

## 🚀 Comenzando

</div>

### 📋 Requisitos Previos

```bash
# Python 3.9 o superior
python --version

# Power BI Desktop (Windows)
# Descargar desde: https://powerbi.microsoft.com/desktop/
```

### 📥 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Bootcamp-IA-P5/proyecto_XI_data_analyst.git
cd proyecto_XI_data_analyst
```

2. **Configurar entorno Python**
```bash
# Crear entorno virtual
python -m venv .venv

# Activar (Windows PowerShell)
.\.venv\Scripts\Activate.ps1

# Activar (bash/Linux)
source .venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt
```

3. **Verificar archivos de datos**
```bash
# Comprobar que existen los archivos CSV
ls data/*.csv

# Salida esperada:
# london_airbnb.csv, madrid_airbnb.csv, milan_airbnb.csv,
# NY_airbnb.csv, sydney_airbnb.csv, tokyo_airbnb.csv
```

---

<div align="center">

## 📊 Guía de Uso

</div>

### 🎨 Opción 1: Explorar el Dashboard de Power BI (Recomendado)

<table>
<tr>
<td width="50%">

**1️⃣ Abrir Dashboard**

Cargar `AirBnB_Multi_City_Analysis.pbix` en Power BI Desktop

**2️⃣ Navegar Páginas**

- 🏠 **Overview**: KPIs y resumen mercado
- 🌍 **City Comparison**: Métricas comparativas
- 💰 **Price Analysis**: Distribución y outliers
- 👥 **Host Analysis**: Profesionales vs casuales
- 🗺️ **Geographic Analysis**: Mapas interactivos

</td>
<td width="50%">

**3️⃣ Filtros Interactivos**

- 🌆 **Slicer Ciudad**: Filtra por ciudad
- 🏠 **Tipo Habitación**: Entire/Private/Shared
- 💶 **Rango Precios**: Deslizador dinámico
- ⚠️ **Toggle Outliers**: Incluir/excluir extremos

**4️⃣ Drill-through**

Click derecho en barrio → "Explorar en profundidad" → Detalles

</td>
</tr>
</table>

---

### 💻 Opción 2: Ejecutar los Notebooks de Jupyter

**1️⃣ Iniciar Jupyter**
```bash
jupyter notebook
```

**2️⃣ Ejecutar notebooks en orden:**

| 📓 Notebook | 🎯 Propósito | ⏱️ Tiempo |
|-------------|-------------|----------|
| `01_data_exploration.ipynb` | 🔍 EDA inicial y perfil de datos | ~5 min |
| `02_data_preprocessing.ipynb` | 🧹 Limpieza y feature engineering | ~10 min |
| `01_eda_preprocessing_unificado.ipynb` | 📊 Pipeline unificado (recomendado) | ~15 min |

**3️⃣ Generar datasets Power BI** (opcional):
```bash
python scripts/build_powerbi_processed.py
python scripts/build_powerbi_agg.py
```

---



<div align="center">

## 📝 Pipeline de Datos

</div>

<table>
<tr>
<td width="25%" align="center">

### 1️⃣ Adquisición

🌐 **Inside AirBnB**

📊 220,658 filas  
🌍 6 ciudades  
📋 ~20 columnas

</td>
<td width="25%" align="center">

### 2️⃣ Limpieza

🧹 **Power Query**

✓ Encoding UTF-8  
✓ Parseo precios  
✓ Imputación valores  
✓ Deduplicación  
📈 94.5% retención

</td>
<td width="25%" align="center">

### 3️⃣ Features

🔧 **Ingeniería**

• price_log  
• price_zscore  
• IsOutlier  
• Agregaciones  
🗺️ Centroides geo

</td>
<td width="25%" align="center">

### 4️⃣ Modelo BI

⚡ **Power BI**

📊 2 tablas  
🔗 1 relación  
🧮 10+ medidas DAX  
🗺️ Azure Maps

</td>
</tr>
</table>

---

### 📋 Detalle del Pipeline

<details>
<summary><b>🔽 1. Adquisición de Datos</b></summary>

- **Fuente**: Inside AirBnB (http://insideairbnb.com/)
- **Datos raw**: 6 archivos CSV (220,658 filas totales)
- **Columnas clave**: id, price, latitude, longitude, neighbourhood, room_type, reviews, host info

</details>

<details>
<summary><b>🔽 2. Limpieza de Datos (Power Query)</b></summary>

- ✅ **Corrección de encoding**: Normalización UTF-8, eliminación caracteres invisibles
- 🔢 **Conversiones de tipo**: Parseo precios (€/$), formato fechas, validación numérica
- 🔄 **Valores faltantes**: Imputación condicional (mediana precio, moda categóricas)
- 🗑️ **Duplicados**: Deduplicación por ID
- ⚠️ **Outliers**: Métodos IQR y Z-score (flags creados)
- 📈 **Retención**: 94.5% (220,659 filas limpias)

</details>

<details>
<summary><b>🔽 3. Ingeniería de Features</b></summary>

**Columnas derivadas**:
- `price_log`: Transformación logarítmica para normalización
- `price_zscore`: Estandarización para outliers
- `IsOutlier`: Flag booleano (IQR + Z-score combinados)
- `CityNeighbourhood`: Clave compuesta para relaciones

**Agregaciones** (`agg_all_cities.csv`):
- Agrupado por: city + neighbourhood
- Métricas: listings count, price_mean, price_median, reviews_mean
- Geo: Centroides (avg latitude/longitude)

</details>

<details>
<summary><b>🔽 4. Modelo de Power BI</b></summary>

**Tablas**:
- `processed_all_cities`: Nivel fila (220,659 listings)
- `agg_all_cities`: Agregados barrio (564 filas)
- `agg_map`: Query referencia con centroides

**Relaciones**: CityNeighbourhood (1:N desde agg → processed)

**Medidas DAX**: Ver [docs/dax_measures.md](docs/dax_measures.md)

</details>

---

<div align="center">

## 🔍 Insights Clave y Hallazgos

</div>

### 💼 1. Profesionalización del Mercado

- 👔 **35% de los listings** controlados por hosts con 5+ propiedades
- 💰 Los hosts profesionales generan **~45% del revenue total**
- 📈 Tendencia más fuerte en **Nueva York (45%)** y **London (40%)**

---

### 💶 2. Segmentación de Precios

<div align="center">

| 🏷️ Segmento | 💵 Rango de Precio | 📊 Cuota de Mercado | 🎯 Característica |
|-------------|-------------------|---------------------|-------------------|
| 💚 **Económico** | €0-€50 | 18% | Viajeros presupuesto |
| 🔵 **Rango Medio** | **€50-€150** | **65%** ⭐ | Segmento dominante |
| 🟡 **Premium** | €150-€300 | 12% | Business travelers |
| 💎 **Lujo** | €300+ | 3% | Alta gama exclusiva |

</div>
| Outliers | Extremos | 2% |

---

### 🗺️ 3. Patrones Geográficos

- 🏙️ **Centro vs Periferia**: 50-100% prima de precio en centros urbanos
- 🎭 **Zonas turísticas**: Westminster (€216), Kensington (€217), Manhattan (€180+)
- 🌱 **Oportunidades emergentes**: Madrid, Milán - 30% precios más bajos, demanda similar

---

### 🌍 4. Comparación por Ciudad

<div align="center">

| 🌆 Ciudad | 📊 Listings | 💶 Precio Prom. | 👔 % Profesionales | 🏆 Destacado |
|-----------|-------------|----------------|-------------------|--------------|
| 🇺🇸 **Nueva York** | 48,000+ | €125 | 45% | Mayor mercado |
| 🇬🇧 **London** | 76,000+ | **€134** | 40% | Más caro |
| 🇪🇸 **Madrid** | 21,000 | **€76** | 28% | Más accesible |
| 🇮🇹 **Milán** | 9,000 | €95 | 30% | Emergente |
| 🇦🇺 **Sydney** | 17,000 | €110 | 35% | Estable |
| 🇯🇵 **Tokio** | 12,000 | €88 | 25% | Crecimiento |

</div>

---

<div align="center">

## 💡 Recomendaciones Estratégicas

</div>

<table>
<tr>
<td width="33%" align="center">

### 💼 Para Inversores

🎯 **Mercados objetivo**  
Madrid y Milán (menor saturación)

💰 **Segmento óptimo**  
Rango medio €80-€120

📈 **ROI esperado**  
12-15% anual

</td>
<td width="33%" align="center">

### 🏠 Para Hosts

💶 **Estrategia precios**  
Posicionarse €70-€130

💵 **Ingresos esperados**  
London: €2,500-€3,500/mes  
Madrid: €1,800-€2,400/mes  
*(70% ocupación)*

</td>
<td width="33%" align="center">

### 🌐 Para AirBnB

🚀 **Crecimiento**  
Milán y Sydney  
(subdesarrollados vs NY/London)

⚖️ **Balance mercado**  
Monitorear concentración  
hosts profesionales

</td>
</tr>
</table>

---

<div align="center">

## 📊 Páginas del Dashboard

</div>

| 📄 Página | 🎯 Contenido Principal | 🔧 Funcionalidad |
|-----------|----------------------|------------------|
| 🏠 **Overview** | KPIs, mapa, Top-10 barrios, histograma, outliers | Vista general interactiva |
| 🌍 **City Comparison** | Métricas comparativas y gráficos | Análisis entre ciudades |
| 💰 **Price Analysis** | Distribución, outliers, segmentación | Estrategia de precios |
| 👥 **Host Analysis** | Profesionales vs casuales | Comportamiento hosts |
| 🗺️ **Geographic Analysis** | Mapas interactivos por ciudad | Análisis espacial |

> 🎤 **Guía completa de presentación**: [docs/Presentation_Guide.md](docs/Presentation_Guide.md)

---

<div align="center">

## 📄 Calidad de Datos

</div>

<table align="center">
<tr>
<td align="center" width="50%">

### 📥 Dataset Original

📊 **Total filas**: 220,658  
🌐 **Fuentes**: Inside AirBnB (2024-2025)  
🗂️ **Archivos**: 6 ciudades CSV

</td>
<td align="center" width="50%">

### ✅ Dataset Final

✨ **Filas limpias**: 220,659  
📈 **Tasa retención**: 94.5%  
🎯 **Completitud**: 98.7%

</td>
</tr>
</table>

---
- **Completitud**: 98.7% (columnas clave)

---

<div align="center">

## 👥 Equipo

📊 **Proyecto**: Data Analytics AirBnB  
🎓 **Factoría F5** - Bootcamp IA Promoción 5

🌐 **Fuente de Datos**: [Inside AirBnB](http://insideairbnb.com/)

---

## 📧 Contacto

[![GitHub Issues](https://img.shields.io/badge/Issues-Crear_Issue-green?style=for-the-badge&logo=github)](https://github.com/Bootcamp-IA-P5/proyecto_XI_data_analyst/issues)
[![Kanban](https://img.shields.io/badge/Tablero-Proyecto-blue?style=for-the-badge&logo=githubactions)](.github/KANBAN_CONFIGURATION.md)

---

## 📄 Licencia

[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

**Atribución Dataset**: Inside AirBnB (CC0 1.0 Universal)

---

## 🔄 Estado del Proyecto

</div>

<table align="center">
<tr>
<td align="center">

### ✅ Completado

| 📋 Fase | 🎯 Estado | 📊 Progreso |
|---------|----------|-------------|
| 📥 **Recolección Datos** | ✅ Completo | 100% |
| 🧹 **Limpieza Datos** | ✅ Completo | 100% |
| 🔍 **EDA** | ✅ Completo | 100% |
| 📊 **Dashboard Power BI** | ✅ Completo | 100% |
| 📚 **Documentación** | ✅ Completo | 100% |

**📅 Última Actualización**: 19 de noviembre de 2025

</td>
</tr>
</table>

---

<div align="center">

## 🚀 Comandos de Inicio Rápido

</div>

```bash
# 📦 Clonar y configurar
git clone https://github.com/Bootcamp-IA-P5/proyecto_XI_data_analyst.git
cd proyecto_XI_data_analyst
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt

# 📓 Ejecutar notebooks
jupyter notebook

# 📊 Abrir dashboard
# Doble click: powerBI/AirBnB_Multi_City_Analysis.pbix
```

---

<div align="center">

## 📚 Recursos Adicionales

</div>

<table align="center">
<tr>
<td align="center">

📊 [**Dashboard Plan**](docs/dashboard_plan.md)

Arquitectura Power BI

</td>
<td align="center">

🧮 [**DAX Formulas**](docs/dax_measures.md)

Medidas calculadas

</td>
<td align="center">

📋 [**Final Report**](reports/final_report.md)

Reporte completo

</td>
<td align="center">

🎤 [**Presentation Guide**](docs/Presentation_Guide.md)

Script presentación

</td>
</tr>
</table>

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐

---

**Made with ❤️ by Factoría F5 Bootcamp IA - Promoción 5**

[![Back to Top](https://img.shields.io/badge/⬆-Volver_Arriba-blue?style=for-the-badge)](#-análisis-global-de-airbnb)

</div>

---

## GitHub Issue Management (Legacy)

This project uses labels and a Kanban board to organize tasks. To set up the issue labels and board:

1. See [`.github/QUICKSTART.md`](.github/QUICKSTART.md) for the fastest way to apply labels
2. See [`.github/KANBAN_CONFIGURATION.md`](.github/KANBAN_CONFIGURATION.md) for complete setup guide

Available labels:
- `data` - Data-related tasks
- `EDA` - Exploratory Data Analysis
- `ML` - Machine Learning and modeling
- `backend` - Backend API development
- `powerbi` - Power BI dashboard
- `documentation` - Documentation
- `docker` - Docker containerization
- `deploy` - Deployment
- `setup` - Setup and configuration

## Getting Started

1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Review issues and Kanban board
4. Start with tasks labeled `setup` or `data`

## Contributing

This project follows a structured workflow with labeled issues and Kanban board tracking. Please:
- Check existing issues before creating new ones
- Use appropriate labels when creating issues
- Follow the commit naming convention (see issue #17)
- Follow Gitflow methodology (see issue #16)
