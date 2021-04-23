const core = require('@actions/core')

const gradeLearner = require('./lib/gradeLearner')

async function run() {
  try {
    // Set output for service Error
    // Set output for correct
    // Set output for incorrect

    const results = gradeLearner()
    core.setOutput('reports', results)
  } catch (error) {
    core.setFailed(error)
  }
}

run()
