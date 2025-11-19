# Medidas DAX para el dashboard — Proyecto AirBnB

Este archivo contiene las medidas DAX recomendadas para usar en el modelo Power BI (tablas: `processed_all_cities`, `agg_all_cities`). Copia cada medida y pégala en la tabla de medidas en Power BI Desktop.

---

## Medidas generales (KPIs)

-- TotalListings (desde `agg_all_cities`)
TotalListings =
SUM(agg_all_cities[listings])

-- AvgPrice (precio medio por anuncio)
AvgPrice =
AVERAGE(processed_all_cities[price])

-- Avg Price (agg) — media ponderada usando la tabla agregada `agg_all_cities`
-- Nota: `agg_all_cities` no tiene columna `AvgPrice`; la media por barrio está en `price_mean`.
Avg Price (agg) =
DIVIDE(
	SUMX(agg_all_cities, agg_all_cities[price_mean] * agg_all_cities[listings]),
	SUM(agg_all_cities[listings])
)

-- MedianPrice (mediana de precio)
MedianPrice =
MEDIAN(processed_all_cities[price])

-- TotalReviews (suma de reseñas)
TotalReviews =
SUM(processed_all_cities[number_of_reviews])

-- AvgReviewsPerMonth
AvgReviewsPerMonth =
AVERAGE(processed_all_cities[reviews_per_month])

-- PctEntireHome (porcentaje de anuncios 'entire home/apt')
PctEntireHome =
VAR total = COUNTROWS(processed_all_cities)
VAR ent = CALCULATE(COUNTROWS(processed_all_cities), processed_all_cities[room_type] = "entire home/apt")
RETURN DIVIDE(ent, total, 0)

-- NumOutliers (conteo de outliers por zscore > 2.5)
NumOutliers =
CALCULATE(COUNTROWS(processed_all_cities), FILTER(processed_all_cities, ABS(processed_all_cities[price_zscore]) > 2.5))


## Medidas estadísticas para gráficos

-- PriceLogMean
PriceLogMean =
AVERAGE(processed_all_cities[price_log])

-- PriceZ_Mean
PriceZ_Mean =
AVERAGE(processed_all_cities[price_zscore])

-- MedianPrice_By_City (ejemplo para tarjeta por ciudad con slicer)
MedianPrice_By_City =
CALCULATE([MedianPrice], ALLEXCEPT(processed_all_cities, processed_all_cities[city]))


## Medidas para histograma/bins (si necesitas)

-- CountRowsAll =
CountRowsAll = COUNTROWS(processed_all_cities)

-- BinAveragePrice (ejemplo si creas un bin de precio con campo 'PriceBin')
BinAveragePrice =
AVERAGEX(VALUES(processed_all_cities[PriceBin]), AVERAGE(processed_all_cities[price]))


## Medidas de evolución / comparativa (opcional)

-- AvgPrice_LastYear (si tienes columna de fecha con last_review o date)
AvgPrice_LastYear =
CALCULATE([AvgPrice], DATESINPERIOD('Calendar'[Date], MAX('Calendar'[Date]), -12, MONTH))

-- GrowthPct_Price =
GrowthPct_Price =
VAR cur = [AvgPrice]
VAR prev = [AvgPrice_LastYear]
RETURN IF(AND(NOT(ISBLANK(cur)), NOT(ISBLANK(prev))), (cur-prev)/ABS(prev), BLANK())


## Notas de verificación
- Asegúrate de que las columnas referenciadas existen y usan exactamente esos nombres en el modelo (`price`, `price_log`, `price_zscore`, `listings`, `reviews_per_month`, `room_type`).
- Si tu tabla de agregados (`agg_all_cities`) no está relacionada por `city`+`neighbourhood` con `processed_all_cities`, crea una clave compuesta en Power Query: `CityNeighbourhood = city & "|" & neighbourhood` en ambas tablas y relaciona por esa columna.
- Tras crear cada medida, verifica el resultado arrastrándola a una tarjeta y explorando con slicers `city` y `room_type`.

---

Si quieres, con esto creo automáticamente `docs/demo_script.md` con un guion de 3 minutos y `powerbi/bookmarks_instructions.md` con pasos exactos para crear bookmarks y tooltips. Dime si los generamos ahora.