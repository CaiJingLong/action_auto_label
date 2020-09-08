import * as core from '@actions/core'

function helloStr(src: string): string {
  return `Hello ${src}`
}

async function run(): Promise<void> {
  try {
    core.info(`Hello world`)
    const username = core.getInput('user_name')
    core.info(helloStr(username))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
