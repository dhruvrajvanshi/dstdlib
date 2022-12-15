import { repeat } from '../Iter'

describe('Iter.repeat', () => {
  it('repeats 0 times', () => {
    expect(Array.from(repeat(1, 0))).toEqual([])
  })

  it('repeats 1 time', () => {
    expect(Array.from(repeat(3, 1))).toEqual([3])
  })

  it('repeats 3 times', () => {
    expect(Array.from(repeat(5, 3))).toEqual([5, 5, 5])
  })
})
