# 📊 Guía de Análisis: Dataset Multi-Ciudad AirBnB

## 🎯 SITUACIÓN ACTUAL Y DECISIÓN ESTRATÉGICA

### Lo que tienes ahora:
1. ✅ **Archivo Barcelona individual** - Ya limpio en Power BI
2. ✅ **Archivo `processed_all_cities.csv`** - Dataset combinado de 6 ciudades (ya limpio)

### 🤔 ¿Qué hacer?

## ⚡ RECOMENDACIÓN: TRABAJAR CON EL DATASET MULTI-CIUDAD

**Razones:**
- ✅ Ya está limpio y procesado (sin nulos, outliers marcados)
- ✅ Permite comparaciones directas Madrid vs Barcelona
- ✅ Schema consistente entre todas las ciudades
- ✅ Incluye columnas calculadas útiles (`price_log`, `price_zscore`, `price_outlier_iqr`)
- ✅ Más profesional para la presentación final
- ✅ Mejor para insights de negocio comparativos

**Mi recomendación: CREAR UN NUEVO ARCHIVO DE POWER BI**
- Archivo 1 (existente): `Barcelona_Individual_Analysis.pbix` → Guardar como respaldo/referencia
- Archivo 2 (nuevo): `AirBnB_Multi_City_Analysis.pbix` → Usar para análisis final

---

## 📋 PLAN DE ACCIÓN PASO A PASO

---

## 🗂️ PASO 0: ORGANIZACIÓN Y RESPALDO

### 0.1 Guardar tu Trabajo Actual

```
1. En Power BI Desktop, tu archivo actual de Barcelona
2. File → Save As
3. Guardar como: "Barcelona_Individual_BACKUP.pbix"
4. Cerrar Power BI Desktop
```

### 0.2 Crear Carpeta de Proyecto Organizada

Estructura recomendada:
```
📁 Proyecto_AirBnB/
├── 📁 data/
│   ├── 📁 raw/
│   │   └── barcelona_original.csv
│   ├── 📁 processed/
│   │   └── processed_all_cities.csv
│   └── 📁 powerbi/
│       ├── processed_all_cities.csv (copia aquí)
│       └── agg_all_cities.csv (si lo tienes)
├── 📁 powerbi/
│   ├── Barcelona_Individual_BACKUP.pbix
│   └── AirBnB_Multi_City_Analysis.pbix (nuevo)
├── 📁 docs/
│   ├── esta_guia.md
│   └── insights_encontrados.md
└── 📁 screenshots/
    └── (tus capturas de pantalla)
```

---

## 📥 PASO 1: IMPORTAR EL DATASET MULTI-CIUDAD

### 1.1 Abrir Power BI Desktop (nuevo archivo)

```
1. Abrir Power BI Desktop
2. NO abrir archivo anterior
3. Empezar en blanco
```

### 1.2 Importar processed_all_cities.csv

```
1. Click "Obtener datos" (Get Data)
2. Seleccionar "Texto/CSV"
3. Navegar a: data/powerbi/processed_all_cities.csv
4. Click "Abrir"
5. Se abre ventana de vista previa
```

### 1.3 Verificar Vista Previa

**Verifica que veas estas columnas (21 columnas):**

| # | Columna | Tipo Esperado |
|---|---------|---------------|
| 1 | city | Texto |
| 2 | id | Entero |
| 3 | price | Decimal |
| 4 | latitude | Decimal |
| 5 | longitude | Decimal |
| 6 | neighbourhood | Texto |
| 7 | calculated_host_listings_count | Entero |
| 8 | host_id | Entero |
| 9 | price_outlier_iqr | Booleano/Texto |
| 10 | room_type | Texto |
| 11 | name | Texto |
| 12 | neighbourhood_group | Texto |
| 13 | reviews_per_month | Decimal |
| 14 | number_of_reviews | Entero |
| 15 | price_log | Decimal |
| 16 | availability_365 | Entero |
| 17 | price_zscore | Decimal |
| 18 | price_outlier_z | Booleano/Texto |
| 19 | minimum_nights | Entero |
| 20 | last_review | Fecha |
| 21 | host_name | Texto |

### 1.4 Click "Transformar Datos"

⚠️ **NO hacer "Cargar" directamente** - Necesitamos verificar tipos de datos primero.

---

## 🔍 PASO 2: VERIFICACIÓN EN POWER QUERY

### 2.1 Activar Vistas de Calidad

```
1. En Power Query Editor
2. Menú "Vista" (View)
3. Activar:
   ✅ Calidad de columnas (Column Quality)
   ✅ Distribución de columnas (Column Distribution)
   ✅ Perfil de columnas (Column Profile)
```

### 2.2 Verificar Tipos de Datos

#### Tipos que DEBEN estar correctos:

```
✅ city: ABC (Text)
✅ price: 123 (Decimal Number)
✅ latitude: 123 (Decimal Number)
✅ longitude: 123 (Decimal Number)
✅ price_log: 123 (Decimal Number)
✅ price_zscore: 123 (Decimal Number)
✅ availability_365: 123 (Whole Number)
✅ number_of_reviews: 123 (Whole Number)
✅ last_review: 📅 (Date)
```

#### Si algún tipo está mal:

```
1. Click en el ícono del tipo (junto al nombre de columna)
2. Seleccionar el tipo correcto
```

### 2.3 Verificar que NO hay Nulos en Columnas Críticas

Según las instrucciones, **ya está limpio**, pero verifica:

```
Mira la barra de "Calidad de columnas" (arriba de cada columna):
- Verde = % válidos
- Gris = % vacíos

Para estas columnas, DEBE ser 100% verde:
✅ city
✅ id
✅ price
✅ latitude
✅ longitude
✅ room_type
```

**Si ves grises (nulos):** Significa que hay problema con el archivo. Reporta a tu equipo.

### 2.4 Verificar Valores Únicos de "city"

```
1. Click en filtro de columna "city"
2. Deberías ver 6 ciudades (ejemplo):
   - madrid
   - barcelona
   - sevilla
   - valencia
   - malaga
   - bilbao
   (Los nombres exactos pueden variar)
```

**📝 ANOTA LAS CIUDADES QUE TIENES:**
- Ciudad 1: ____________
- Ciudad 2: ____________
- Ciudad 3: ____________
- Ciudad 4: ____________
- Ciudad 5: ____________
- Ciudad 6: ____________

### 2.5 Verificar Conteo de Filas

```
Mira la esquina inferior izquierda:
"X filas"

📝 ANOTA: Total de filas: ____________
```

---

## 🛠️ PASO 3: CREAR COLUMNAS CALCULADAS ÚTILES

Aunque el dataset está limpio, vamos a añadir columnas para facilitar el análisis.

### 3.1 Host Type (Profesional vs Ocasional)

```
1. En Power Query: Agregar columna → Columna personalizada
2. Nombre: host_type
3. Fórmula:
```

```m
if [calculated_host_listings_count] >= 5 then "Profesional (5+)"
else if [calculated_host_listings_count] >= 3 then "Multi-Listing (3-4)"
else if [calculated_host_listings_count] >= 2 then "Dual-Listing (2)"
else "Ocasional (1)"
```

### 3.2 Price Segment

```
1. Agregar columna → Columna personalizada
2. Nombre: price_segment
3. Fórmula:
```

```m
if [price] < 30 then "Budget (<30€)"
else if [price] < 60 then "Economy (30-60€)"
else if [price] < 100 then "Mid-Range (60-100€)"
else if [price] < 150 then "Premium (100-150€)"
else if [price] < 250 then "Luxury (150-250€)"
else "Ultra-Luxury (250+€)"
```

### 3.3 Availability Category

```
1. Agregar columna → Columna personalizada
2. Nombre: availability_category
3. Fórmula:
```

```m
if [availability_365] = 0 then "No Disponible"
else if [availability_365] < 60 then "Muy Baja (<60)"
else if [availability_365] < 180 then "Baja (60-180)"
else if [availability_365] < 270 then "Media (180-270)"
else "Alta (270+)"
```

### 3.4 Review Activity Level

```
1. Agregar columna → Columna personalizada
2. Nombre: review_activity
3. Fórmula:
```

```m
if [reviews_per_month] = null or [reviews_per_month] = 0 then "Sin Reviews"
else if [reviews_per_month] < 0.5 then "Muy Baja (<0.5/mes)"
else if [reviews_per_month] < 1.5 then "Baja (0.5-1.5/mes)"
else if [reviews_per_month] < 3 then "Media (1.5-3/mes)"
else "Alta (3+/mes)"
```

### 3.5 Is Outlier (Combinado)

```
1. Agregar columna → Columna personalizada
2. Nombre: is_price_outlier
3. Fórmula:
```

```m
if [price_outlier_iqr] = "True" or [price_outlier_z] = "True" then "Outlier"
else "Normal"
```

### 3.6 Occupancy Estimate (Estimación)

```
1. Agregar columna → Columna personalizada
2. Nombre: estimated_occupancy_rate
3. Fórmula:
```

```m
// Basado en reviews_per_month
// Asumiendo: 1 review cada 3 reservas, estancia promedio 3 días
if [reviews_per_month] = null or [reviews_per_month] = 0 then 0
else 
    let
        bookings_per_month = [reviews_per_month] * 3,
        days_booked = bookings_per_month * 3,
        occupancy = days_booked / 30
    in
        Number.Min(occupancy, 0.95) // Cap at 95%
```

### 3.7 Estimated Monthly Revenue

```
1. Agregar columna → Columna personalizada
2. Nombre: estimated_monthly_revenue
3. Fórmula:
```

```m
[price] * [estimated_occupancy_rate] * 30
```

---

## ✅ PASO 4: CERRAR Y APLICAR

```
1. Revisa todos los "Pasos aplicados" (panel derecho)
2. Verifica que todo esté correcto
3. Click "Cerrar y aplicar" (Close & Apply)
```

**⏳ Esto puede tardar 1-2 minutos** dependiendo del tamaño del dataset.

---

## 📊 PASO 5: CREAR MEDIDAS DAX FUNDAMENTALES

Ahora en la vista de **Datos** o **Reporte**, vamos a crear medidas.

### 5.1 Cómo Crear Medidas

```
1. En panel "Campos" (derecha)
2. Click derecho en tu tabla (nombre del archivo)
3. "Nueva medida"
4. Escribe la fórmula DAX
5. Enter
```

### 5.2 Medidas Básicas Globales

```dax
// ========== CONTEOS ==========

Total Listings = COUNTROWS('processed_all_cities')

Total Cities = DISTINCTCOUNT('processed_all_cities'[city])

Total Hosts = DISTINCTCOUNT('processed_all_cities'[host_id])

Total Neighbourhoods = DISTINCTCOUNT('processed_all_cities'[neighbourhood])

// ========== PRECIOS ==========

Precio Promedio = AVERAGE('processed_all_cities'[price])

Precio Mediana = MEDIAN('processed_all_cities'[price])

Precio Mínimo = MIN('processed_all_cities'[price])

Precio Máximo = MAX('processed_all_cities'[price])

Precio StdDev = STDEV.P('processed_all_cities'[price])

// ========== REVIEWS ==========

Total Reviews = SUM('processed_all_cities'[number_of_reviews])

Reviews Promedio = AVERAGE('processed_all_cities'[number_of_reviews])

Reviews por Mes Promedio = AVERAGE('processed_all_cities'[reviews_per_month])

// ========== DISPONIBILIDAD ==========

Disponibilidad Promedio = AVERAGE('processed_all_cities'[availability_365])

% Alta Disponibilidad = 
DIVIDE(
    CALCULATE(
        [Total Listings],
        'processed_all_cities'[availability_365] >= 270
    ),
    [Total Listings],
    0
)

// ========== HOSTS ==========

Listings por Host = 
DIVIDE(
    [Total Listings],
    [Total Hosts],
    0
)

% Hosts Profesionales = 
DIVIDE(
    CALCULATE(
        [Total Listings],
        'processed_all_cities'[host_type] = "Profesional (5+)"
    ),
    [Total Listings],
    0
)

// ========== REVENUE ESTIMADO ==========

Revenue Mensual Estimado Total = 
SUMX(
    'processed_all_cities',
    [estimated_monthly_revenue]
)

Revenue Mensual Promedio = 
AVERAGE('processed_all_cities'[estimated_monthly_revenue])

Revenue Anual Estimado = [Revenue Mensual Estimado Total] * 12

// ========== OUTLIERS ==========

% Outliers = 
DIVIDE(
    CALCULATE(
        [Total Listings],
        'processed_all_cities'[is_price_outlier] = "Outlier"
    ),
    [Total Listings],
    0
)
```

### 5.3 Medidas de Comparación entre Ciudades

```dax
// ========== PRECIO POR CIUDAD ==========

Precio Madrid = 
CALCULATE(
    [Precio Promedio],
    'processed_all_cities'[city] = "madrid"
)

Precio Barcelona = 
CALCULATE(
    [Precio Promedio],
    'processed_all_cities'[city] = "barcelona"
)

Diferencia MAD vs BCN = [Precio Madrid] - [Precio Barcelona]

% Diferencia MAD vs BCN = 
DIVIDE(
    [Diferencia MAD vs BCN],
    [Precio Barcelona],
    0
)

// ========== CIUDAD MÁS CARA ==========

Ciudad Más Cara = 
CALCULATE(
    FIRSTNONBLANK('processed_all_cities'[city], 1),
    TOPN(
        1,
        ALL('processed_all_cities'[city]),
        [Precio Promedio],
        DESC
    )
)

Precio Ciudad Más Cara = 
CALCULATE(
    [Precio Promedio],
    TOPN(
        1,
        ALL('processed_all_cities'[city]),
        [Precio Promedio],
        DESC
    )
)

// ========== RANKING DE CIUDADES ==========

Ranking Ciudad por Precio = 
RANKX(
    ALL('processed_all_cities'[city]),
    [Precio Promedio],
    ,
    DESC,
    Dense
)
```

---

## 🎨 PASO 6: CREAR DASHBOARD - PÁGINA 1 (EXECUTIVE OVERVIEW)

### 6.1 KPI Cards (Top Row)

Crear **6 cards** en la fila superior:

#### Card 1: Total Listings
```
Visualización: Card
Campo: Total Listings
Formato: 
- Número entero sin decimales
- Separador de miles
Título: "Total Listings"
```

#### Card 2: Total Ciudades
```
Visualización: Card
Campo: Total Cities
Título: "Ciudades Analizadas"
```

#### Card 3: Precio Promedio Global
```
Visualización: Card
Campo: Precio Promedio
Formato: € con 2 decimales
Título: "Precio Promedio (€/noche)"
```

#### Card 4: Total Hosts
```
Visualización: Card
Campo: Total Hosts
Formato: Miles con separador
Título: "Total Hosts Únicos"
```

#### Card 5: Revenue Anual Estimado
```
Visualización: Card
Campo: Revenue Anual Estimado
Formato: Millones de € (M)
Título: "Revenue Anual Estimado"
```

#### Card 6: Reviews Totales
```
Visualización: Card
Campo: Total Reviews
Formato: Miles con separador (K)
Título: "Total Reviews"
```

### 6.2 Main Slicer: City Filter (Left Sidebar)

```
Visualización: Slicer
Campo: city
Style: Tile (azulejos)
Posición: Lateral izquierdo
Configuración:
- Multi-select: ON
- Select All: ON
Título: "🌍 Seleccionar Ciudades"
```

**⚡ IMPORTANTE:** Este slicer filtrará TODO el dashboard.

### 6.3 Mapa Principal (Centro Izquierda)

```
Visualización: Map
Location: latitude, longitude
Size: price
Legend: city
Título: "Distribución Geográfica Multi-Ciudad"

Formato:
- Map style: Aerial
- Bubble transparency: 70%
- Zoom: Auto (fit all cities)
- Enable: Zoom buttons, Pan
```

### 6.4 Bar Chart: Precio Promedio por Ciudad (Centro Derecha)

```
Visualización: Clustered Bar Chart (horizontal)
Y-axis: city
X-axis: Precio Promedio
Data Labels: ON
Sort: Descending by price
Título: "Precio Promedio por Ciudad"

Formato:
- X-axis: € symbol
- Colors: Gradient based on value
```

### 6.5 Donut Chart: Distribución Room Types (Abajo Izquierda)

```
Visualización: Donut Chart
Legend: room_type
Values: Total Listings
Data Labels: Percentage + Value
Título: "Distribución por Tipo de Habitación"
```

### 6.6 Column Chart: Listings por Ciudad (Abajo Centro)

```
Visualización: Clustered Column Chart
X-axis: city
Y-axis: Total Listings
Data Labels: ON
Sort: Descending
Título: "Número de Listings por Ciudad"
```

### 6.7 Table: Top 10 Neighbourhoods Global (Abajo Derecha)

```
Visualización: Table
Columns:
- city
- neighbourhood
- Total Listings
- Precio Promedio

Filters:
- Visual level filter: Top 10 by Total Listings
- Sort: Descending by Total Listings

Título: "Top 10 Barrios (Global)"
```

---

## 🎨 PASO 7: PÁGINA 2 - COMPARACIÓN MADRID VS BARCELONA

### 7.1 Configurar Página

```
1. Nueva página: "Madrid vs Barcelona"
2. Tema: Consistente con Página 1
```

### 7.2 Slicer: Madrid vs Barcelona ONLY

```
Visualización: Slicer
Campo: city
Valores seleccionados por defecto:
- madrid
- barcelona
Style: Tile
Posición: Top
Título: "Comparación: Madrid vs Barcelona"
```

### 7.3 KPI Cards Comparativos (Fila Superior)

#### Card Comparison 1: Precio
```
Layout: 2 cards lado a lado

Card A:
- Medida: Precio Madrid
- Título: "Madrid"
- Formato: €XX.XX

Card B:
- Medida: Precio Barcelona
- Título: "Barcelona"
- Formato: €XX.XX

Card C (pequeña, abajo):
- Medida: % Diferencia MAD vs BCN
- Título: "% Diferencia"
- Formato: +XX%
- Color condicional: Verde si positivo, Rojo si negativo
```

#### Card Comparison 2: Listings
```
Repetir estructura para:
- Total Listings en Madrid
- Total Listings en Barcelona
```

#### Card Comparison 3: Reviews
```
Repetir estructura para:
- Reviews Promedio Madrid
- Reviews Promedio Barcelona
```

### 7.4 Clustered Bar Chart: Precio por Room Type

```
Visualización: Clustered Bar Chart
Y-axis: room_type
X-axis: Precio Promedio
Legend: city (Madrid vs Barcelona)
Título: "Precio por Tipo - Madrid vs Barcelona"
```

### 7.5 Line Chart: Distribución de Precio

```
Visualización: Line Chart
X-axis: price (bins of 20€)
Y-axis: Count of listings
Legend: city
Título: "Distribución de Precios"
Filter: price < 500 (para mejor visualización)
```

### 7.6 Scatter Plot: Price vs Reviews

```
Visualización: Scatter Chart
X-axis: price
Y-axis: number_of_reviews
Legend: city
Size: calculated_host_listings_count
Título: "Precio vs Reviews - Madrid vs Barcelona"
```

### 7.7 Map Comparison (Side by Side)

```
Layout: 2 mapas lado a lado

Map 1:
- Location: lat, long
- Size: price
- Filter: city = "madrid"
- Título: "Madrid"

Map 2:
- Location: lat, long
- Size: price
- Filter: city = "barcelona"
- Título: "Barcelona"
```

### 7.8 Table: Top Neighbourhoods Comparison

```
Visualización: Matrix
Rows: neighbourhood
Columns: city (Madrid, Barcelona)
Values: 
- Precio Promedio
- Total Listings

Filter: Top 15 by Total Listings
Sort: Descending
Título: "Top Barrios - Comparativa"
```

---

## 🎨 PASO 8: PÁGINA 3 - ANÁLISIS DE HOSTS

### 8.1 KPI Cards

```
Card 1: Total Hosts
Card 2: Listings por Host
Card 3: % Hosts Profesionales
Card 4: Host con Más Listings
```

### 8.2 Donut: Host Type Distribution

```
Visualización: Donut Chart
Legend: host_type
Values: Total Listings
Data Labels: ON
Título: "Distribución por Tipo de Host"
```

### 8.3 Bar Chart: Precio por Host Type

```
Visualización: Clustered Bar Chart
Y-axis: host_type
X-axis: Precio Promedio
Sort: By host_type (custom order)
Título: "Precio Promedio por Tipo de Host"
```

### 8.4 Scatter: Listings Count vs Price

```
Visualización: Scatter Chart
X-axis: calculated_host_listings_count
Y-axis: Precio Promedio
Size: Total Reviews
Legend: city
Título: "Número de Listings vs Precio"

Filter: 
- calculated_host_listings_count < 50 (para mejor viz)
```

### 8.5 Table: Top 20 Hosts

```
Visualización: Table
Columns:
- host_name
- city
- calculated_host_listings_count
- Precio Promedio
- Revenue Mensual Estimado

Filter: Top 20 by listings count
Sort: Descending
Título: "Top 20 Hosts (Multi-Ciudad)"
```

### 8.6 Map: Professional Hosts

```
Visualización: Map
Location: lat, long
Size: calculated_host_listings_count
Legend: host_type
Filter: host_type = "Profesional (5+)"
Título: "Ubicación de Hosts Profesionales"
```

---

## 🎨 PASO 9: PÁGINA 4 - ANÁLISIS DE REVENUE

### 9.1 KPI Cards

```
Card 1: Revenue Anual Estimado
Card 2: Revenue Mensual Promedio
Card 3: Revenue Ciudad Más Alta
Card 4: Ocupancy Rate Promedio
```

### 9.2 Column Chart: Revenue por Ciudad

```
Visualización: Clustered Column Chart
X-axis: city
Y-axis: Revenue Mensual Estimado Total
Data Labels: ON
Sort: Descending
Título: "Revenue Mensual Estimado por Ciudad"
Formato: € Millones
```

### 9.3 Scatter: Price vs Estimated Revenue

```
Visualización: Scatter Chart
X-axis: price
Y-axis: estimated_monthly_revenue
Size: availability_365
Legend: city
Título: "Precio vs Revenue Estimado"
```

### 9.4 Stacked Bar: Revenue por Room Type y Ciudad

```
Visualización: Stacked Bar Chart
Y-axis: city
X-axis: Revenue Mensual Estimado Total
Legend: room_type
Título: "Revenue por Tipo - Desglose por Ciudad"
```

### 9.5 Matrix: Revenue Analysis

```
Visualización: Matrix
Rows: city
Columns: price_segment
Values: 
- Revenue Mensual Estimado Total
- Total Listings

Conditional Formatting: 
- Color scale on revenue
Título: "Revenue por Ciudad y Segmento de Precio"
```

---

## 🎨 PASO 10: AÑADIR SLICERS GLOBALES (TODAS LAS PÁGINAS)

### 10.1 Crear Slicers en Página 1

```
Slicer 1: city (ya hecho)
Slicer 2: room_type
Slicer 3: price_segment
Slicer 4: host_type
Slicer 5: price range (slider)
```

### 10.2 Sincronizar Slicers a Todas las Páginas

```
1. Seleccionar un slicer
2. Vista → Sincronizar segmentaciones
3. Panel "Sync slicers" aparece
4. Marcar checkboxes para páginas donde quieres que aparezca
5. Marcar ícono de "sincronización" para que filtren juntos
6. Repetir para cada slicer
```

**Recomendación:**
- `city` slicer → Todas las páginas EXCEPTO "Madrid vs Barcelona"
- `room_type`, `price_segment`, `host_type` → Todas las páginas
- `price range` → Todas las páginas

---

## 🎨 PASO 11: DISEÑO Y FORMATO PROFESIONAL

### 11.1 Aplicar Tema

```
1. Vista → Temas
2. Seleccionar un tema profesional (ej: "Executive")
3. O personalizar:
   - View → Themes → Customize current theme
   - Elegir colores corporativos
```

**Paleta sugerida AirBnB style:**
- Primary: #FF5A5F (Rojo Airbnb)
- Secondary: #00A699 (Teal)
- Accent: #FC642D (Naranja)
- Background: #F7F7F7 (Gris claro)
- Text: #484848 (Gris oscuro)

### 11.2 Formato Consistente en Visualizaciones

Para CADA visualización:

```
1. Seleccionar visual
2. Format (paint roller)
3. Configurar:
   
   General:
   - Title: ON, 14-16pt Bold
   - Background: White or Light Gray
   - Border: Subtle shadow
   - Padding: 10px
   
   X/Y Axis:
   - Title: ON, descriptivo
   - Labels: 10-11pt
   - Grid lines: Light gray
   
   Data Labels:
   - Font: 10pt
   - Background: Semi-transparent if needed
   
   Legend:
   - Position: Top or Right
   - Font: 10pt
```

### 11.3 Añadir Elementos de Branding

```
1. Insertar → Imagen
2. Añadir logo (si tienes)
3. Posición: Esquina superior izquierda o derecha
4. Tamaño: Pequeño, discreto

5. Insertar → Cuadro de texto
6. Añadir título del dashboard
7. Ejemplo: "AirBnB Multi-City Analysis | Madrid, Barcelona & More"
8. Font: 20-24pt Bold
9. Posición: Top center
```

### 11.4 Añadir Fecha de Actualización

```
1. Insertar → Cuadro de texto
2. Texto: "Última actualización: [Fecha]"
3. O crear medida DAX:
```

```dax
Fecha Actualización = "Datos actualizados: " & FORMAT(TODAY(), "DD/MM/YYYY")
```

```
4. Usar Card pequeña con esta medida
5. Posición: Bottom right corner
```

---

## 📊 PASO 12: CREAR TOOLTIPS PERSONALIZADOS (AVANZADO)

### 12.1 Crear Página de Tooltip

```
1. Nueva página: "Tooltip - Listing Detail"
2. Formato → Tamaño de página → Información sobre herramientas (Tooltip)
3. Canvas se hará pequeño (aprox 320x240px)
```

### 12.2 Añadir Contenido al Tooltip

```
En esta página pequeña, añadir:

Card 1: name (nombre del listing)
Card 2: price
Card 3: room_type
Card 4: number_of_reviews
Card 5: availability_365

Formato: 
- Sin títulos (para ahorrar espacio)
- Font pequeño (8-9pt)
- Fondo: Blanco con borde
```

### 12.3 Aplicar Tooltip a Visualizaciones

```
1. Volver a cualquier página principal
2. Seleccionar una visualización (ej: el mapa)
3. Format → Tooltip
4. Type: Report page
5. Page: Seleccionar "Tooltip - Listing Detail"
6. Test: Hover sobre un punto del mapa
```

---

## 📈 PASO 13: ANÁLISIS DE INSIGHTS CLAVE

### 13.1 Insights a Buscar y Documentar

Mientras construyes el dashboard, anota estos insights:

#### 🏙️ **Comparación de Ciudades**

**Preguntas a responder:**
- [ ] ¿Cuál es la ciudad más cara? ¿Y la más barata?
- [ ] ¿Qué diferencia de precio hay entre Madrid y Barcelona?
- [ ] ¿Qué ciudad tiene más listings?
- [ ] ¿Qué ciudad tiene mejor ratio listings/host? (¿Más profesional?)
- [ ] ¿En qué ciudad hay más actividad de reviews?

**Cómo documentarlo:**
```markdown
## INSIGHTS: Comparación de Ciudades

### Precio Promedio:
1. [Ciudad X]: €XXX/noche (más cara)
2. [Ciudad Y]: €XXX/noche
...
6. [Ciudad Z]: €XXX/noche (más barata)

### Diferencia Madrid vs Barcelona:
- Madrid: €XXX/noche
- Barcelona: €XXX/noche
- Diferencia: €XXX (XX% más caro/barato)

### Distribución del Mercado:
- Total listings: XX,XXX
- Ciudad con más listings: [Ciudad] (XX,XXX - XX%)
- Ciudad con menos listings: [Ciudad] (XXX - X%)
```

---

#### 💰 **Análisis de Precios**

**Preguntas a responder:**
- [ ] ¿Cuál es el rango de precios más común? (el segmento dominante)
- [ ] ¿Qué % son outliers de precio?
- [ ] ¿Cómo varía el precio por tipo de habitación?
- [ ] ¿Hay diferencias significativas de precio entre ciudades para el mismo room_type?

**Template para documentar:**
```markdown
## INSIGHTS: Análisis de Precios

### Distribución Global:
- Precio promedio: €XXX
- Precio mediana: €XXX
- Rango común (P25-P75): €XX - €XXX

### Segmentos Dominantes:
1. [Segmento X]: XX% del mercado
2. [Segmento Y]: XX% del mercado

### Por Tipo de Habitación:
- Entire home/apt: €XXX (XX% más caro que promedio)
- Private room: €XXX
- Shared room: €XXX (XX% más barato)

### Outliers:
- % Outliers detectados: X.X%
- Precio outlier más alto: €X,XXX
- Posible explicación: [tu análisis]
```

---

#### 🏠 **Análisis de Hosts**

**Preguntas a responder:**
- [ ] ¿Qué % del mercado son hosts profesionales?
- [ ] ¿Los hosts profesionales cobran más o menos?
- [ ] ¿Quiénes son los top 5 hosts? ¿En qué ciudades operan?
- [ ] ¿Hay concentración del mercado? (pocos hosts con muchas propiedades)

**Template:**
```markdown
## INSIGHTS: Hosts

### Distribución:
- Total hosts únicos: XX,XXX
- Listings por host promedio: X.X
- % Hosts profesionales (5+ listings): XX%
- % Hosts ocasionales (1 listing): XX%

### Precio por Tipo de Host:
- Profesional (5+): €XXX/noche
- Multi-listing (3-4): €XXX/noche
- Ocasional (1): €XXX/noche
- Diferencia: XX% (¿Profesionales más caros/baratos?)

### Top 5 Hosts:
1. [Host Name] - XX listings - [Ciudad(es)]
2. ...

### Concentración del Mercado:
- Top 10 hosts controlan: XX% del mercado
- Top 50 hosts controlan: XX% del mercado
```

---

#### ⭐ **Análisis de Reviews**

**Preguntas a responder:**
- [ ] ¿Qué % de listings tienen reviews?
- [ ] ¿Qué ciudad tiene más actividad de reviews?
- [ ] ¿Hay correlación entre precio y número de reviews?
- [ ] ¿Los listings más baratos tienen más reviews?

**Template:**
```markdown
## INSIGHTS: Reviews

### Actividad General:
- Total reviews: XXX,XXX
- % Listings con reviews: XX%
- Reviews por mes promedio: X.X

### Por Ciudad:
1. [Ciudad X]: X.X reviews/mes promedio (más activa)
...

### Correlación Precio-Reviews:
- Listings <50€: XXX reviews promedio
- Listings 50-100€: XXX reviews promedio
- Listings >100€: XXX reviews promedio
- Patrón observado: [tu análisis]

### Sin Reviews:
- % Listings sin reviews: XX%
- Posibles razones: [tu análisis - nuevos listings, precios muy altos, etc.]
```

---

#### 🏆 **Análisis de Revenue (Estimado)**

**Preguntas a responder:**
- [ ] ¿Qué ciudad genera más revenue total?
- [ ] ¿Qué segmento de precio es más rentable?
- [ ] ¿Los precios altos compensan menor ocupación?
- [ ] ¿Qué tipo de habitación es más rentable?

**Template:**
```markdown
## INSIGHTS: Revenue Estimado

### Por Ciudad:
1. [Ciudad X]: €XX.XM/mes - €XXX.XM/año
2. ...

### Por Segmento de Precio:
- Budget (<30€): €XXM/mes (XX% del total)
- Economy (30-60€): €XXM/mes (XX% del total)
- [Mayor contribuidor]: [Segmento X] con XX% del revenue

### Por Tipo de Habitación:
- Entire home: €XXM/mes (XX% del total)
- Private room: €XXM/mes (XX% del total)

### Eficiencia:
- Revenue promedio por listing: €XXX/mes
- Mejor ciudad por revenue/listing: [Ciudad X] con €XXX/mes
- Ocupación estimada promedio: XX%
```

---

#### 📍 **Análisis Geográfico**

**Preguntas a responder:**
- [ ] ¿Dónde están los hotspots de cada ciudad?
- [ ] ¿Hay barrios claramente más caros?
- [ ] ¿Los centros históricos son más caros en todas las ciudades?
- [ ] ¿Hay patrones por neighbourhood_group?

**Template:**
```markdown
## INSIGHTS: Análisis Geográfico

### Top 5 Barrios Globales (por listings):
1. [Barrio] - [Ciudad] - XXX listings - €XXX/noche
2. ...

### Top 5 Barrios Más Caros:
1. [Barrio] - [Ciudad] - €XXX/noche
2. ...

### Patrones Observados:
- Centro vs Periferia: [tu análisis]
- Zonas turísticas: [tu análisis]
- Concentración: [X]% de listings en top 10 barrios

### Madrid vs Barcelona - Diferencias Geográficas:
- Madrid: Concentración en [zonas]
- Barcelona: Concentración en [zonas]
```

---

## 🎯 PASO 14: CREAR PÁGINA FINAL - EXECUTIVE SUMMARY

### 14.1 Configurar Página

```
1. Nueva página: "📊 Executive Summary"
2. Esta será la PRIMERA página (mover al inicio)
3. Diseño: Limpio, KPIs grandes, insights clave
```

### 14.2 Layout de Executive Summary

```
┌─────────────────────────────────────────────────────┐
│  🏠 AIRBNB MULTI-CITY ANALYSIS                      │
│  [Logo]              [Fecha Actualización]          │
├─────────────────────────────────────────────────────┤
│                                                      │
│  [6 KPI CARDS GRANDES]                              │
│  Total Listings | Ciudades | Precio Avg |           │
│  Hosts | Revenue | Reviews                          │
│                                                      │
├──────────────────┬──────────────────────────────────┤
│                  │                                   │
│  TOP 3 INSIGHTS  │   GRÁFICO PRINCIPAL              │
│  📌 Key Finding 1│   (Precio por Ciudad)            │
│  📌 Key Finding 2│                                   │
│  📌 Key Finding 3│                                   │
│                  │                                   │
├──────────────────┴──────────────────────────────────┤
│                                                      │
│  COMPARATIVA RÁPIDA (Table)                         │
│  Ciudad | Listings | Precio | Revenue | Reviews     │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### 14.3 Crear Medidas para Key Findings

```dax
// Key Finding 1: Ciudad más cara
Key Finding 1 = 
"🏆 Ciudad más cara: " & [Ciudad Más Cara] & 
" (€" & FORMAT([Precio Ciudad Más Cara], "#,##0.00") & "/noche)"

// Key Finding 2: Comparación MAD-BCN
Key Finding 2 = 
VAR Dif = [Precio Madrid] - [Precio Barcelona]
VAR Pct = DIVIDE(Dif, [Precio Barcelona], 0)
RETURN
"📊 Madrid vs Barcelona: " & 
IF(Dif > 0, "Madrid €" & FORMAT(Dif, "#,##0") & " más caro", 
           "Barcelona €" & FORMAT(ABS(Dif), "#,##0") & " más caro") &
" (" & FORMAT(ABS(Pct), "0.0%") & ")"

// Key Finding 3: Hosts profesionales
Key Finding 3 = 
"👥 Hosts profesionales controlan " & 
FORMAT([% Hosts Profesionales], "0%") & 
" del mercado con " &
FORMAT(
    CALCULATE(
        [Total Listings],
        'processed_all_cities'[host_type] = "Profesional (5+)"
    ),
    "#,##0"
) & " listings"

// Key Finding 4: Revenue potencial
Key Finding 4 = 
"💰 Revenue anual estimado: €" & 
FORMAT([Revenue Anual Estimado] / 1000000, "#,##0.0") & 
"M (€" & FORMAT([Revenue Mensual Promedio], "#,##0") & "/listing/mes)"

// Key Finding 5: Mercado más grande
Key Finding 5 = 
VAR MaxCity = 
    CALCULATE(
        FIRSTNONBLANK('processed_all_cities'[city], 1),
        TOPN(1, ALL('processed_all_cities'[city]), [Total Listings], DESC)
    )
VAR MaxListings = 
    CALCULATE([Total Listings], 'processed_all_cities'[city] = MaxCity)
VAR Pct = DIVIDE(MaxListings, [Total Listings], 0)
RETURN
"🏙️ Mayor mercado: " & MaxCity & " con " & 
FORMAT(MaxListings, "#,##0") & " listings (" & 
FORMAT(Pct, "0%") & " del total)"
```

### 14.4 Implementar Key Findings

```
1. Insertar → Cuadro de texto
2. Formato:
   - Font: 14-16pt
   - Color: #484848
   - Background: Light box con borde
   - Icon: Emoji o ícono relevante
3. Copiar 3-5 veces para diferentes findings
4. Posicionar verticalmente en lado izquierdo
```

O alternativamente:

```
Usar Cards con las medidas Key Finding 1-5
Formato:
- Sin título de card
- Font size grande
- Background: Colored box (diferentes colores)
```

### 14.5 Tabla Comparativa de Ciudades

```
Visualización: Matrix
Rows: city
Values (en este orden):
- Total Listings
- Precio Promedio (€)
- Revenue Mensual Estimado (€)
- Reviews Promedio
- Disponibilidad Promedio

Formato:
- Conditional formatting en todas las columnas
- Color scale: Low (Red) to High (Green)
- Number format: Apropiado para cada métrica
- Totals: ON (show grand total)

Sort: Descending by Total Listings

Título: "Comparativa General por Ciudad"
```

---

## 📱 PASO 15: OPTIMIZACIÓN Y TESTING

### 15.1 Test de Interactividad

**Checklist de Testing:**

```
✅ Test 1: Slicer de City
   - Seleccionar 1 ciudad → Todo el dashboard filtra
   - Seleccionar múltiples → Funciona correctamente
   - Select All → Muestra todos los datos

✅ Test 2: Slicer de Room Type
   - Funciona en todas las páginas donde está sincronizado
   - KPIs se actualizan correctamente

✅ Test 3: Cross-filtering
   - Click en barra de gráfico → Otros visuals filtran
   - Click en punto de mapa → Tablas filtran
   - Click en donut chart slice → Todo actualiza

✅ Test 4: Slicers de Rango (Price)
   - Mover slider → Actualización suave
   - Valores extremos funcionan

✅ Test 5: Tooltips
   - Hover sobre gráficos → Tooltip aparece
   - Información correcta mostrada
   - Tooltip personalizado funciona (si lo creaste)

✅ Test 6: Navegación entre Páginas
   - Todas las páginas accesibles
   - Consistencia visual mantenida
   - Slicers mantienen selección entre páginas
```

### 15.2 Optimización de Performance

#### Si el dashboard va lento:

```dax
// Optimizar medidas complejas usando variables

// ANTES (lento):
Medida Lenta = 
CALCULATE([Precio Promedio], Filter(...)) + 
CALCULATE([Precio Promedio], Filter(...))

// DESPUÉS (rápido):
Medida Optimizada = 
VAR Precio1 = CALCULATE([Precio Promedio], Filter(...))
VAR Precio2 = CALCULATE([Precio Promedio], Filter(...))
RETURN Precio1 + Precio2
```

#### Reducir datos si es necesario:

```
En Power Query:
1. Si el dataset es MUY grande (>100K filas)
2. Considera eliminar columnas no usadas
3. O filtrar por ciudad si solo analizas 2-3 ciudades
```

### 15.3 Validación de Datos

**Comprobaciones finales:**

```
✅ Los totales cuadran:
   - Suma de listings por ciudad = Total Listings
   - Revenue total = Suma de revenue por ciudad

✅ No hay valores imposibles:
   - Precios negativos
   - Coordenadas fuera de rango
   - Fechas futuras en last_review

✅ Las medidas DAX funcionan correctamente:
   - No muestran "Blank" inesperadamente
   - No dan errores (#Error, Infinity, etc.)
   - Formatos numéricos correctos (€, %, etc.)

✅ Coherencia visual:
   - Colores consistentes entre páginas
   - Fuentes uniformes
   - Alineación correcta
```

---

## 💾 PASO 16: GUARDAR Y COMPARTIR

### 16.1 Guardar el Archivo

```
1. File → Save As
2. Nombre: "AirBnB_MultiCity_Analysis_v1.pbix"
3. Ubicación: Tu carpeta de proyecto
4. Click "Save"
```

### 16.2 Crear Versión para Compartir (PDF)

```
1. File → Export → Export to PDF
2. Seleccionar páginas a exportar:
   ✅ Executive Summary
   ✅ Comparación Madrid vs Barcelona
   ✅ Otras páginas clave
3. Nombre: "AirBnB_Analysis_Presentation.pdf"
4. Save
```

### 16.3 Publicar a Power BI Service (Opcional)

Si tienes cuenta de Power BI:

```
1. Home → Publish
2. Select workspace
3. Click "Publish"
4. Wait for upload
5. Copy link to share
```

### 16.4 Compartir Archivo .pbix

```
Opciones:
1. Google Drive / OneDrive (link de descarga)
2. GitHub (subir a repo - incluir en .gitignore si es muy pesado)
3. Email (si <25MB)
4. WeTransfer (si >25MB)
```

---

## 📝 PASO 17: DOCUMENTACIÓN PARA EL EQUIPO

### 17.1 Crear README.md del Dashboard

Crea archivo: `powerbi/README_Dashboard.md`

```markdown
# 📊 AirBnB Multi-City Analysis Dashboard

## Archivos del Proyecto

### Datos
- **Fuente**: `data/powerbi/processed_all_cities.csv`
- **Filas**: [XX,XXX]
- **Ciudades incluidas**: [listar ciudades]
- **Fecha de datos**: [fecha]

### Dashboard
- **Archivo**: `AirBnB_MultiCity_Analysis_v1.pbix`
- **Power BI Version**: Desktop [tu versión]
- **Última actualización**: [fecha]

## Estructura del Dashboard

### Página 1: Executive Summary
- Resumen de alto nivel
- KPIs principales
- Key findings destacados

### Página 2: Comparación Madrid vs Barcelona
- Análisis comparativo detallado
- Visualizaciones lado a lado

### Página 3: Análisis de Hosts
- Distribución profesionales vs ocasionales
- Top hosts
- Impacto en precios

### Página 4: Análisis de Revenue
- Revenue estimado por ciudad
- Segmentación por precio y tipo
- Métricas de rentabilidad

## Slicers Disponibles
- **City**: Filtrar por ciudad específica
- **Room Type**: Entire home, Private room, etc.
- **Price Segment**: Budget, Economy, Premium, etc.
- **Host Type**: Profesional, Ocasional, etc.
- **Price Range**: Slider para rango de precios

## Medidas DAX Principales
- Total Listings
- Precio Promedio
- Revenue Mensual/Anual Estimado
- Ocupación Estimada
- [Listar otras medidas clave]

## Cómo Actualizar los Datos

1. Reemplazar archivo `processed_all_cities.csv` con datos nuevos
2. Abrir archivo .pbix
3. Home → Refresh
4. Verificar que todo funciona
5. Save

## Notas Técnicas
- Estimación de revenue basada en reviews_per_month
- Outliers identificados usando IQR y Z-score
- Coordenadas validadas para cada ciudad
```

### 17.2 Crear Documento de Insights

Crea archivo: `docs/Key_Insights_Report.md`

**Usa el template de insights del PASO 13** y llena con tus datos reales.

### 17.3 Crear Guía de Presentación

Crea archivo: `docs/Presentation_Guide.md`

```markdown
# 🎤 Guía de Presentación - AirBnB Multi-City Analysis

## Duración Estimada: 15-20 minutos

## Estructura de la Presentación

### 1. Introducción (2 min)
**Qué decir:**
- "Hemos analizado [XX,XXX] listings de AirBnB en [X] ciudades españolas"
- "Dataset limpio, sin nulos, con outliers identificados"
- "Objetivo: Comparar mercados y encontrar insights de negocio"

**Pantalla:** Executive Summary

---

### 2. Overview del Mercado (3 min)
**Qué mostrar:**
- Total de listings, ciudades, hosts
- Precio promedio global
- Revenue estimado total

**Key Findings a destacar:**
- [Tu Key Finding 1]
- [Tu Key Finding 2]
- [Tu Key Finding 3]

**Pantalla:** Executive Summary
**Interacción:** Mostrar mapa global, explicar distribución

---

### 3. Comparación Madrid vs Barcelona (5 min)
**Qué decir:**
- "Madrid y Barcelona son los mercados más importantes"
- "Diferencia de precio: [X]%"
- "Diferencia en distribución de room types"

**Qué mostrar:**
- KPIs comparativos lado a lado
- Gráfico de precio por tipo
- Mapas comparativos

**Pantalla:** Comparación Madrid vs Barcelona
**Interacción:** Usar slicer para mostrar solo estas 2 ciudades

---

### 4. Análisis de Hosts (3 min)
**Qué decir:**
- "[X]% del mercado controlado por hosts profesionales"
- "Top 10 hosts tienen [X] listings"
- "Hosts profesionales cobran [más/menos]: [análisis]"

**Qué mostrar:**
- Distribución de host types
- Top hosts table
- Precio por tipo de host

**Pantalla:** Análisis de Hosts

---

### 5. Revenue y Rentabilidad (4 min)
**Qué decir:**
- "Revenue anual estimado: €[X]M"
- "Ciudad más rentable: [X]"
- "Segmento más lucrativo: [X]"

**Qué mostrar:**
- Revenue por ciudad
- Revenue por segmento de precio
- Scatter plot precio vs revenue

**Pantalla:** Análisis de Revenue
**Interacción:** Filtrar por price_segment para mostrar diferencias

---

### 6. Insights y Recomendaciones (3 min)
**Top 3 Insights:**
1. [Tu insight principal]
2. [Tu segundo insight]
3. [Tu tercer insight]

**Recomendaciones de negocio:**
- Para inversores: [recomendación]
- Para hosts: [recomendación]
- Para AirBnB: [recomendación]

**Pantalla:** Volver a Executive Summary

---

### 7. Q&A y Demo Interactiva (5 min)
**Preparar para preguntas:**
- "¿Qué pasa si filtramos solo hosts profesionales?"
- "¿Cuál es el barrio más caro de Barcelona?"
- "¿Cómo se comparan los Private rooms entre ciudades?"

**Demostrar:** Uso de slicers en vivo

---

## Tips para Presentar

✅ Practica la navegación entre páginas antes
✅ Ten los números clave memorizados
✅ Prepara una historia coherente (no solo mostrar gráficos)
✅ Usa los slicers para hacer la demo interactiva
✅ Si hay preguntas difíciles, di "Excelente pregunta, vamos a explorar los datos"

## Preguntas Comunes y Respuestas

**P: ¿Cómo estimaron el revenue?**
R: "Basado en reviews_per_month, asumiendo 1 review cada 3 bookings, estancia promedio 3 días, cap ocupación 70%"

**P: ¿Por qué hay outliers?**
R: "Identificados usando IQR y Z-score. Pueden ser propiedades de lujo, errores de precio, o propiedades especiales"

**P: ¿Los datos incluyen todo AirBnB?**
R: "No, es una muestra del dataset público de Inside AirBnB para [fecha]"

**P: ¿Se puede filtrar por [X]?**
R: "Sí, déjame mostrarte" → Usar slicers en vivo
```

---

## 🎓 PASO 18: PRÓXIMOS PASOS AVANZADOS (OPCIONAL)

### 18.1 Si Quieres Nivel Experto: Machine Learning

#### Análisis de Clustering en Python

```python
# Archivo: scripts/clustering_analysis.py

import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Cargar datos
df = pd.read_csv('data/powerbi/processed_all_cities.csv')

# Seleccionar features para clustering
features = ['price', 'calculated_host_listings_count', 
            'number_of_reviews', 'availability_365']

# Preparar datos
X = df[features].dropna()
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# K-Means Clustering
kmeans = KMeans(n_clusters=4, random_state=42)
df['cluster'] = kmeans.fit_predict(X_scaled)

# Guardar resultado
df.to_csv('data/processed/with_clusters.csv', index=False)

# Interpretar clusters
cluster_summary = df.groupby('cluster')[features].mean()
print(cluster_summary)
```

Después importa `with_clusters.csv` en Power BI y analiza los clusters.

#### Predicción de Precios

```python
# Archivo: scripts/price_prediction.py

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error

# Features para predecir precio
features = ['latitude', 'longitude', 'calculated_host_listings_count',
            'number_of_reviews', 'availability_365']

X = df[features].dropna()
y = df.loc[X.index, 'price']

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Modelo
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predicciones
y_pred = model.predict(X_test)

# Métricas
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)

print(f"R² Score: {r2:.3f}")
print(f"MAE: €{mae:.2f}")

# Feature importance
importance = pd.DataFrame({
    'feature': features,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

print(importance)
```

### 18.2 Integrar con API de AirBnB (si tienes acceso)

Actualización automática de datos desde API.

### 18.3 Deployment en Power BI Service

Publicar y configurar refresh automático.

---

## ✅ CHECKLIST FINAL DE ENTREGA

### Archivos a Entregar

```
✅ powerbi/AirBnB_MultiCity_Analysis_v1.pbix
✅ powerbi/README_Dashboard.md
✅ docs/Key_Insights_Report.md
✅ docs/Presentation_Guide.md
✅ docs/esta_guia_paso_a_paso.md
✅ data/powerbi/processed_all_cities.csv (el dataset usado)
✅ screenshots/ (capturas de cada página del dashboard)
✅ AirBnB_Analysis_Presentation.pdf (exportado)
```

### Documentación Completa

```
✅ README principal del proyecto
✅ Explicación de limpieza de datos
✅ Lista de medidas DAX creadas
✅ Insights documentados
✅ Guía de presentación preparada
```

### GitHub

```
✅ Repositorio actualizado
✅ .gitignore configurado (excluir .pbix si es muy grande)
✅ README.md en la raíz
✅ Commits descriptivos
✅ Branches organizadas (si usaste)
```

### Presentación

```
✅ Dashboard probado y funcional
✅ Presentación ensayada
✅ Números clave memorizados
✅ Demo interactiva preparada
✅ Respuestas a preguntas comunes