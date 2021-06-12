import * as github from '@actions/github'
import * as core from '@actions/core'

async function run(): Promise<void> {
  const regexPattern = new RegExp(
    /^(?<type>build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test|¯\\_\(ツ\)_\/¯)(?<scope>\(\w+\)?((?=:\s)|(?=!:\s)))?(?<breaking>!)?(?<subject>:\s.*)?|^(?<merge>Merge \w+)/
  )
  const title: string = github.context.payload.pull_request?.title
  if (!regexPattern.test(title)) {
    core.setFailed('Invalid PR Title!')
  }
}

run()
