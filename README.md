# Welcome to the scheduled events lab!
- [About the codebase](#about-the-codebase)
- [Lab instructions](#lab-instructions)
- [Grading criteria](#grading-criteria)
- [A note about usage of GitHub Actions](#a-note-about-usage-of-github-actions)
- [References](#references)

## About the codebase
In the codebase for this repo, you'll find 3 workflows which we describe below with their intended purpose. Each workflow is complete **except for** the `on:` key.
1. `stale-daily.yaml`: checks for stale issues daily at midnight and closes them
2. `stale-weekly.yaml`: checks for stale issues every Monday and closes them
3. `stale-monthly.yaml`: checks for stale issues on the first of every month and closes them

A grading script exists at `.github/grading.yml`. You do not need to use this workflows for any purpose and altering its contents will affect the repository's ability to assess your lab and give feedback.

## Lab instructions

1. Create your own copy of this repository.
   - The easiest way to copy this repository is to click on **Use this template**. See *[Creating a repository from a template]* if you need assistance.
2. Complete the [grading criteria](#grading-criteria) in your newly created repository.
3. Your lab will be graded automatically when the grading criteria is met, this may take up to a minute.
   - To see the results of your lab, click on the **Actions** tab, select the **Grading workflow**, and select the most recent workflow run. See *[Viewing workflow run history]* if you need assistance. 
4. If you're having trouble getting started, run the troubleshooter: click on the **Actions** tab, select the **Grading workflow**, click on **Run workflow**, select the appropriate branch (usually `main`), and click on the **Run workflow** button. See *[Running a workflow on GitHub]* if you need asssistance.


## Grading criteria
 To successfully complete this lab, the following conditions must be met on any **branch other than the default** branch (usually `main`) of his repository:
- `stale-daily.yaml` contains a trigger to run daily at midnight
- `stale-weekly.yaml` contains a trigger to run every Monday
- `stale-monthly.yaml` contains a trigger to run on the first of every month
- All workflows should contain valid syntax.

## A note about usage of GitHub Actions
This lab utilizes GitHub Actions, which is free for public repositories and self-hosted runners, but may incur charges on private repositories. See *[About billing for GitHub Actions]* to learn more.

The use of GitHub actions also means that it may take the grading workflows a few seconds and sometimes minutes to run. To learn more about how GitHub Actions runs and evaluates your code, please see the landing page for *[GitHub Actions]* documentation.

## References
Use these to help you!

Resources specific to this lab:
- [Events that trigger workflows - GitHub Docs]
- [Cron examples - Crontab.guru]

Resources for working with labs and GitHub Actions in general:
- [Creating a repository from a template]
- [Viewing workflow run history]
- [Running a workflow on GitHub]
- [About billing for GitHub Actions]
- [GitHub Actions]


<!-- 
Links used throughout this README: 
-->
[Events that trigger workflows - GitHub Docs]: https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#schedule
[Cron examples - Crontab.guru]: https://crontab.guru/examples.html
[Creating a repository from a template]:                        https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
[Viewing workflow run history]:                                 https://docs.github.com/en/actions/managing-workflow-runs/viewing-workflow-run-history
[Running a workflow on GitHub]:                                 https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-on-github
[About billing for GitHub Actions]:                             https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
[GitHub Actions]:                                               https://docs.github.com/en/actions