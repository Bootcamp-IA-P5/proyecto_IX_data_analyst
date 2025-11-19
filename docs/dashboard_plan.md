**Plan de Dashboard profesional (Power BI) — Proyecto AirBnB**

Resumen rápido
- Objetivo: diseñar un panel claro, estético y eficaz para stakeholders y presentación a inversores, siguiendo la rúbrica del proyecto (EDA, insights, filtros interactivos, segmentación por ciudades y barrios).
- Archivos fuente: `processed_all_cities` (detalle por anuncio) y `agg_all_cities` (agregado por barrio).
- Acción inmediata: importa las consultas ya limpias en el modelo y aplica este tema (`theme_powerbi.json`).

1) Importar tema
- En Power BI Desktop: `View` → `Themes` → `Browse for themes` → seleccionar `powerbi/theme_powerbi.json`.
- El tema aplica paleta y tipografías base.

2) Modelo y relaciones recomendadas
- Tablas a usar (modo Import):
  - `processed_all_cities` (principal; granularidad anuncio)
  - `agg_all_cities` (agregado por `city` + `neighbourhood`)
- Relación recomendada: crear relación 1 (agg) → N (processed) sobre las columnas `city` y `neighbourhood` si Power BI lo permite; si no, crear clave compuesta en Power Query `CityNeighbourhood = city & "|" & neighbourhood` en ambas tablas.

3) Medidas DAX clave (copiar/pegar en la tabla `processed_all_cities` o en una tabla de measures)
- Medidas de negocio (usa nombres tal cual):

TotalListings =
CALCULATE(SUM(agg_all_cities[listings]))

AvgPrice =
AVERAGE(processed_all_cities[price])

MedianPrice =
MEDIAN(processed_all_cities[price])

TotalReviews =
SUM(processed_all_cities[number_of_reviews])

AvgReviewsPerMonth =
AVERAGE(processed_all_cities[reviews_per_month])

PctEntireHome =
VAR total = COUNTROWS(processed_all_cities)
VAR ent = CALCULATE(COUNTROWS(processed_all_cities), processed_all_cities[room_type] = "entire home/apt")
RETURN DIVIDE(ent, total, 0)

PriceLogMean =
AVERAGE(processed_all_cities[price_log])

PriceZ_Mean =
AVERAGE(processed_all_cities[price_zscore])

Top10NeighborhoodsByPrice =
TOPN(10, agg_all_cities, agg_all_cities[price_mean], DESC)

Nota: revisa los nombres de tablas/columnas exactos en tu modelo; ajusta si hay diferencias.

4) Estructura del dashboard (páginas sugeridas)
Página 1 — Overview (Resumen ejecutivo)
- Fila superior: 4 tarjetas KPI con `TotalListings`, `AvgPrice`, `MedianPrice`, `TotalReviews`.
- Lado izquierdo: mapa (Mapbox o ArcGIS / o el visual de mapa de Power BI) que muestre `processed_all_cities[latitude]` y `longitude` con tamaño por `price` y color por `price_zscore` (o `room_type`).
- Centro: gráfico de barras horizontales Top 10 `agg_all_cities[neighbourhood]` por `price_mean` (orden descendente), con `listings` como tooltip.
- Derecha: histograma de precios (`processed_all_cities[price]`) con bins (usa visual Histogram o definir bins manualmente).
- Slicers horizontales: `city`, `room_type`, rango de `price`.

Página 2 — Calidad y outliers
- Boxplot por `city`/`neighbourhood` (visual personalizado o usar violin/box con R/Plotly si quieres avanzado).
- Tabla con outliers detectados: filas donde `price_zscore > 2.5` o `price_outlier_iqr = TRUE` (filtra y muestra columna `name`, `host_name`, `price`, `final_id`).
- Heatmap de densidad de precios (usa matriz con `city` vs `neighbourhood` y `price_mean`).

Página 3 — Análisis comparativo por ciudad
- Selector `city` (slicer grande).
- Gráfico de barras apiladas por `room_type` mostrando porcentaje y conteo.
- Boxplots por `neighbourhood` para comparar dispersión.
- Tabla resumen: `neighbourhood`, `listings`, `price_mean`, `price_median`, `reviews_mean` (desde `agg_all_cities`).

Página 4 — Insights y recomendaciones (para inversores)
- Tarjetas/verbatim con 5 insights concretos (ej: barrios con mayor growth potencial, zonas con precios atípicos, correlación price/reviews).
- Bullet points con recomendaciones (p.ej. concentración de listings por host, barrios con alta demanda y baja oferta).

5) Formato y UX (para que sea profesional)
- Tipografías: Segoe UI (títulos 14-16), cuerpo 10-11.
- Espaciado: usar contenedores (Bookmarks o Grid) para alinear KPI + mapas.
- Colores: usar `theme_powerbi.json`. Azul para acciones primarias, naranja para acentos, gris oscuro para texto.
- Tooltips: personalizar con `name`, `host_name`, `price`, `reviews_per_month`.
- Interacciones: activar cross-filter entre mapas y tablas; permitir drill-through por `neighbourhood`.

6) Visualizaciones avanzadas (opcional para nivel medio/alto)
- Pairplot/Scatter matrix: exportar desde Python (Plotly) como imagen interactiva o usar visual personalizado.
- Clustering K-means: si quiere nivel avanzado, generar clusters por `price`, `reviews_per_month`, `availability_365` en Python/PowerQuery y exponer `cluster` como columna; añadir slicer por cluster.
- Test estadísticos: si verificáis hipótesis (p.ej. precios por room_type), ejecutar test t o ANOVA en notebook; presentar resultado en la página de Insights.

7) Checklist de entrega (para la rúbrica)
- [ ] Notebook con EDA y conclusiones (comentado en markdown). (Obligatorio)
- [ ] Repositorio GitHub con código y `powerbi/theme_powerbi.json` + `docs/dashboard_plan.md`.
- [ ] `.pbix` con dashboard final y páginas definidas.
- [ ] Presentación técnica (.pptx) con objetivos, pipeline, resultados principales e instrucciones para reproducir.
- [ ] Kanban Board (link en README).

8) Consejos para la demo en vivo
- Prepara 3 historias: 1) overview ejecutivo (1 min), 2) deep dive barrio/host (2-3 min), 3) conclusions y recomendación (1 min).
- Ten listos filtros preseleccionados y bookmarks para saltar rápidamente entre vistas.
- Practica la narración: qué pregunta del negocio responde cada visual.

---
