import { assert, describe, expect, it } from 'vitest'

describe('Base test', () => {
  it('should assert true', () => {
    assert.equal(true, true);
  })

  it('should expect true', () => {
    expect(true).eq(true);
  })
})