# 📊 Guía Completa: Análisis de Datos AirBnB Madrid en Power BI

## 👥 Proyecto: Data Analyst - AirBnB Madrid
**Equipo:** [Añadir nombres del equipo]  
**Fecha:** 11 de Noviembre, 2025  
**Objetivo:** Impresionar al cliente con análisis data-driven completo

---

## 📋 ÍNDICE

1. [Estructura de los Datos](#estructura-de-los-datos)
2. [Plan de Análisis](#plan-de-análisis)
3. [Análisis Paso a Paso](#análisis-paso-a-paso)
4. [División de Tareas del Equipo](#división-de-tareas)
5. [Checklist de Entrega](#checklist-de-entrega)
6. [Recursos y Notas](#recursos-y-notas)

---

## 📊 ESTRUCTURA DE LOS DATOS

### Categorías de Datos Disponibles

#### 1️⃣ INFORMACIÓN BÁSICA DE LISTINGS (20 columnas)
- `id`, `name`, `description`
- `latitude`, `longitude` ⚠️ (Deben ser Decimal Number)
- `accommodates`, `bathrooms`, `bedrooms`, `beds`
- `amenities`
- `price`, `minimum_nights`, `maximum_nights`

#### 2️⃣ INFORMACIÓN DE HOST (13 columnas)
- `host_id`, `host_name`, `host_since`
- `host_response_time`, `host_response_rate`, `host_acceptance_rate`
- `host_is_superhost` ⭐ **IMPORTANTE**
- `host_listings_count`, `host_total_listings_count`
- `host_identity_verified`

#### 3️⃣ REVIEWS Y RATINGS (17 columnas)
- `number_of_reviews`, `reviews_per_month`
- `first_review`, `last_review`
- `review_scores_rating` (puntuación general)
- `review_scores_accuracy`, `review_scores_cleanliness`, `review_scores_checkin`
- `review_scores_communication`, `review_scores_location`, `review_scores_value`
- `number_of_reviews_ltm` (últimos 12 meses)
- `number_of_reviews_l30d` (últimos 30 días)

#### 4️⃣ DISPONIBILIDAD Y REVENUE (9 columnas)
- `availability_30`, `availability_60`, `availability_90`, `availability_365`
- `estimated_occupancy_l365d` 💰 **MUY IMPORTANTE**
- `estimated_revenue_l365d` 💰 **MUY IMPORTANTE**
- `has_availability`, `instant_bookable`

#### 5️⃣ TIPOS DE PROPIEDAD (60+ columnas)
- Columnas `property_type_*` (TRUE/FALSE)
- Ejemplos: Entire home, Private room, Shared room, Hotel room, etc.

#### 6️⃣ VECINDARIOS (130+ columnas)
- Columnas `neighbourhood_cleansed_*` (TRUE/FALSE)
- Todos los barrios de Madrid

---

## 🎯 PLAN DE ANÁLISIS

### Objetivos Principales

1. **Análisis de Precios:** Distribución, outliers, factores que influyen
2. **Análisis Geográfico:** Hotspots, distribución por zonas
3. **Análisis de Hosts:** Superhosts vs regulares, profesionales vs ocasionales
4. **Análisis de Reviews:** Correlaciones con precio, tipo de propiedad
5. **Análisis de Revenue:** Rentabilidad estimada, ocupación
6. **Tipos de Propiedad:** Cuáles son más comunes y rentables
7. **Insights de Negocio:** Recomendaciones basadas en datos

---

## 📈 ANÁLISIS PASO A PASO

### PASO 0: PREPARACIÓN DE DATOS

#### ⚠️ CORRECCIÓN CRÍTICA: Tipos de Datos

**ANTES DE EMPEZAR:**
```
1. Click "Transform Data" (Transformar Datos)
2. Seleccionar columnas "latitude" y "longitude"
3. Cambiar tipo de Int64 a "Decimal Number"
4. Click "Close & Apply"
```

**Otras correcciones recomendadas:**
- Verificar que `price` sea número
- Verificar que fechas (`host_since`, `first_review`, `last_review`) sean tipo Date
- Verificar que porcentajes (`host_response_rate`, `host_acceptance_rate`) sean Percentage

---

### PASO 1: KPIs PRINCIPALES (CARDS)

**Objetivo:** Métricas clave en la parte superior del dashboard

#### Card 1: Total Listings
```
Visualización: Card
Campo: id (Count)
Título: "Total Listings en Madrid"
```

#### Card 2: Precio Promedio
```
Visualización: Card
Campo: price (Average)
Título: "Precio Promedio €/noche"
Formato: Moneda, 2 decimales
```

#### Card 3: Calificación Promedio
```
Visualización: Card
Campo: review_scores_rating (Average)
Título: "Rating Promedio"
Formato: 1 decimal
```

#### Card 4: Revenue Estimado Total
```
Visualización: Card
Campo: estimated_revenue_l365d (Sum)
Título: "Revenue Estimado Anual"
Formato: Millones de €
```

**Preguntas a responder:**
- ¿Cuántos listings hay en total?
- ¿Cuál es el precio promedio por noche?
- ¿Cuál es el rating promedio de Madrid?
- ¿Cuál es el revenue potencial total?

---

### PASO 2: ANÁLISIS DE PRECIOS

#### Graph 2.1: Distribución de Precios (Histograma)
```
Visualización: Clustered Column Chart
X-axis: price
Y-axis: id (Count)
Título: "Distribución de Precios"

FILTRO RECOMENDADO:
- Visual level filter: price
- Top 99% (para eliminar outliers extremos)
```

#### Graph 2.2: Precio Promedio por Habitaciones
```
Visualización: Clustered Column Chart
X-axis: bedrooms
Y-axis: price (Average)
Título: "Precio Promedio por Número de Habitaciones"
```

#### Graph 2.3: Precio vs Capacidad (Scatter)
```
Visualización: Scatter Chart
X-axis: accommodates
Y-axis: price
Size: number_of_reviews
Título: "Precio vs Capacidad"
```

#### Graph 2.4: Box Plot o Statistical Summary
```
Crear medidas DAX:
- Precio Mínimo = MIN(price)
- Precio Máximo = MAX(price)
- Percentil 25 = PERCENTILE.INC(price, 0.25)
- Percentil 75 = PERCENTILE.INC(price, 0.75)
- Mediana = MEDIAN(price)
```

**Insights a buscar:**
- ¿Cuál es el rango de precios más común?
- ¿Hay outliers significativos? (>€500/noche)
- ¿Cómo escala el precio con las habitaciones?
- ¿Hay correlación entre capacidad y precio?

---

### PASO 3: ANÁLISIS DE TIPOS DE PROPIEDAD

#### Crear Columna Calculada: Room Type
```dax
Room Type = 
SWITCH(
    TRUE(),
    [room_type_Hotel room] = TRUE, "Hotel Room",
    [room_type_Private room] = TRUE, "Private Room",
    [room_type_Shared room] = TRUE, "Shared Room",
    "Entire Home"
)
```

#### Graph 3.1: Distribución de Room Types
```
Visualización: Donut Chart
Legend: Room Type
Values: id (Count)
Data Labels: Percentage + Value
Título: "Distribución por Tipo de Habitación"
```

#### Graph 3.2: Precio Promedio por Room Type
```
Visualización: Clustered Bar Chart
Y-axis: Room Type
X-axis: price (Average)
Título: "Precio Promedio por Tipo"
```

#### Graph 3.3: Revenue por Room Type
```
Visualización: Clustered Column Chart
X-axis: Room Type
Y-axis: estimated_revenue_l365d (Average)
Título: "Revenue Estimado Promedio por Tipo"
```

**Insights a buscar:**
- ¿Qué tipo predomina en Madrid?
- ¿Cuánto más caros son los "Entire Home"?
- ¿Qué tipo genera más revenue?

---

### PASO 4: ANÁLISIS GEOGRÁFICO

#### Graph 4.1: Mapa de Listings
```
Visualización: Map
Location: latitude, longitude
Size: price
Legend: Room Type
Título: "Distribución Geográfica de Listings"

Formato:
- Map style: Aerial o Dark
- Bubble colors: Distintos por Room Type
```

#### Graph 4.2: Mapa de Revenue
```
Visualización: Map
Location: latitude, longitude
Size: estimated_revenue_l365d
Legend: host_is_superhost
Título: "Revenue Estimado por Ubicación"
```

**Insights a buscar:**
- ¿Dónde se concentran los listings? (Centro vs periferia)
- ¿Dónde están los precios más altos?
- ¿Hay clusters de ciertos tipos de propiedad?

---

### PASO 5: ANÁLISIS DE SUPERHOSTS ⭐

#### Graph 5.1: Superhosts vs Regular - Distribución
```
Visualización: Donut Chart
Legend: host_is_superhost
Values: id (Count)
Título: "Distribución Superhosts vs Regulares"
```

#### Graph 5.2: Precio - Superhosts vs Regular
```
Visualización: Clustered Column Chart
X-axis: host_is_superhost
Y-axis: price (Average)
Título: "Comparación de Precios: Superhost vs Regular"
```

#### Graph 5.3: Ratings - Superhosts vs Regular
```
Visualización: Clustered Bar Chart
Y-axis: host_is_superhost
X-axis: Multiple medidas (Average):
  - review_scores_rating
  - review_scores_cleanliness
  - review_scores_communication
Título: "Comparación de Ratings"
```

#### Graph 5.4: Revenue - Superhosts vs Regular
```
Visualización: Clustered Column Chart
X-axis: host_is_superhost
Y-axis: estimated_revenue_l365d (Average)
Título: "Revenue Promedio: Superhost vs Regular"
```

**Insights a buscar:**
- ¿Qué % son Superhosts?
- ¿Cobran más los Superhosts?
- ¿Tienen mejores ratings?
- ¿Generan más revenue?

---

### PASO 6: ANÁLISIS DE REVIEWS Y RATINGS

#### Graph 6.1: Distribución de Ratings
```
Visualización: Column Chart
X-axis: review_scores_rating
Y-axis: id (Count)
Título: "Distribución de Calificaciones"
```

#### Graph 6.2: Reviews vs Precio
```
Visualización: Scatter Chart
X-axis: price
Y-axis: number_of_reviews
Size: review_scores_rating
Título: "Relación Reviews vs Precio"
```

#### Graph 6.3: Breakdown de Rating por Categoría
```
Crear visualización que muestre promedios de:
- review_scores_accuracy
- review_scores_cleanliness
- review_scores_checkin
- review_scores_communication
- review_scores_location
- review_scores_value

Visualización: Clustered Bar Chart
Título: "Rating Promedio por Categoría"
```

#### Medida DAX: Tasa de Reviews
```dax
Tasa de Reviews = 
DIVIDE(
    SUM([number_of_reviews]),
    COUNT([id]),
    0
)
```

**Insights a buscar:**
- ¿Cuál es el rating más común?
- ¿Los listings baratos tienen más reviews?
- ¿Qué categoría de rating es más baja generalmente?
- ¿Hay correlación entre reviews y occupancy?

---

### PASO 7: ANÁLISIS DE HOSTS

#### Graph 7.1: Top 10 Hosts por Número de Listings
```
Visualización: Bar Chart (horizontal)
Y-axis: host_name
X-axis: id (Count)
Título: "Top 10 Hosts con Más Listings"

Filter: Top 10 by id count
Sort: Descending
```

#### Graph 7.2: Distribución de Listings por Host
```
Crear medida:
Listings por Host = 
AVERAGE([host_total_listings_count])

Card o Histogram showing distribution
```

#### Graph 7.3: Response Rate vs Rating
```
Visualización: Scatter Chart
X-axis: host_response_rate
Y-axis: review_scores_rating (Average)
Size: number_of_reviews
Título: "Response Rate vs Rating"
```

#### Graph 7.4: Hosts Profesionales vs Ocasionales
```
Crear columna calculada:
Host Type = 
IF(
    [host_total_listings_count] >= 3,
    "Profesional (3+ listings)",
    "Ocasional (1-2 listings)"
)

Donut Chart: Distribution
Comparison Charts: Price, Rating, Revenue
```

**Insights a buscar:**
- ¿Hay hosts con muchas propiedades? (Profesionales)
- ¿Los hosts profesionales cobran más?
- ¿Importa el response rate en los ratings?
- ¿Qué % son hosts profesionales vs ocasionales?

---

### PASO 8: ANÁLISIS DE REVENUE Y OCUPACIÓN 💰

#### Graph 8.1: Revenue Estimado por Room Type
```
Visualización: Clustered Column Chart
X-axis: Room Type
Y-axis: estimated_revenue_l365d (Sum)
Título: "Revenue Total Estimado por Tipo"
```

#### Graph 8.2: Ocupación Promedio
```
Medida DAX:
Ocupación Promedio = 
AVERAGE([estimated_occupancy_l365d])

Card visualization
Formato: Percentage
```

#### Graph 8.3: Revenue vs Precio (Scatter)
```
Visualización: Scatter Chart
X-axis: price
Y-axis: estimated_revenue_l365d
Size: availability_365
Legend: Room Type
Título: "Revenue vs Precio por Noche"
```

#### Graph 8.4: Disponibilidad vs Revenue
```
Visualización: Scatter Chart
X-axis: availability_365
Y-axis: estimated_revenue_l365d
Size: price
Título: "Disponibilidad vs Revenue"
```

#### Medidas DAX Adicionales:
```dax
Revenue Promedio Diario = 
DIVIDE(
    AVERAGE([estimated_revenue_l365d]),
    365,
    0
)

Revenue por Ocupación = 
DIVIDE(
    AVERAGE([estimated_revenue_l365d]),
    AVERAGE([estimated_occupancy_l365d]),
    0
)

Tasa de Disponibilidad = 
DIVIDE(
    AVERAGE([availability_365]),
    365,
    0
)
```

**Insights a buscar:**
- ¿Qué tipo de propiedad genera más revenue?
- ¿Mayor precio = mayor revenue? ¿O es por volumen?
- ¿Cuál es la ocupación promedio?
- ¿Hay listings con alta disponibilidad pero bajo revenue?

---

### PASO 9: ANÁLISIS AVANZADO - SEGMENTACIONES

#### Segmentación por Rango de Precio
```dax
Segmento Precio = 
SWITCH(
    TRUE(),
    [price] < 50, "Budget (<50€)",
    [price] < 100, "Mid-Range (50-100€)",
    [price] < 200, "Premium (100-200€)",
    "Luxury (>200€)"
)
```

Crear análisis comparativo de cada segmento:
- Distribución
- Rating promedio
- Revenue promedio
- Ocupación promedia

#### Segmentación por Tamaño
```dax
Segmento Tamaño = 
SWITCH(
    TRUE(),
    [accommodates] <= 2, "Individual/Pareja",
    [accommodates] <= 4, "Familia Pequeña",
    [accommodates] <= 6, "Familia Grande",
    "Grupo Grande"
)
```

---

### PASO 10: SLICERS (FILTROS INTERACTIVOS)

Añadir estos filtros para hacer el dashboard interactivo:

#### Slicer 1: Price Range
```
Visualización: Slicer
Field: price
Style: Between (slider)
Position: Top o Left sidebar
```

#### Slicer 2: Bedrooms
```
Visualización: Slicer
Field: bedrooms
Style: List
```

#### Slicer 3: Room Type
```
Visualización: Slicer
Field: Room Type (calculated column)
Style: Tile or List
```

#### Slicer 4: Superhost
```
Visualización: Slicer
Field: host_is_superhost
Style: Tile
```

#### Slicer 5: Minimum Rating
```
Visualización: Slicer
Field: review_scores_rating
Style: Greater than or equal to (slider)
```

#### Slicer 6: Availability
```
Visualización: Slicer
Field: availability_365
Style: Between (slider)
```

---

## 👥 DIVISIÓN DE TAREAS DEL EQUIPO

### 📋 Sugerencia de División (Ajustar según equipo)

#### **Miembro 1: Análisis de Precios y Propiedades**
- [ ] Paso 1: KPIs principales (4 cards)
- [ ] Paso 2: Análisis completo de precios (4 gráficos)
- [ ] Paso 3: Análisis de tipos de propiedad (3 gráficos)
- [ ] Crear medidas DAX relacionadas con precio
- [ ] Documentar insights encontrados

**Entregables:**
- Página 1 del Dashboard: "Overview y Precios"
- Documento con insights de precios

---

#### **Miembro 2: Análisis Geográfico y Hosts**
- [ ] Paso 4: Análisis geográfico (2 mapas)
- [ ] Paso 7: Análisis de hosts (4 gráficos)
- [ ] Corrección de tipos de datos (lat/long)
- [ ] Crear columnas calculadas para host types
- [ ] Documentar patrones geográficos

**Entregables:**
- Página 2 del Dashboard: "Geografía y Hosts"
- Mapa interactivo funcional
- Documento con insights geográficos

---

#### **Miembro 3: Análisis de Superhosts y Reviews**
- [ ] Paso 5: Análisis de Superhosts (4 gráficos)
- [ ] Paso 6: Análisis de reviews (3 gráficos)
- [ ] Crear medidas DAX para comparaciones
- [ ] Análisis estadístico de diferencias
- [ ] Documentar ventajas de Superhosts

**Entregables:**
- Página 3 del Dashboard: "Superhosts y Reviews"
- Documento con insights sobre calidad

---

#### **Miembro 4: Análisis de Revenue y Optimización**
- [ ] Paso 8: Análisis de revenue (4 gráficos)
- [ ] Paso 9: Segmentaciones avanzadas
- [ ] Crear todas las medidas DAX de revenue
- [ ] Análisis de ocupación y disponibilidad
- [ ] Recomendaciones de optimización

**Entregables:**
- Página 4 del Dashboard: "Revenue y Rentabilidad"
- Documento con recomendaciones de negocio

---

#### **Miembro 5: Integración, Diseño y Presentación**
- [ ] Paso 10: Implementar todos los slicers
- [ ] Aplicar tema consistente a todo el dashboard
- [ ] Asegurar interactividad entre páginas
- [ ] Crear página de resumen ejecutivo
- [ ] Preparar storytelling para presentación
- [ ] Crear README para GitHub
- [ ] Coordinar integración de todas las páginas

**Entregables:**
- Dashboard integrado y pulido
- Página de Executive Summary
- Presentación PowerPoint/PDF
- README.md para repositorio

---

### 🔄 Trabajo Colaborativo

#### Reuniones de Sincronización:
- **Día 1:** Kickoff - Dividir tareas, revisar datos
- **Día 2:** Check-in - Compartir primeros gráficos
- **Día 3:** Review - Integrar páginas, resolver problemas
- **Día 4:** Ensayo - Preparar demo y presentación

#### Herramientas:
- **GitHub:** Control de versiones (subir .pbix frecuentemente)
- **Trello/Jira:** Gestión de tareas
- **Slack/Discord:** Comunicación rápida
- **Google Docs:** Documentación compartida de insights

---

## ✅ CHECKLIST DE ENTREGA

### Nivel Esencial ✅
- [ ] EDA completo con visualizaciones clave
- [ ] Notebook documentado (comentarios, markdown)
- [ ] Kanban board actualizado
- [ ] Repositorio GitHub con ramas organizadas
- [ ] README.md completo
- [ ] Commits descriptivos y limpios

### Nivel Medio ✅
- [ ] Panel PowerBI funcional con info relevante
- [ ] Visualizaciones avanzadas (Plotly/Seaborn en notebook)
- [ ] Segmentación por ciudades/grupos
- [ ] Diferencias clave identificadas

### Nivel Avanzado ✅
- [ ] Filtros interactivos en el panel
- [ ] Versión dockerizada del panel
- [ ] Hipótesis verificadas con tests estadísticos
- [ ] Análisis de correlaciones

### Nivel Experto 🏆
- [ ] Análisis predictivo o clustering (ML)
- [ ] Integración de datos adicionales
- [ ] Despliegue público accesible

---

## 🎨 DISEÑO DEL DASHBOARD

### Estructura Sugerida:

#### **Página 1: Executive Summary**
```
┌─────────────────────────────────────────────┐
│  🏠 MADRID AIRBNB ANALYTICS                 │
│  [4 KPI Cards en fila]                      │
├──────────────────┬──────────────────────────┤
│   Mapa Principal │  Donut: Room Types       │
│   (Geográfico)   │  + Price by Type         │
├──────────────────┼──────────────────────────┤
│   Top Barrios    │  Distribución Precio     │
│   (Bar Chart)    │  (Histogram)             │
└──────────────────┴──────────────────────────┘
```

#### **Página 2: Análisis de Precios**
```
┌─────────────────────────────────────────────┐
│  💰 PRICE ANALYSIS                          │
├──────────────────┬──────────────────────────┤
│   Scatter:       │  Box Plot o              │
│   Price vs       │  Statistical Summary     │
│   Accommodates   │                          │
├──────────────────┼──────────────────────────┤
│   Price by       │  Price Distribution      │
│   Bedrooms       │  by Room Type            │
└──────────────────┴──────────────────────────┘
```

#### **Página 3: Superhosts & Quality**
```
┌─────────────────────────────────────────────┐
│  ⭐ SUPERHOST ANALYSIS                      │
├──────────────────┬──────────────────────────┤
│   Comparison:    │  Rating Breakdown        │
│   Price, Rating, │  by Category             │
│   Revenue        │                          │
├──────────────────┴──────────────────────────┤
│   Reviews vs Price (Scatter)                │
│   + Response Rate Impact                    │
└─────────────────────────────────────────────┘
```

#### **Página 4: Revenue & Business**
```
┌─────────────────────────────────────────────┐
│  💼 REVENUE ANALYSIS                        │
├──────────────────┬──────────────────────────┤
│   Revenue by     │  Occupancy Rate          │
│   Type/Segment   │  Analysis                │
├──────────────────┼──────────────────────────┤
│   Revenue vs     │  Availability vs         │
│   Price          │  Revenue                 │
└──────────────────┴──────────────────────────┘
```

### Paleta de Colores Sugerida:
- **Primary:** #FF5A5F (Airbnb Red)
- **Secondary:** #00A699 (Teal)
- **Accent:** #FC642D (Orange)
- **Neutral:** #484848 (Dark Gray)
- **Background:** #FFFFFF o #F7F7F7

### Fuentes:
- **Títulos:** Segoe UI Bold, 14-16pt
- **Texto:** Segoe UI Regular, 10-11pt
- **KPIs:** Segoe UI Semibold, 24-32pt

---

## 📊 MEDIDAS DAX COMPLETAS

### Medidas Básicas:
```dax
// KPIs Principales
Total Listings = COUNTROWS('YourTable')
Precio Promedio = AVERAGE('YourTable'[price])
Rating Promedio = AVERAGE('YourTable'[review_scores_rating])
Revenue Total = SUM('YourTable'[estimated_revenue_l365d])

// Estadísticas de Precio
Precio Mínimo = MIN('YourTable'[price])
Precio Máximo = MAX('YourTable'[price])
Precio Mediana = MEDIAN('YourTable'[price])
Percentil 25 = PERCENTILE.INC('YourTable'[price], 0.25)
Percentil 75 = PERCENTILE.INC('YourTable'[price], 0.75)

// Reviews
Reviews Totales = SUM('YourTable'[number_of_reviews])
Reviews Promedio = AVERAGE('YourTable'[number_of_reviews])
Tasa Reviews = DIVIDE([Reviews Totales], [Total Listings], 0)

// Occupancy & Revenue
Ocupación Promedio = AVERAGE('YourTable'[estimated_occupancy_l365d])
Revenue Promedio = AVERAGE('YourTable'[estimated_revenue_l365d])
Revenue por Día = DIVIDE([Revenue Promedio], 365, 0)
Disponibilidad Promedio = AVERAGE('YourTable'[availability_365])
```

### Medidas de Comparación:
```dax
// Superhosts vs Regular
Precio Superhost = 
CALCULATE(
    [Precio Promedio],
    'YourTable'[host_is_superhost] = "t"
)

Precio Regular = 
CALCULATE(
    [Precio Promedio],
    'YourTable'[host_is_superhost] = "f"
)

Diferencia Precio Superhost = [Precio Superhost] - [Precio Regular]

% Diferencia Superhost = 
DIVIDE(
    [Diferencia Precio Superhost],
    [Precio Regular],
    0
)
```

### Medidas de Ranking:
```dax
// Ranking de Barrios
Ranking Barrio Precio = 
RANKX(
    ALL('YourTable'[neighbourhood]),
    [Precio Promedio],
    ,
    DESC,
    Dense
)

Ranking Barrio Listings = 
RANKX(
    ALL('YourTable'[neighbourhood]),
    [Total Listings],
    ,
    DESC,
    Dense
)
```

### Columnas Calculadas:
```dax
// Room Type
Room Type = 
SWITCH(
    TRUE(),
    'YourTable'[room_type_Hotel room] = TRUE, "Hotel Room",
    'YourTable'[room_type_Private room] = TRUE, "Private Room",
    'YourTable'[room_type_Shared room] = TRUE, "Shared Room",
    "Entire Home"
)

// Segmento de Precio
Segmento Precio = 
SWITCH(
    TRUE(),
    'YourTable'[price] < 50, "Budget (<50€)",
    'YourTable'[price] < 100, "Mid-Range (50-100€)",
    'YourTable'[price] < 200, "Premium (100-200€)",
    "Luxury (>200€)"
)

// Tipo de Host
Host Type = 
IF(
    'YourTable'[host_total_listings_count] >= 3,
    "Profesional (3+)",
    "Ocasional (1-2)"
)

// Categoría de Rating
Categoría Rating = 
SWITCH(
    TRUE(),
    'YourTable'[review_scores_rating] >= 4.8, "Excelente (4.8+)",
    'YourTable'[review_scores_rating] >= 4.5, "Muy Bueno (4.5-4.8)",
    'YourTable'[review_scores_rating] >= 4.0, "Bueno (4.0-4.5)",
    "Regular (<4.0)"
)

// Disponibilidad Alta/Media/Baja
Categoría Disponibilidad = 
SWITCH(
    TRUE(),
    'YourTable'[availability_365] > 300, "Alta (>300 días)",
    'YourTable'[availability_365] > 150, "Media (150-300)",
    'YourTable'[availability_365] > 0, "Baja (1-150)",
    "No Disponible"
)
```

---

## 🔍 INSIGHTS CLAVE A BUSCAR

### 1. Pricing Insights:
- [ ] ¿Cuál es el precio promedio en Madrid?
- [ ] ¿Qué rango de precios es más común?
- [ ] ¿Hay outliers significativos?
- [ ] ¿Cómo varía el precio por número de habitaciones?
- [ ] ¿Qué tipo de propiedad es más cara?

### 2. Geographic Insights:
- [ ] ¿Dónde se concentran los listings?
- [ ] ¿Qué áreas tienen precios más altos?
- [ ] ¿Hay diferencias entre centro y periferia?
- [ ] ¿Dónde están los Superhosts?