# Welcome to the scheduled events lab!

### About the codebase
In the codebase for this repo, you'll find 3 workflows which we describe below with their intended purpose. Each workflow is complete **except for** the `on:` key.
1. `stale-daily.yaml`: checks for stale issues daily at midnight and closes them
2. `stale-weekly.yaml`: checks for stale issues every Monday and closes them
3. `stale-monthly.yaml`: checks for stale issues on the first of every month and closes them

_Note:_ A fourth workflow titled `grading.yaml` exists, you do not need to use this workflow for any purpose. Altering this workflow will affect the repository's ability to assess and give feedback on your lab.

### Lab instructions
 To successfully complete this lab, the following conditions must be met on any branch other than the default branch (usually `main`) of his repository:
- `stale-daily.yaml` contains a trigger to run daily at midnight
- `stale-weekly.yaml` contains a trigger to run every Monday
- `stale-monthly.yaml` contains a trigger to run on the first of every month
- All workflows should contain valid syntax.

### References
Use these to help you!

- [Events that trigger workflows - GitHub Docs](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#schedule)
- [Cron examples - Crontab.guru](https://crontab.guru/examples.html)
