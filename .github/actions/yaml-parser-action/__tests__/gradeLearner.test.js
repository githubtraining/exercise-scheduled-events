const gradeLearner = require('../lib/gradeLearner')
const fs = require('fs')
jest.mock('fs')

describe('gradeLearner', () => {
  it('Passes when learner supplies a proper value', () => {
    const mockFile = `
    on:
      schedule:
        - cron: "0 0 * * MON"
    `

    const files = ['some-test.yml']
    const answers = {
      'some-test': ['0 0 * * MON', '0 0 * * 1'],
    }

    fs.readFileSync.mockReturnValue(mockFile)
    const res = gradeLearner(files, answers)

    expect(JSON.stringify(res)).toBe(
      JSON.stringify({
        'some-test': {
          //   isCorrect: true,
          report: {
            isCorrect: true,
            type: 'actions',
            level: 'info',
            msg: 'Results for some-test: correct',
          },
        },
      })
    )
  })

  it('Passes when learner supplies an alternate proper value', () => {
    const mockFile = `
    on:
      schedule:
        - cron: "0 0 * * 1"
    `

    const files = ['some-test.yml']
    const answers = {
      'some-test': ['0 0 * * MON', '0 0 * * 1'],
    }

    fs.readFileSync.mockReturnValue(mockFile)
    const res = gradeLearner(files, answers)

    expect(JSON.stringify(res)).toBe(
      JSON.stringify({
        'some-test': {
          //   isCorrect: true,
          report: {
            isCorrect: true,
            type: 'actions',
            level: 'info',
            msg: 'Results for some-test: correct',
          },
        },
      })
    )
  })

  it('Failes when the learner supplies an improper value', () => {
    const mockFile = `
    on:
      schedule:
        - cron: "0 0 * * *"
    `

    const files = ['some-test.yml']
    const answers = {
      'some-test': ['0 0 * * MON', '0 0 * * 1'],
    }

    fs.readFileSync.mockReturnValue(mockFile)
    const res = gradeLearner(files, answers)

    expect(JSON.stringify(res)).toBe(
      JSON.stringify({
        'some-test': {
          //   isCorrect: false,
          report: {
            isCorrect: false,
            type: 'actions',
            level: 'fatal',
            msg:
              'Expected some-test to contain the cron syntax 0 0 * * MON or 0 0 * * 1, but got 0 0 * * *',
          },
        },
      })
    )
  })
})
