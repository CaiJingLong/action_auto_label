import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    core.info(`Hello world`)
    const username = core.getInput('user_name')
    core.info(`Hello ${username}`)

    core.info(`username === admin : ${username === 'admin'}`)

    core.info(`event name = ${github.context.eventName}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
