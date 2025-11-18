# 📊 Guía de Análisis: Barcelona AirBnB Dataset

## 🎯 PROYECTO: Análisis Comparativo Madrid vs Barcelona
**Dataset:** Barcelona AirBnB  
**Analista:** [Tu nombre]  
**Dataset de comparación:** Madrid (compañero)  
**Fecha:** 12 de Noviembre, 2025

---

## 📋 ÍNDICE

1. [Estructura del Dataset Barcelona](#estructura-del-dataset)
2. [PASO 1: Limpieza y Validación de Datos](#paso-1-limpieza-y-validación)
3. [PASO 2: Plan de Análisis](#paso-2-plan-de-análisis)
4. [PASO 3: Análisis Paso a Paso](#paso-3-análisis-paso-a-paso)
5. [PASO 4: Comparación Madrid vs Barcelona](#paso-4-comparación-preparación)
6. [Checklist y Entregables](#checklist-final)

---

## 📊 ESTRUCTURA DEL DATASET

### Columnas Disponibles (18 columnas)

Tu dataset de Barcelona es **más simple** que el de Madrid, pero suficiente para un análisis completo:

| Columna | Tipo Esperado | Descripción |
|---------|---------------|-------------|
| `id` | Entero | ID único del listing |
| `name` | Texto | Nombre de la propiedad |
| `host_id` | Entero | ID del host |
| `host_name` | Texto | Nombre del host |
| `neighbourhood_group` | Texto | Distrito/Grupo de barrios |
| `neighbourhood` | Texto | Barrio específico |
| `latitude` | Decimal | Latitud (coordenada GPS) |
| `longitude` | Decimal | Longitud (coordenada GPS) |
| `room_type` | Texto | Tipo de habitación |
| `price` | Entero/Decimal | Precio por noche |
| `minimum_nights` | Entero | Noches mínimas |
| `number_of_reviews` | Entero | Total de reviews |
| `last_review` | Fecha | Fecha último review |
| `reviews_per_month` | Decimal | Reviews por mes |
| `calculated_host_listings_count` | Entero | Listings del host |
| `availability_365` | Entero | Días disponibles/año |
| `number_of_reviews_ltm` | Entero | Reviews últimos 12 meses |
| `license` | Texto | Licencia (si tiene) |

### ⚠️ Diferencias vs Madrid Dataset

**Barcelona NO tiene:**
- Datos detallados de host (superhost, response rate, etc.)
- Ratings específicos (cleanliness, location, etc.)
- Revenue estimado
- Property types detallados
- Amenities

**Esto significa:**
- Análisis más enfocado en precio, ubicación y reviews
- No podemos analizar Superhosts
- No podemos analizar revenue directamente
- Tendremos que ESTIMAR algunas métricas

---

## 🧹 PASO 1: LIMPIEZA Y VALIDACIÓN DE DATOS

### 1.1 IMPORTAR EL DATASET

```
1. Abrir Power BI Desktop
2. Click "Obtener datos" (Get Data)
3. Seleccionar "Texto/CSV"
4. Navegar a tu archivo Barcelona CSV
5. Click "Abrir"
6. ⚠️ IMPORTANTE: Click "Transformar datos" (NO "Cargar")
```

Esto abrirá **Power Query Editor** donde haremos toda la limpieza.

---

### 1.2 VERIFICAR Y CORREGIR TIPOS DE DATOS

En Power Query Editor, verifica cada columna:

#### ✅ Verificación de Tipos:

```
Columna                          | Tipo Correcto
---------------------------------|------------------
id                               | Número entero
name                             | Texto
host_id                          | Número entero
host_name                        | Texto
neighbourhood_group              | Texto
neighbourhood                    | Texto
latitude                         | Número decimal ⚠️
longitude                        | Número decimal ⚠️
room_type                        | Texto
price                            | Número decimal ⚠️
minimum_nights                   | Número entero
number_of_reviews                | Número entero
last_review                      | Fecha ⚠️
reviews_per_month                | Número decimal
calculated_host_listings_count   | Número entero
availability_365                 | Número entero
number_of_reviews_ltm            | Número entero
license                          | Texto
```

#### 📝 Cómo Cambiar Tipos:

```
1. Click en el ícono del tipo de dato (al lado del nombre de columna)
2. Selecciona el tipo correcto:
   - Número entero (Whole Number)
   - Número decimal (Decimal Number)
   - Texto (Text)
   - Fecha (Date)
```

**Cambios CRÍTICOS que debes hacer:**
- `latitude` → Decimal Number
- `longitude` → Decimal Number
- `price` → Decimal Number (si está como texto)
- `last_review` → Date

---

### 1.3 DETECTAR VALORES NULOS

#### Check 1: Ver Estadísticas de Columnas

```
1. En Power Query, menú "Vista"
2. Activar "Calidad de columnas"
3. Activar "Distribución de columnas"
4. Activar "Perfil de columnas"
```

Esto mostrará:
- % de valores válidos
- % de errores
- % de valores vacíos

#### Check 2: Crear Query para Contar Nulos

```
1. Click derecho en tu tabla (panel izquierdo)
2. "Duplicar"
3. Nombra: "Análisis Nulos"
```

Para cada columna importante, revisa:

**Columnas que DEBEN tener valores:**
- ✅ `id` - No puede ser nulo
- ✅ `latitude`, `longitude` - Necesarios para mapas
- ✅ `price` - Esencial para análisis
- ✅ `room_type` - Esencial para análisis

**Columnas que PUEDEN ser nulas:**
- ⚠️ `last_review` - Puede ser nulo si no hay reviews
- ⚠️ `reviews_per_month` - Puede ser nulo si no hay reviews
- ⚠️ `license` - Puede ser nulo si no tiene licencia

#### Acción para Nulos:

**Opción 1: Filtrar filas con nulos en columnas críticas**
```
1. Selecciona columna (ej: price)
2. Click en filtro dropdown
3. Deselecciona (null)
4. Click OK
```

**Opción 2: Reemplazar nulos con valores**
```
1. Selecciona columna
2. Click derecho → "Reemplazar valores"
3. Valor a buscar: null
4. Reemplazar con: 0 (o valor apropiado)
```

**Recomendación:**
- `price` = null → **ELIMINAR fila** (no útil sin precio)
- `latitude`/`longitude` = null → **ELIMINAR fila**
- `reviews_per_month` = null → **Reemplazar con 0**
- `last_review` = null → **Dejar como está**

---

### 1.4 DETECTAR DUPLICADOS

#### Check por ID Duplicado:

```
1. Click derecho en columna "id"
2. "Quitar duplicados"
```

**Si encuentra duplicados:**
```
Power Query mostrará mensaje: "X filas eliminadas"
```

Anota este número para tu reporte.

#### Verificación Manual:

```
1. Selecciona columna "id"
2. Transformar → "Estadísticas de columna"
3. Comparar:
   - Count (total filas)
   - Distinct Count (valores únicos)
```

Si Count ≠ Distinct Count → HAY DUPLICADOS

---

### 1.5 DETECTAR OUTLIERS EN PRECIO

Antes de cargar, vamos a identificar outliers:

#### Crear Columna Temporal para Ver Estadísticas:

```
1. En Power Query, selecciona "price"
2. Transformar → "Estadísticas"
```

Verás:
- Mínimo
- Máximo
- Mediana
- Media

**Outliers típicos:**
- Precios = 0€ (Probablemente error)
- Precios > 1000€/noche (Muy pocos, pueden ser válidos)

#### Filtrar Precios Sospechosos:

**Para análisis, considera filtrar:**
```
1. Click en filtro de "price"
2. "Filtros de número" → "Mayor que" → 10
3. "Filtros de número" → "Menor que" → 1000
```

Esto elimina:
- Precios = 0 (error)
- Precios < 10€ (probablemente error)
- Precios > 1000€ (outliers extremos)

⚠️ **IMPORTANTE:** Guarda los outliers en una query separada antes de eliminar:
```
1. Duplica la query
2. Nombra: "Outliers_Precio"
3. Filtra: price < 10 OR price > 1000
```

---

### 1.6 VALIDAR ROOM_TYPE

```
1. Click en filtro de "room_type"
2. Verifica valores únicos
```

**Valores esperados:**
- Entire home/apt
- Private room
- Shared room
- Hotel room (raro)

**Si hay valores extraños:**
```
Transformar → Reemplazar valores
Estandarizar nombres si es necesario
```

---

### 1.7 VALIDAR COORDENADAS GEOGRÁFICAS

Barcelona está aproximadamente en:
- Latitud: 41.38 - 41.45
- Longitud: 2.10 - 2.22

#### Crear Filtros de Validación:

```
1. Selecciona "latitude"
2. Filtros de número → "Entre" → 41.3 y 41.5

3. Selecciona "longitude"
4. Filtros de número → "Entre" → 2.0 y 2.3
```

Esto elimina coordenadas fuera de Barcelona (errores).

---

### 1.8 CREAR COLUMNAS CALCULADAS ÚTILES

Antes de cargar, vamos a crear algunas columnas:

#### Columna 1: Has Reviews (Booleano)
```
1. Agregar columna → Columna personalizada
2. Nombre: "has_reviews"
3. Fórmula:
```
```
if [number_of_reviews] > 0 then true else false
```

#### Columna 2: Has License (Booleano)
```
1. Agregar columna → Columna personalizada
2. Nombre: "has_license"
3. Fórmula:
```
```
if [license] = null then false else true
```

#### Columna 3: Host Type (Profesional vs Ocasional)
```
1. Agregar columna → Columna personalizada
2. Nombre: "host_type"
3. Fórmula:
```
```
if [calculated_host_listings_count] >= 3 then "Profesional (3+)" 
else if [calculated_host_listings_count] >= 2 then "Multi-listing (2)"
else "Ocasional (1)"
```

#### Columna 4: Availability Category
```
1. Agregar columna → Columna personalizada
2. Nombre: "availability_category"
3. Fórmula:
```
```
if [availability_365] = 0 then "No disponible"
else if [availability_365] < 90 then "Baja (<90 días)"
else if [availability_365] < 180 then "Media (90-180)"
else if [availability_365] < 270 then "Alta (180-270)"
else "Muy alta (270+)"
```

#### Columna 5: Price Segment
```
1. Agregar columna → Columna personalizada
2. Nombre: "price_segment"
3. Fórmula:
```
```
if [price] < 50 then "Budget (<50€)"
else if [price] < 100 then "Mid-range (50-100€)"
else if [price] < 200 then "Premium (100-200€)"
else "Luxury (200+€)"
```

#### Columna 6: Reviews Activity
```
1. Agregar columna → Columna personalizada
2. Nombre: "review_activity"
3. Fórmula:
```
```
if [reviews_per_month] = null or [reviews_per_month] = 0 then "Sin actividad"
else if [reviews_per_month] < 1 then "Baja (<1/mes)"
else if [reviews_per_month] < 3 then "Media (1-3/mes)"
else "Alta (3+/mes)"
```

---

### 1.9 CREAR QUERY DE RESUMEN DE LIMPIEZA

Antes de finalizar, crea un reporte de limpieza:

```
1. Duplica tu query principal
2. Nombra: "Reporte_Limpieza"
3. Agregar columna → Columna de índice (desde 1)
```

Anota estos números para tu documentación:

**REPORTE DE LIMPIEZA A DOCUMENTAR:**

```markdown
## Resultados de Limpieza de Datos

### Datos Originales:
- Total filas iniciales: [ANOTAR]
- Total columnas: 18

### Valores Nulos Encontrados:
- price: [X] nulos → [Acción tomada]
- latitude/longitude: [X] nulos → [Acción tomada]
- last_review: [X] nulos → [Dejado como está]
- reviews_per_month: [X] nulos → [Reemplazado con 0]
- license: [X] nulos → [Es normal]

### Duplicados:
- IDs duplicados encontrados: [X]
- Acción: Eliminados

### Outliers en Precio:
- Precios < 10€: [X] → Eliminados
- Precios > 1000€: [X] → Guardados en query separada
- Precios = 0€: [X] → Eliminados

### Coordenadas Inválidas:
- Fuera de rango Barcelona: [X] → Eliminadas

### Datos Finales:
- Total filas después de limpieza: [ANOTAR]
- % de datos retenidos: [CALCULAR]
- Datos listos para análisis: SÍ ✅
```

---

### 1.10 FINALIZAR Y CARGAR

```
1. Revisa todos los "Pasos aplicados" (panel derecho)
2. Verifica que todo esté correcto
3. Click "Cerrar y aplicar" (Close & Apply)
```

**Power BI cargará los datos limpios a tu modelo.**

---

## 📊 PASO 2: PLAN DE ANÁLISIS

### Objetivos del Análisis Barcelona

#### 🎯 Objetivos Principales:

1. **Análisis de Precios**
   - Distribución de precios en Barcelona
   - Outliers y segmentación
   - Factores que influyen en precio

2. **Análisis Geográfico**
   - Hotspots de listings
   - Distribución por distritos y barrios
   - Precios por ubicación

3. **Análisis de Hosts**
   - Hosts profesionales vs ocasionales
   - Distribución de listings por host
   - Impacto en precios

4. **Análisis de Reviews**
   - Correlación reviews-precio
   - Actividad de reviews
   - Listings sin reviews

5. **Análisis de Disponibilidad**
   - Ocupación estimada
   - Revenue estimado (calcular)
   - Patterns de disponibilidad

6. **Análisis de Licencias**
   - % con licencia vs sin licencia
   - Impacto de licencias en precio

7. **Insights de Negocio**
   - Recomendaciones data-driven
   - Oportunidades de mercado
   - Comparación con Madrid

---

### 📈 Estructura del Dashboard

#### **Página 1: Executive Overview**
- 4-6 KPI Cards
- Mapa principal
- Distribución de Room Types
- Top Neighbourhoods

#### **Página 2: Price Analysis**
- Price distribution
- Price by Room Type
- Price by Neighbourhood Group
- Price vs Reviews

#### **Página 3: Geographic Analysis**
- Mapas detallados
- Heatmaps de precio
- Neighbourhood analysis

#### **Página 4: Host & Market Analysis**
- Host types distribution
- Professional vs Occasional
- License analysis
- Availability patterns

#### **Página 5: Comparison Madrid vs Barcelona**
- KPIs comparativos
- Price differences
- Market characteristics

---

## 🔍 PASO 3: ANÁLISIS PASO A PASO

### ANÁLISIS 1: KPIs PRINCIPALES

#### 1.1 Crear Medidas DAX Básicas

En la vista de Datos, crea estas medidas:

```dax
// ===== MEDIDAS BÁSICAS =====

// Total de Listings
Total Listings = COUNTROWS('Barcelona')

// Precio Promedio
Precio Promedio = AVERAGE('Barcelona'[price])

// Precio Mediana
Precio Mediana = MEDIAN('Barcelona'[price])

// Precio Mínimo y Máximo
Precio Mínimo = MIN('Barcelona'[price])
Precio Máximo = MAX('Barcelona'[price])

// Total Reviews
Total Reviews = SUM('Barcelona'[number_of_reviews])

// Reviews Promedio por Listing
Reviews Promedio = AVERAGE('Barcelona'[number_of_reviews])

// Disponibilidad Promedio
Disponibilidad Promedio = AVERAGE('Barcelona'[availability_365])

// Total Hosts Únicos
Total Hosts = DISTINCTCOUNT('Barcelona'[host_id])

// Listings por Host Promedio
Listings por Host = 
DIVIDE(
    [Total Listings],
    [Total Hosts],
    0
)

// % Listings con Reviews
% Con Reviews = 
DIVIDE(
    CALCULATE(
        [Total Listings],
        'Barcelona'[number_of_reviews] > 0
    ),
    [Total Listings],
    0
)

// % Listings con Licencia
% Con Licencia = 
DIVIDE(
    CALCULATE(
        [Total Listings],
        'Barcelona'[has_license] = TRUE
    ),
    [Total Listings],
    0
)
```

#### 1.2 Crear KPI Cards

Crea **6 Cards** en la parte superior:

```
Card 1: Total Listings
Card 2: Precio Promedio
Card 3: Total Reviews
Card 4: Total Hosts
Card 5: % Con Licencia
Card 6: Disponibilidad Promedio
```

**Formato de Cards:**
```
- Font size: 28pt (número)
- Agregar título descriptivo
- Usar íconos si es posible
- Color de fondo suave
```

---

### ANÁLISIS 2: DISTRIBUCIÓN DE PRECIOS

#### 2.1 Histograma de Precios

```
Visualización: Clustered Column Chart
X-axis: price (bin to 20€ intervals)
Y-axis: Count of id
Title: "Distribución de Precios Barcelona"

Configuración:
- Format X-axis: Bins → 20€ intervals
- Add data labels if not too cluttered
- Color: Gradient based on frequency
```

#### 2.2 Box Plot Estadístico

Crear visualización con medidas:

```dax
// Crear medidas para Box Plot
Percentil 25 = PERCENTILE.INC('Barcelona'[price], 0.25)
Percentil 75 = PERCENTILE.INC('Barcelona'[price], 0.75)
IQR = [Percentil 75] - [Percentil 25]

Outlier Inferior = [Percentil 25] - (1.5 * [IQR])
Outlier Superior = [Percentil 75] + (1.5 * [IQR])
```

```
Visualización: Clustered Bar Chart
Use measures to show:
- Mínimo
- Percentil 25
- Mediana
- Percentil 75
- Máximo
```

#### 2.3 Precio por Room Type

```
Visualización: Clustered Column Chart
X-axis: room_type
Y-axis: Precio Promedio
Title: "Precio Promedio por Tipo de Habitación"

Add:
- Data labels with € symbol
- Sort descending by price
- Different color per room type
```

#### 2.4 Precio por Neighbourhood Group

```
Visualización: Bar Chart (horizontal)
Y-axis: neighbourhood_group
X-axis: Precio Promedio
Title: "Precio Promedio por Distrito"

Sort descending by price
```

#### 2.5 Scatter: Precio vs Reviews

```
Visualización: Scatter Chart
X-axis: price
Y-axis: number_of_reviews
Size: availability_365
Legend: room_type
Title: "Relación Precio vs Reviews"
```

---

### ANÁLISIS 3: ANÁLISIS GEOGRÁFICO

#### 3.1 Mapa Principal de Listings

```
Visualización: Map
Location: latitude, longitude
Size: price (bigger = more expensive)
Legend: room_type
Title: "Distribución Geográfica - Barcelona"

Format:
- Map style: Aerial or Dark
- Bubble opacity: 70%
- Zoom: Fit to Barcelona
```

#### 3.2 Mapa de Calor de Precios

```
Visualización: Map (Filled Map)
Location: neighbourhood
Values: Precio Promedio
Title: "Heatmap de Precios por Barrio"

Format:
- Color saturation: Diverging
- Low: Light color
- High: Dark/Intense color
```

#### 3.3 Top 10 Neighbourhoods por Listings

```
Visualización: Bar Chart
Y-axis: neighbourhood
X-axis: Total Listings
Title: "Top 10 Barrios con Más Listings"

Filter: Top 10
Sort: Descending
```

#### 3.4 Top 10 Neighbourhoods por Precio

```
Visualización: Bar Chart
Y-axis: neighbourhood
X-axis: Precio Promedio
Title: "Top 10 Barrios Más Caros"

Filter: Top 10
Sort: Descending
```

---

### ANÁLISIS 4: ANÁLISIS DE HOSTS

#### 4.1 Distribución Host Type

```
Visualización: Donut Chart
Legend: host_type (calculated column)
Values: Total Listings
Title: "Distribución: Hosts Profesionales vs Ocasionales"

Add percentage labels
```

#### 4.2 Precio por Host Type

```
Visualización: Clustered Column Chart
X-axis: host_type
Y-axis: Precio Promedio
Title: "Precio Promedio por Tipo de Host"
```

#### 4.3 Top 10 Hosts

```
Visualización: Bar Chart
Y-axis: host_name
X-axis: calculated_host_listings_count
Title: "Top 10 Hosts con Más Propiedades"

Filter: Top 10
Sort: Descending
```

#### 4.4 Scatter: Listings por Host vs Precio

```
Visualización: Scatter Chart
X-axis: calculated_host_listings_count
Y-axis: Precio Promedio
Size: number_of_reviews
Title: "Número de Listings vs Precio"
```

---

### ANÁLISIS 5: ANÁLISIS DE REVIEWS

#### 5.1 Distribución de Reviews

```
Visualización: Histogram
X-axis: number_of_reviews (bins)
Y-axis: Count
Title: "Distribución de Reviews por Listing"
```

#### 5.2 Reviews por Room Type

```
Visualización: Clustered Column Chart
X-axis: room_type
Y-axis: Reviews Promedio
Title: "Reviews Promedio por Tipo"
```

#### 5.3 Actividad de Reviews

```
Visualización: Donut Chart
Legend: review_activity (calculated column)
Values: Total Listings
Title: "Actividad de Reviews"
```

#### 5.4 Correlación: Reviews vs Availability

```
Visualización: Scatter Chart
X-axis: number_of_reviews
Y-axis: availability_365
Size: price
Legend: room_type
Title: "Reviews vs Disponibilidad"
```

---

### ANÁLISIS 6: ANÁLISIS DE DISPONIBILIDAD

#### 6.1 Distribución de Disponibilidad

```
Visualización: Donut Chart
Legend: availability_category
Values: Total Listings
Title: "Categorías de Disponibilidad"
```

#### 6.2 Availability por Room Type

```
Visualización: Clustered Column Chart
X-axis: room_type
Y-axis: Disponibilidad Promedio
Title: "Disponibilidad Promedio por Tipo"
```

#### 6.3 Estimar Revenue Potencial

```dax
// Crear medida para estimar revenue
// Asumiendo 70% de ocupación basado en availability

Ocupación Estimada = 
VAR MaxOcupacion = 0.70  // 70% max realistic
VAR DisponibilidadPromedio = [Disponibilidad Promedio]
VAR FactorOcupacion = MIN(DisponibilidadPromedio / 365, MaxOcupacion)
RETURN FactorOcupacion

Días Ocupados Estimados = 
[Ocupación Estimada] * 365

Revenue Anual Estimado = 
[Días Ocupados Estimados] * [Precio Promedio]

Revenue Total Estimado = 
SUMX(
    'Barcelona',
    VAR Disponibilidad = 'Barcelona'[availability_365]
    VAR Precio = 'Barcelona'[price]
    VAR OcupacionEstimada = MIN(Disponibilidad / 365 * 0.70, 0.70)
    VAR DiasOcupados = OcupacionEstimada * 365
    RETURN DiasOcupados * Precio
)
```

#### 6.4 Revenue Cards

```
Card: Revenue Total Estimado
Card: Revenue Promedio por Listing
Card: Ocupación Estimada %
```

---

### ANÁLISIS 7: ANÁLISIS DE LICENCIAS

#### 7.1 Distribución Con/Sin Licencia

```
Visualización: Donut Chart
Legend: has_license
Values: Total Listings
Title: "Distribución de Licencias"

Format: Show percentages
```

#### 7.2 Precio: Con Licencia vs Sin Licencia

```
Visualización: Clustered Column Chart
X-axis: has_license
Y-axis: Precio Promedio
Title: "Precio: Con Licencia vs Sin Licencia"
```

#### 7.3 Licencias por Neighbourhood Group

```
Visualización: 100% Stacked Column Chart
X-axis: neighbourhood_group
Y-axis: Count of id
Legend: has_license
Title: "% de Licencias por Distrito"
```

---

### ANÁLISIS 8: SEGMENTACIÓN DE MERCADO

#### 8.1 Distribución Price Segments

```
Visualización: Donut Chart
Legend: price_segment
Values: Total Listings
Title: "Segmentos de Mercado"
```

#### 8.2 Matrix: Segment x Room Type

```
Visualización: Matrix
Rows: price_segment
Columns: room_type
Values: Total Listings, Precio Promedio
Title: "Matriz de Segmentación"
```

#### 8.3 Revenue por Segment

```
Visualización: Clustered Column Chart
X-axis: price_segment (ordered)
Y-axis: Revenue Total Estimado
Title: "Revenue Estimado por Segmento"
```

---

### ANÁLISIS 9: SLICERS (FILTROS INTERACTIVOS)

Añade estos slicers para interactividad:

#### Slicer 1: Price Range
```
Type: Slicer
Field: price
Style: Between (slider)
Position: Top or Sidebar
```

#### Slicer 2: Room Type
```
Type: Slicer
Field: room_type
Style: Tile or List
```

#### Slicer 3: Neighbourhood Group
```
Type: Slicer
Field: neighbourhood_group
Style: Dropdown
```

#### Slicer 4: Host Type
```
Type: Slicer
Field: host_type
Style: Tile
```

#### Slicer 5: Has License
```
Type: Slicer
Field: has_license
Style: Tile
```

#### Slicer 6: Minimum Reviews
```
Type: Slicer
Field: number_of_reviews
Style: Greater than or equal to
```

---

## 🔄 PASO 4: COMPARACIÓN MADRID VS BARCELONA (PREPARACIÓN)

### 4.1 Preparar Datos para Comparación

Para comparar con Madrid, necesitas crear medidas que funcionen con ambos datasets.

#### Opción 1: Importar ambos datasets en el mismo archivo

```
1. Importar Barcelona (ya hecho)
2. Importar Madrid (nuevo)
3. Crear tabla de "Ciudades" para relacionar
4. Usar medidas que funcionen con ambas tablas
```

#### Opción 2: Crear métricas exportables

Crea una tabla resumen en Excel con:

```
Métrica | Barcelona | Madrid
--------|-----------|-------
Total Listings | [X] | [Compañero completa]
Precio Promedio | [X] | 
Precio Mediana | [X] |
Reviews Promedio | [X] |
Hosts Totales | [X] |
Listings/Host | [X] |
% Con Reviews | [X] |
Disponibilidad | [X] |
Revenue Estimado | [X] |
```

### 4.2 Métricas Clave para Comparar

```dax
// Crear estas medidas para fácil exportación

Resumen Barcelona = 
"Total Listings: " & [Total Listings] & UNICHAR(10) &
"Precio Promedio: €" & ROUND([Precio Promedio], 2) & UNICHAR(10) &
"Total Hosts: " & [Total Hosts] & UNICHAR(10) &
"Listings/Host: " & ROUND([Listings por Host], 2) & UNICHAR(10) &
"% Con Licencia: " & FORMAT([% Con Licencia], "0%")
```

### 4.3 Crear Página de Comparación

Una vez tengas datos de Madrid, crea:

```
Página: "Comparación BCN vs MAD"

Layout:
┌─────────────────────────────────────┐
│