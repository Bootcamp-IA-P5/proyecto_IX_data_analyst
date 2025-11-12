#!/usr/bin/env python3
"""
Script to apply labels to GitHub issues and close duplicates.
This script implements the Kanban board configuration for the proyecto_IX_data_analyst repository.

Requirements:
    pip install PyGithub

Usage:
    export GITHUB_TOKEN="your_github_token"
    python3 .github/apply_labels.py
"""

import os
import sys
from typing import List, Dict

try:
    from github import Github
    from github.GithubException import GithubException
except ImportError:
    print("Error: PyGithub library not installed.")
    print("Please install it with: pip install PyGithub")
    sys.exit(1)


# Label assignments for each issue
LABEL_ASSIGNMENTS: Dict[int, List[str]] = {
    17: ["documentation"],
    18: ["setup"],
    19: ["data", "EDA"],
    23: ["data"],
    24: ["powerbi"],
    25: ["ML", "data"],
    26: ["ML"],
    27: ["ML"],
    28: ["backend", "ML"],
    29: ["docker"],  # Will be closed as duplicate
}

# Issues to close as duplicates
DUPLICATES_TO_CLOSE: Dict[int, Dict[str, any]] = {
    29: {
        "duplicate_of": 10,
        "comment": "Closing as duplicate of #10 (🐳 Dockerize FastAPI backend). Both tasks address Docker containerization."
    },
    20: {
        "duplicate_of": 4,
        "comment": "Closing as duplicate of #4 (🔎 Exploratory Data Analysis). EDA has already been completed."
    }
}


def get_github_client() -> Github:
    """Initialize and return GitHub client."""
    token = os.environ.get('GITHUB_TOKEN')
    if not token:
        print("Error: GITHUB_TOKEN environment variable not set.")
        print("Please set it with: export GITHUB_TOKEN='your_token'")
        sys.exit(1)
    
    return Github(token)


def apply_labels_to_issue(repo, issue_number: int, labels: List[str]) -> bool:
    """Apply labels to a specific issue."""
    try:
        issue = repo.get_issue(issue_number)
        current_labels = [label.name for label in issue.labels]
        
        # Add only new labels
        new_labels = [label for label in labels if label not in current_labels]
        
        if new_labels:
            issue.add_to_labels(*new_labels)
            print(f"✓ Issue #{issue_number}: Added labels {new_labels}")
            return True
        else:
            print(f"- Issue #{issue_number}: Already has labels {labels}")
            return False
    except GithubException as e:
        print(f"✗ Error applying labels to issue #{issue_number}: {e}")
        return False


def close_duplicate_issue(repo, issue_number: int, duplicate_info: Dict) -> bool:
    """Close an issue as duplicate."""
    try:
        issue = repo.get_issue(issue_number)
        
        if issue.state == "closed":
            print(f"- Issue #{issue_number}: Already closed")
            return False
        
        # Add comment
        issue.create_comment(duplicate_info["comment"])
        
        # Close the issue
        issue.edit(state="closed")
        
        print(f"✓ Issue #{issue_number}: Closed as duplicate of #{duplicate_info['duplicate_of']}")
        return True
    except GithubException as e:
        print(f"✗ Error closing issue #{issue_number}: {e}")
        return False


def main():
    """Main function to apply labels and close duplicates."""
    print("=" * 60)
    print("GitHub Issue Labels and Duplicates Management")
    print("Repository: Bootcamp-IA-P5/proyecto_IX_data_analyst")
    print("=" * 60)
    print()
    
    # Initialize GitHub client
    g = get_github_client()
    repo = g.get_repo("Bootcamp-IA-P5/proyecto_IX_data_analyst")
    
    # Apply labels
    print("Step 1: Applying labels to issues")
    print("-" * 60)
    labels_applied = 0
    for issue_number, labels in LABEL_ASSIGNMENTS.items():
        if apply_labels_to_issue(repo, issue_number, labels):
            labels_applied += 1
    
    print()
    print(f"Labels applied to {labels_applied} issues")
    print()
    
    # Close duplicates
    print("Step 2: Closing duplicate issues")
    print("-" * 60)
    duplicates_closed = 0
    for issue_number, duplicate_info in DUPLICATES_TO_CLOSE.items():
        if close_duplicate_issue(repo, issue_number, duplicate_info):
            duplicates_closed += 1
    
    print()
    print(f"Closed {duplicates_closed} duplicate issues")
    print()
    
    # Summary
    print("=" * 60)
    print("Summary")
    print("=" * 60)
    print(f"Total labels applied: {labels_applied}")
    print(f"Total duplicates closed: {duplicates_closed}")
    print()
    print("Next steps:")
    print("1. Review the changes in GitHub")
    print("2. Configure Kanban board columns (see KANBAN_CONFIGURATION.md)")
    print("3. Consider adding suggested missing tasks")
    print()


if __name__ == "__main__":
    main()
