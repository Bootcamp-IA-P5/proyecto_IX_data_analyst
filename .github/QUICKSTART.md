# Quick Start Guide: Applying Labels to Issues

This guide provides the fastest way to apply labels to all unlabeled issues in the repository.

## Option 1: GitHub Actions (Recommended - Easiest)

**No installation required!** Just trigger the workflow:

1. Go to https://github.com/Bootcamp-IA-P5/proyecto_IX_data_analyst/actions
2. Click on "Apply Issue Labels" workflow
3. Click "Run workflow" button
4. Click the green "Run workflow" button in the dropdown
5. Wait ~30 seconds for completion

The workflow will automatically:
- Apply labels to all 10 unlabeled issues
- Close 2 duplicate issues
- Display a summary

**Time: ~30 seconds | Difficulty: Easiest**

## Option 2: GitHub CLI (Fast)

If you have GitHub CLI installed:

```bash
# 1. Navigate to project root
cd proyecto_IX_data_analyst

# 2. Run the script
./.github/apply_labels.sh
```

That's it! The script will:
- Apply labels to 10 issues
- Close 2 duplicate issues
- Display a summary

**Time: ~30 seconds | Difficulty: Easy**

## Option 3: Python Script

If you prefer Python:

```bash
# 1. Install dependencies
pip install PyGithub

# 2. Set your GitHub token
export GITHUB_TOKEN="your_token_here"

# 3. Run the script
python3 .github/apply_labels.py
```

**Time: ~1 minute | Difficulty: Medium**

## Option 4: Manual (via GitHub Web Interface)

If you prefer to do it manually, here are the exact steps:

### Apply Labels

1. Go to https://github.com/Bootcamp-IA-P5/proyecto_IX_data_analyst/issues

2. For each issue, click on it and add the following labels:

   - **Issue #17**: Add label `documentation`
   - **Issue #18**: Add label `setup`
   - **Issue #19**: Add labels `data`, `EDA`
   - **Issue #23**: Add label `data`
   - **Issue #24**: Add label `powerbi`
   - **Issue #25**: Add labels `ML`, `data`
   - **Issue #26**: Add label `ML`
   - **Issue #27**: Add label `ML`
   - **Issue #28**: Add labels `backend`, `ML`
   - **Issue #29**: Add label `docker` (will be closed)

### Close Duplicates

3. Close these duplicate issues with comments:

   - **Issue #29**: 
     - Add comment: "Closing as duplicate of #10 (🐳 Dockerize FastAPI backend). Both tasks address Docker containerization."
     - Click "Close issue"
   
   - **Issue #20**:
     - Add comment: "Closing as duplicate of #4 (🔎 Exploratory Data Analysis). EDA has already been completed."
     - Click "Close issue"

**Time: ~10 minutes | Difficulty: Manual**

## Option 5: Using GitHub CLI Individually

If you want to run commands one by one:

```bash
# Add labels
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
gh issue close 29 --comment "Closing as duplicate of #10"
gh issue close 20 --comment "Closing as duplicate of #4"
```

## Verification

After applying labels, verify by:

1. Visit: https://github.com/Bootcamp-IA-P5/proyecto_IX_data_analyst/issues
2. Check that all open issues have at least one label
3. Verify #20 and #29 are closed
4. Confirm 23 total open issues (down from 25)

## Next Steps

After labels are applied:

1. ✅ Configure Kanban board columns (see `KANBAN_CONFIGURATION.md`)
2. ✅ Review issue workflow phases (see `ISSUES_STATUS.md`)
3. ✅ Consider adding suggested missing tasks
4. ✅ Start organizing issues into Kanban columns

## Need Help?

- See `README.md` for detailed documentation
- See `KANBAN_CONFIGURATION.md` for complete Kanban setup guide
- See `ISSUES_STATUS.md` for visual before/after comparison
