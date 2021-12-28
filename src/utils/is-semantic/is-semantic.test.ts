import {isSemantic} from '.'

describe('utils/is-semantic', () => {
  it('should return true for a valid semantic message', () => {
    expect(isSemantic('feat: Testing')).toBeTruthy()
  })

  it('should return false for an invalid semantic message', () => {
    expect(isSemantic('Blah')).toBeFalsy()
  })
})
