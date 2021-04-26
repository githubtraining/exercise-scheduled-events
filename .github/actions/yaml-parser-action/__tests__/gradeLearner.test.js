const gradeLearner = require('../lib/gradeLearner')
const fs = require('fs')
jest.mock('fs')

describe('gradeLearner', () => {
  process.env.GITHUB_WORKSPACE = 'workspace'
  it('Passes when learner supplies a proper value', () => {
    const mockFile = `
    on:
      schedule:
        - cron: "0 0 * * MON"
    `

    fs.readFileSync.mockReturnValue(mockFile)
    const res = gradeLearner()

    expect(JSON.stringify(res)).toBe(
      JSON.stringify({
        reports: [
          {
            filename: `workspace/.github/workflows/stale-weekly.yml`,
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
      })
    )
  })

  it('Passes when learner supplies an alternate proper value', () => {
    const mockFile = `
    on:
      schedule:
        - cron: "0 0 * * 1"
    `

    fs.readFileSync.mockReturnValue(mockFile)
    const res = gradeLearner()

    expect(JSON.stringify(res)).toBe(
      JSON.stringify({
        reports: [
          {
            filename: `workspace/.github/workflows/stale-weekly.yml`,
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
      })
    )
  })

  it('Failes when the learner supplies an improper value', () => {
    const mockFile = `
    on:
      schedule:
        - cron: "0 0 * * *"
    `

    fs.readFileSync.mockReturnValue(mockFile)
    const res = gradeLearner()

    expect(JSON.stringify(res)).toBe(
      JSON.stringify({
        reports: [
          {
            filename: `workspace/.github/workflows/stale-weekly.yml`,
            isCorrect: false,
            display_type: 'actions',
            level: 'warning',
            msg: 'incorrect solution',
            error: {
              expected: '0 0 * * MON or 0 0 * * 1',
              got: '0 0 * * *',
            },
          },
        ],
      })
    )
  })

  it('should report failure if something gores really wrong', () => {
    const mockFile = 'broken'

    fs.readFileSync.mockReturnValue(mockFile)
    const res = gradeLearner()

    expect(JSON.stringify(res)).toBe(
      JSON.stringify({
        reports: [
          {
            filename: `workspace/.github/workflows/stale-weekly.yml`,
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
      })
    )
  })
})
