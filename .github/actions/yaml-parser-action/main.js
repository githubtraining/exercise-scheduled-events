const core = require('@actions/core')

const gradeLearner = require('./lib/gradeLearner')

async function run() {
  try {
    const files = core.getInput('files').split(',')
    //   TODO: verify the proper files were passed and learner didn't tamper with grading.yml

    const answers = {
      'stale-weekly': ['0 0 * * MON', '0 0 * * 1'],
    }

    const results = gradeLearner(files, answers)
    core.setOutput('report', results)
    // TODO pinpoint the exact file that failed
    const resultsArray = Object.entries(results)
    resultsArray.forEach((res) => {
      if (res[1].report.isCorrect !== true || res[1].report.level !== 'info') {
        throw res
      }
    })
  } catch (error) {
    core.setFailed(error)
  }
}

run()
