# Issues Label Status

This document provides a visual overview of the current and proposed label assignments.

## Current State (Before)

| # | Title | Current Labels | Status |
|---|-------|---------------|--------|
| 29 | chore(docker): Write Dockerfile | ❌ None | Open |
| 28 | feat(api): Create API for model | ❌ None | Open |
| 27 | feat(modeling): Train ensemble model | ❌ None | Open |
| 26 | feat(modeling): Train baseline model | ❌ None | Open |
| 25 | feat(modeling): Feature selection | ❌ None | Open |
| 24 | feat(dashboard): Advanced dashboard | ❌ None | Open |
| 23 | feat(src): Reusable viz functions | ❌ None | Open |
| 22 | feat(preprocessing): Scaling & encoding | ✅ `data` | Open |
| 21 | feat(preprocessing): Null & outlier cleaning | ✅ `data`, `EDA` | Open |
| 20 | feat(eda): EDA | ✅ `data`, `EDA` | Open |
| 19 | Data Set Evaluation (50%) | ❌ None | Open |
| 18 | chore: Configure Kanban | ❌ None | Open |
| 17 | docs: Commit naming convention | ❌ None | Open |
| 16 | docs: Gitflow methodology | ✅ `documentation` | Open |
| 15 | Complete README & presentation | ✅ `documentation` | Open |
| 14 | Write final report | ✅ `documentation` | Open |
| 13 | Refine Power BI design | ✅ `powerbi` | Open |
| 12 | Build Power BI dashboard | ✅ `powerbi` | Open |
| 11 | Deploy to Render | ✅ `deploy` | Open |
| 10 | Dockerize FastAPI | ✅ `docker` | Open |
| 9 | Connect Power BI to API | ✅ `backend` | Open |
| 8 | Create data endpoints | ✅ `backend` | Open |
| 7 | Initialize FastAPI | ✅ `backend` | Open |
| 6 | Model/clustering analysis | ✅ `ML` | Open |
| 5 | Data cleaning & preprocessing | ✅ `data` | Open |

## Proposed State (After)

| # | Title | Proposed Labels | Action | Reason |
|---|-------|----------------|--------|--------|
| 29 | chore(docker): Write Dockerfile | `docker` | ⛔ **CLOSE** | Duplicate of #10 |
| 28 | feat(api): Create API for model | `backend`, `ML` | ➕ Add labels | Model serving endpoint |
| 27 | feat(modeling): Train ensemble model | `ML` | ➕ Add labels | Advanced modeling |
| 26 | feat(modeling): Train baseline model | `ML` | ➕ Add labels | Baseline modeling |
| 25 | feat(modeling): Feature selection | `ML`, `data` | ➕ Add labels | Data+ML bridge |
| 24 | feat(dashboard): Advanced dashboard | `powerbi` | ➕ Add labels | Dashboard enhancement |
| 23 | feat(src): Reusable viz functions | `data` | ➕ Add labels | Data visualization |
| 22 | feat(preprocessing): Scaling & encoding | `data` | ✅ Keep | Already labeled |
| 21 | feat(preprocessing): Null & outlier cleaning | `data`, `EDA` | ✅ Keep | Already labeled |
| 20 | feat(eda): EDA | `data`, `EDA` | ⛔ **CLOSE** | Duplicate of #4 (closed) |
| 19 | Data Set Evaluation (50%) | `data`, `EDA` | ➕ Add labels | Data evaluation task |
| 18 | chore: Configure Kanban | `setup` | ➕ Add labels | Project setup |
| 17 | docs: Commit naming convention | `documentation` | ➕ Add labels | Documentation |
| 16 | docs: Gitflow methodology | `documentation` | ✅ Keep | Already labeled |
| 15 | Complete README & presentation | `documentation` | ✅ Keep | Already labeled |
| 14 | Write final report | `documentation` | ✅ Keep | Already labeled |
| 13 | Refine Power BI design | `powerbi` | ✅ Keep | Already labeled |
| 12 | Build Power BI dashboard | `powerbi` | ✅ Keep | Already labeled |
| 11 | Deploy to Render | `deploy` | ✅ Keep | Already labeled |
| 10 | Dockerize FastAPI | `docker` | ✅ Keep | Already labeled |
| 9 | Connect Power BI to API | `backend` | ✅ Keep | Already labeled |
| 8 | Create data endpoints | `backend` | ✅ Keep | Already labeled |
| 7 | Initialize FastAPI | `backend` | ✅ Keep | Already labeled |
| 6 | Model/clustering analysis | `ML` | ✅ Keep | Already labeled |
| 5 | Data cleaning & preprocessing | `data` | ✅ Keep | Already labeled |

## Summary Statistics

### Current State
- **Total open issues:** 25
- **Issues with labels:** 15 (60%)
- **Issues without labels:** 10 (40%)

### After Changes
- **Total open issues:** 23 (after closing 2 duplicates)
- **Issues with labels:** 23 (100%)
- **Duplicates closed:** 2

## Label Distribution (After)

| Label | Count | Issues |
|-------|-------|--------|
| `data` | 6 | #5, #19, #21, #22, #23, #25 |
| `EDA` | 2 | #19, #21 |
| `ML` | 5 | #6, #25, #26, #27, #28 |
| `backend` | 4 | #7, #8, #9, #28 |
| `powerbi` | 3 | #12, #13, #24 |
| `documentation` | 4 | #14, #15, #16, #17 |
| `docker` | 1 | #10 |
| `deploy` | 1 | #11 |
| `setup` | 1 | #18 |

## Workflow Phases

The issues are organized into logical workflow phases:

### Phase 1: Setup & Configuration
- #18: Configure Kanban board (setup)
- #17: Commit naming convention (documentation)
- #16: Gitflow methodology (documentation)

### Phase 2: Data Collection & Exploration
- #5: Data cleaning & preprocessing (data)
- #19: Data Set Evaluation (data, EDA)
- #21: Null & outlier cleaning (data, EDA)
- #23: Reusable viz functions (data)

### Phase 3: Data Preprocessing
- #22: Scaling & encoding (data)
- #25: Feature selection (ML, data)

### Phase 4: Modeling
- #26: Baseline model (ML)
- #6: Model/clustering analysis (ML)
- #27: Ensemble model (ML)

### Phase 5: Backend Development
- #7: Initialize FastAPI (backend)
- #8: Create data endpoints (backend)
- #28: Create model API (backend, ML)
- #9: Connect Power BI (backend)

### Phase 6: Deployment
- #10: Dockerize FastAPI (docker)
- #11: Deploy to Render (deploy)

### Phase 7: Visualization & Reporting
- #12: Build Power BI dashboard (powerbi)
- #13: Refine Power BI design (powerbi)
- #24: Advanced dashboard (powerbi)
- #14: Write final report (documentation)
- #15: Complete README (documentation)
