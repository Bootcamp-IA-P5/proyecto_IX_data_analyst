#!/bin/bash
# Script to apply labels to GitHub issues using GitHub CLI
# 
# Prerequisites:
#   - GitHub CLI (gh) installed
#   - Authenticated with: gh auth login
#
# Usage:
#   chmod +x .github/apply_labels.sh
#   ./.github/apply_labels.sh

set -e  # Exit on error

REPO="Bootcamp-IA-P5/proyecto_IX_data_analyst"

echo "=========================================="
echo "Applying labels to GitHub issues"
echo "Repository: $REPO"
echo "=========================================="
echo ""

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed."
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "Error: Not authenticated with GitHub CLI."
    echo "Please run: gh auth login"
    exit 1
fi

echo "Step 1: Applying labels to issues"
echo "------------------------------------------"

# Apply labels to each issue
gh issue edit 17 --repo "$REPO" --add-label "documentation" && echo "✓ Issue #17: Added 'documentation'"
gh issue edit 18 --repo "$REPO" --add-label "setup" && echo "✓ Issue #18: Added 'setup'"
gh issue edit 19 --repo "$REPO" --add-label "data,EDA" && echo "✓ Issue #19: Added 'data', 'EDA'"
gh issue edit 23 --repo "$REPO" --add-label "data" && echo "✓ Issue #23: Added 'data'"
gh issue edit 24 --repo "$REPO" --add-label "powerbi" && echo "✓ Issue #24: Added 'powerbi'"
gh issue edit 25 --repo "$REPO" --add-label "ML,data" && echo "✓ Issue #25: Added 'ML', 'data'"
gh issue edit 26 --repo "$REPO" --add-label "ML" && echo "✓ Issue #26: Added 'ML'"
gh issue edit 27 --repo "$REPO" --add-label "ML" && echo "✓ Issue #27: Added 'ML'"
gh issue edit 28 --repo "$REPO" --add-label "backend,ML" && echo "✓ Issue #28: Added 'backend', 'ML'"
gh issue edit 29 --repo "$REPO" --add-label "docker" && echo "✓ Issue #29: Added 'docker' (will be closed as duplicate)"

echo ""
echo "Step 2: Closing duplicate issues"
echo "------------------------------------------"

# Close duplicate issues with comments
gh issue close 29 --repo "$REPO" --comment "Closing as duplicate of #10 (🐳 Dockerize FastAPI backend). Both tasks address Docker containerization." && echo "✓ Issue #29: Closed as duplicate of #10"
gh issue close 20 --repo "$REPO" --comment "Closing as duplicate of #4 (🔎 Exploratory Data Analysis). EDA has already been completed." && echo "✓ Issue #20: Closed as duplicate of #4"

echo ""
echo "=========================================="
echo "Done! All labels applied and duplicates closed."
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Review the changes at: https://github.com/$REPO/issues"
echo "2. Configure Kanban board columns (see .github/KANBAN_CONFIGURATION.md)"
echo "3. Consider adding suggested missing tasks"
echo ""
