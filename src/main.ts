import {context} from '@actions/github'
import {isSemantic} from './utils'
import {setFailed} from '@actions/core'

async function run(): Promise<void> {
  const title: string = context.payload.pull_request?.title
  if (!isSemantic(title)) {
    setFailed('Invalid PR Title!')
  }
}

run()
