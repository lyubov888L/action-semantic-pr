import * as github from '@actions/github'
import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  console.log(github.context.payload.pull_request)
  const title = github.context.payload.pull_request?.title
  console.log(title)
}

run()
