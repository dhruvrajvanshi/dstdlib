import { range } from '../Iter'

describe('Iter.range', () => {
  it('generates empty range', () => {
    expect(Array.from(range(0, 0))).toEqual([])
  })

  it('generates range with 1 element', () => {
    expect(Array.from(range(0, 1))).toEqual([0])
  })

  it('Generates range between elements', () => {
    expect(Array.from(range(1, 3))).toEqual([1, 2])
  })
})
