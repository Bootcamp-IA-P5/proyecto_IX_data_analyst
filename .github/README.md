# GitHub Configuration Files

This directory contains configuration files and scripts for managing the GitHub repository.

## Files

### KANBAN_CONFIGURATION.md
Comprehensive documentation for configuring the Kanban board, including:
- Available labels and their purposes
- Recommended label assignments for all issues
- Analysis of duplicate and overlapping issues
- Suggested missing tasks to add
- Kanban board column structure
- Implementation checklist

### apply_labels.sh
Bash script to automatically apply labels to issues and close duplicates using GitHub CLI.

**Usage:**
```bash
# Authenticate with GitHub (one-time setup)
gh auth login

# Run the script
chmod +x .github/apply_labels.sh
./.github/apply_labels.sh
```

**Requirements:**
- GitHub CLI (gh) installed
- Authenticated with GitHub

### apply_labels.py
Python script alternative to automatically apply labels to issues and close duplicates.

**Usage:**
```bash
# Install dependencies
pip install PyGithub

# Set GitHub token
export GITHUB_TOKEN="your_github_personal_access_token"

# Run the script
python3 .github/apply_labels.py
```

**What it does:**
- Applies appropriate labels to issues #17-29
- Closes duplicate issues (#20, #29)
- Provides summary of changes made

**Requirements:**
- Python 3.6+
- PyGithub library
- GitHub personal access token with repo access

## Manual Label Application

If you prefer to apply labels manually, refer to the "Implementation Checklist" section in `KANBAN_CONFIGURATION.md` or use the GitHub CLI commands provided in that document.

## Quick Reference: Label Assignments

| Issue | Title | Labels |
|-------|-------|--------|
| #17 | Establish commit naming convention | `documentation` |
| #18 | Configure Kanban board columns and labels | `setup` |
| #19 | Data Set Evaluation (50%) | `data`, `EDA` |
| #23 | Create reusable data visualization functions | `data` |
| #24 | Create advanced dashboard with Power BI/Tableau | `powerbi` |
| #25 | Perform feature selection | `ML`, `data` |
| #26 | Train and evaluate a simple baseline model | `ML` |
| #27 | Train and optimize an ensemble model | `ML` |
| #28 | Create a simple API to serve the model | `backend`, `ML` |
| #29 | Write Dockerfile to containerize the application | `docker` (DUPLICATE - close) |

## Issues to Close

- **#29**: Duplicate of #10 (Dockerize FastAPI backend)
- **#20**: Duplicate of #4 (Exploratory Data Analysis - already completed)
