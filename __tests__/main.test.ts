import {wait} from '../src/wait'
import {run} from '../src/handle'
import * as process from 'process'

test('throws invalid number', async () => {
  const input = parseInt('foo', 10)
  await expect(wait(input)).rejects.toThrow('milliseconds not a number')
})

test('wait 500 ms', async () => {
  const start = new Date()
  await wait(500)
  const end = new Date()
  var delta = Math.abs(end.getTime() - start.getTime())
  expect(delta).toBeGreaterThan(450)
})

test('test_github', async () => {
  const token = process.env.GITHUB_TOKEN as string
  console.log(`token = ${token}`)
  run(token)
})
