const fs = require('fs')
const yaml = require('js-yaml')

module.exports = () => {
  const filename = `${process.env.GITHUB_WORKSPACE}/.github/workflows/stale-weekly.yml`

  const answers = ['0 0 * * MON', '0 0 * * 1']

  try {
    const doc = yaml.load(fs.readFileSync(filename, 'utf8'))

    if (answers.includes(doc.on.schedule[0].cron.trim())) {
      return {
        reports: [
          {
            filename: filename,
            isCorrect: true,
            display_type: 'actions',
            level: 'info',
            msg:
              'Great job!  You have successfully configured the stale-weekly workflow file.',
            error: {
              expected: '',
              got: '',
            },
          },
        ],
      }
    } else {
      return {
        reports: [
          {
            filename: filename,
            isCorrect: false,
            display_type: 'actions',
            level: 'warning',
            msg: `incorrect solution`,
            error: {
              expected: '0 0 * * MON or 0 0 * * 1',
              got: `${doc.on.schedule[0].cron.trim()}`,
            },
          },
        ],
      }
    }
  } catch (error) {
    return {
      reports: [
        {
          filename: filename,
          isCorrect: false,
          display_type: 'actions',
          level: 'fatal',
          msg: '',
          error: {
            expected: '',
            got:
              'An internal error occurred.  Please open an issue at: https://github.com/githubtraining/lab-scheduled-events and let us know!  Thank you',
          },
        },
      ],
    }
  }
}
