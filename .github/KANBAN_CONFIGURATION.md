# Kanban Board Configuration

This document provides the recommended configuration for the GitHub Kanban board, including label assignments, duplicate task handling, and suggested improvements.

## Available Labels

The following labels are currently available in the repository:

- `data` - Data-related tasks (collection, cleaning, preprocessing)
- `EDA` - Exploratory Data Analysis tasks
- `documentation` - Documentation improvements
- `powerbi` - Power BI dashboard tasks
- `deploy` - Deployment-related tasks
- `docker` - Docker containerization tasks
- `backend` - Backend API development
- `ML` - Machine Learning and modeling tasks
- `setup` - Initial setup and configuration

## Recommended Label Assignments

### Issues Requiring Labels

The following open issues currently lack labels and should be updated:

#### Issue #29: chore(docker): Write Dockerfile to containerize the application
**Recommended Labels:** `docker`
**Status:** DUPLICATE - See issue #10
**Action:** Close this issue as duplicate of #10

#### Issue #28: feat(api): Create a simple API (Flask/FastAPI) to serve the model
**Recommended Labels:** `backend`, `ML`
**Note:** This overlaps with issues #7, #8, #9 but focuses on model serving specifically

#### Issue #27: feat(modeling): Train and optimize an ensemble model (e.g., RandomForest, XGBoost)
**Recommended Labels:** `ML`
**Note:** More detailed than issue #6; complements issues #26 and #25

#### Issue #26: feat(modeling): Train and evaluate a simple baseline model
**Recommended Labels:** `ML`
**Note:** Part of the modeling workflow with #25 and #27

#### Issue #25: feat(modeling): Perform feature selection
**Recommended Labels:** `ML`, `data`
**Note:** Bridge between data preprocessing and modeling

#### Issue #24: feat(dashboard): Create advanced dashboard with Power BI/Tableau
**Recommended Labels:** `powerbi`
**Status:** OVERLAPS with issues #12 and #13
**Action:** Consider consolidating or clarifying scope difference

#### Issue #23: feat(src): Create reusable data visualization functions
**Recommended Labels:** `data`
**Note:** Supports EDA and reporting tasks

#### Issue #19: Data Set Evaluation (50%)
**Recommended Labels:** `data`, `EDA`
**Action:** Clarify the objective - appears to be a milestone rather than a task

#### Issue #18: chore: Configure Kanban board columns and labels
**Recommended Labels:** `setup`
**Note:** This is the current task being addressed

#### Issue #17: docs: Establish commit naming convention
**Recommended Labels:** `documentation`
**Note:** Project organization and best practices

## Duplicate Issues Analysis

### Confirmed Duplicates

1. **Issue #29 vs Issue #10**
   - #29: "chore(docker): Write Dockerfile to containerize the application"
   - #10: "🐳 Dockerize FastAPI backend"
   - **Recommendation:** Close #29 as duplicate of #10

2. **Issue #20 vs Issue #4 (Closed)**
   - #20: "feat(eda): Perform Exploratory Data Analysis (EDA)"
   - #4: "🔎 Exploratory Data Analysis (EDA)" (CLOSED)
   - **Recommendation:** Close #20 as #4 is already completed

### Overlapping Issues

1. **Power BI Dashboard Tasks**
   - #24: "feat(dashboard): Create advanced dashboard with Power BI/Tableau"
   - #12: "📉 Build Power BI interactive dashboard"
   - #13: "🎨 Refine Power BI design and user filters"
   - **Recommendation:** Keep all three but clarify:
     - #12: Initial dashboard creation
     - #13: Design refinement and UX improvements
     - #24: Advanced features (optional enhancements)

2. **API Development Tasks**
   - #28: "feat(api): Create a simple API (Flask/FastAPI) to serve the model"
   - #7: "⚙️ Initialize FastAPI app and project structure"
   - #8: "📦 Create data loading and filtering endpoints"
   - #9: "🧾 Connect Power BI to FastAPI endpoints"
   - **Recommendation:** Keep all - they represent different phases:
     - #7: Initial setup
     - #8: Data endpoints
     - #28: Model serving endpoints
     - #9: Power BI integration

3. **Data Preprocessing Tasks**
   - #21: "feat(preprocessing): Implement null and outlier data cleaning"
   - #22: "feat(preprocessing): Apply variable scaling and encoding"
   - #5: "🧹 Data cleaning and preprocessing"
   - **Recommendation:** Keep all - #21 and #22 are detailed subtasks of #5

4. **Modeling Tasks**
   - #25: "feat(modeling): Perform feature selection"
   - #26: "feat(modeling): Train and evaluate a simple baseline model"
   - #27: "feat(modeling): Train and optimize an ensemble model"
   - #6: "🧠 Model or clustering analysis"
   - **Recommendation:** Keep all - these represent the modeling pipeline:
     - #25: Feature engineering
     - #26: Baseline model
     - #27: Advanced model
     - #6: Exploratory modeling/clustering

## Missing Tasks

Based on the project structure and typical data science workflows, consider adding:

1. **Issue: Create model evaluation and comparison framework**
   - Labels: `ML`
   - Description: Implement metrics calculation and model comparison utilities

2. **Issue: Set up automated testing for data pipeline**
   - Labels: `data`, `setup`
   - Description: Add unit tests for data cleaning and preprocessing functions

3. **Issue: Configure CI/CD pipeline**
   - Labels: `deploy`, `setup`
   - Description: Set up GitHub Actions for automated testing and deployment

4. **Issue: Create API documentation with Swagger/OpenAPI**
   - Labels: `backend`, `documentation`
   - Description: Document all API endpoints with interactive documentation

5. **Issue: Implement data validation and quality checks**
   - Labels: `data`
   - Description: Add data quality validation before processing

## Kanban Board Column Structure

Recommended columns for the project board:

### 1. 📋 Backlog
Items that are planned but not yet ready to start
- Newer feature requests
- Optional enhancements
- Future improvements

### 2. 🔜 To Do
Tasks ready to be picked up, with clear requirements
- Issues with all necessary information
- Dependencies resolved
- Assigned or ready for assignment

### 3. 🏗️ In Progress
Currently being worked on
- Maximum 2-3 items per person to maintain focus
- Should have an assignee

### 4. 👀 Review
Completed work awaiting review
- Pull requests open
- Awaiting feedback or testing
- Documentation review needed

### 5. ✅ Done
Completed and merged tasks
- Closed issues
- Merged pull requests
- Verified functionality

## Implementation Checklist

To implement this configuration:

- [ ] Add labels to issues #17, #18, #19, #23, #24, #25, #26, #27, #28, #29
- [ ] Close issue #29 as duplicate of #10
- [ ] Close issue #20 as duplicate of completed #4
- [ ] Clarify scope of issue #19 or convert to milestone
- [ ] Add missing tasks (optional but recommended)
- [ ] Configure project board with recommended columns
- [ ] Move existing issues to appropriate columns based on their current status

## Label Application Script

For bulk label application, use the GitHub CLI or API:

```bash
# Example using GitHub CLI (requires GH_TOKEN)
gh issue edit 17 --add-label "documentation"
gh issue edit 18 --add-label "setup"
gh issue edit 19 --add-label "data,EDA"
gh issue edit 23 --add-label "data"
gh issue edit 24 --add-label "powerbi"
gh issue edit 25 --add-label "ML,data"
gh issue edit 26 --add-label "ML"
gh issue edit 27 --add-label "ML"
gh issue edit 28 --add-label "backend,ML"
gh issue edit 29 --add-label "docker"

# Close duplicates
gh issue close 29 --comment "Duplicate of #10"
gh issue close 20 --comment "Duplicate of #4 (already completed)"
```

## Notes

- This configuration follows conventional commit prefixes (feat, chore, docs)
- Labels are mutually inclusive - issues can have multiple labels
- The modeling pipeline (#25, #26, #27) should be executed in sequence
- Backend tasks (#7, #8, #28, #9) have dependencies and should follow order
- Power BI tasks (#12, #13, #24) build upon each other incrementally
