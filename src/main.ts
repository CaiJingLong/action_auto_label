import * as core from '@actions/core'

function reverse(src: string): string {
  let r = ''
  for (const e of src) {
    r = r + e
  }
  return r
}

function helloStr(src: string): string {
  return reverse(src)
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
