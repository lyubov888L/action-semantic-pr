import {validate} from 'parse-commit-message'

export const isSemantic = (message: string): boolean => {
  return validate(message)
}
