import * as core from '@actions/core'
import {run} from './handle'

function exec(): void {
  const token = core.getInput('github-token')
  run(token)
}

exec()
