import * as core from '@actions/core'
import {run} from './handle'

function exec(): void {
  const token = core.getInput('github-token')
  // const token = process.env['INPUT_GITHUB_TOKEN'] as string
  run(token)
}

exec()
