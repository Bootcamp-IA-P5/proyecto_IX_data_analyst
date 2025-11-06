# proyecto_IX_data_analyst

Data analysis project for Bootcamp IA - P5

## Project Structure

```
proyecto_IX_data_analyst/
├── .github/              # GitHub configuration and automation scripts
│   ├── QUICKSTART.md     # Quick guide for applying labels to issues
│   ├── KANBAN_CONFIGURATION.md  # Kanban board setup guide
│   ├── ISSUES_STATUS.md  # Visual issue tracking
│   ├── apply_labels.py   # Python script for label automation
│   └── apply_labels.sh   # Bash script for label automation
├── data/                 # Data files
│   ├── raw/             # Raw data from sources
│   └── processed/       # Cleaned and processed data
├── notebooks/           # Jupyter notebooks for analysis
├── powerBI/            # Power BI dashboard files
├── reports/            # Project reports and documentation
├── src/                # Source code and utilities
└── requirements.txt    # Python dependencies
```

## GitHub Issue Management

This project uses labels and a Kanban board to organize tasks. To set up the issue labels and board:

1. See [`.github/QUICKSTART.md`](.github/QUICKSTART.md) for the fastest way to apply labels
2. See [`.github/KANBAN_CONFIGURATION.md`](.github/KANBAN_CONFIGURATION.md) for complete setup guide

Available labels:
- `data` - Data-related tasks
- `EDA` - Exploratory Data Analysis
- `ML` - Machine Learning and modeling
- `backend` - Backend API development
- `powerbi` - Power BI dashboard
- `documentation` - Documentation
- `docker` - Docker containerization
- `deploy` - Deployment
- `setup` - Setup and configuration

## Getting Started

1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Review issues and Kanban board
4. Start with tasks labeled `setup` or `data`

## Contributing

This project follows a structured workflow with labeled issues and Kanban board tracking. Please:
- Check existing issues before creating new ones
- Use appropriate labels when creating issues
- Follow the commit naming convention (see issue #17)
- Follow Gitflow methodology (see issue #16)
