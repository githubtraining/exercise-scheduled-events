# yaml-parser-action

This action reads a specified GitHub Actions workflow file, examines if the user has properly included a scheduled workflow trigger, and outputs its results into a `reports` object for use with [githubtraining/looking-glass-action](https://github.com/githubtraining/looking-glass-action).

See [actions.yml](action.yml) for specifics of the action's inputs.

### Working with yaml-parser-action

To run tests, run `npm run test`. To compile the action, use `npm run build`.