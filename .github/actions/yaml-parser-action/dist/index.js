module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(948);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 244:
/***/ (function(module, __unusedexports, __webpack_require__) {

const fs = __webpack_require__(747)
const yaml = __webpack_require__(900)

module.exports = () => {
  // 1. take a targeted file
  const filename = `${process.env.GITHUB_WORKSPACE}/.github/workflows/stale-weekly.yml`
  // 2. check file for correct answers
  const answers = ['0 0 * * MON', '0 0 * * 1']

  // 3. set report payload to match LG version
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
              'Great job!  You have successfully configred the stale-weekly workflow file',
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
            type: 'actions',
            level: 'warning',
            msg: `Expected ${filename} to contain the cron syntax ${
              answers[0]
            } or ${answers[1]}, but got ${doc.on.schedule[0].cron.trim()}`,
            error: {
              expected: '',
              got: '',
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
          type: 'actions',
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


/***/ }),

/***/ 727:
/***/ (function(module) {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 900:
/***/ (function(module) {

module.exports = eval("require")("js-yaml");


/***/ }),

/***/ 948:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(727)

const gradeLearner = __webpack_require__(244)

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


/***/ })

/******/ });