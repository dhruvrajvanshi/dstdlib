import { IterM } from '../index'

test('Groups by key', () => {
  const result = IterM.groupBy(
    [
      { tag: 'A', name: '1' },
      { tag: 'B', name: '2' },
      { tag: 'A', name: '3' },
    ],
    ({ tag }) => tag
  )

  expect(result).toEqual(
    new Map([
      [
        'A',
        [
          { tag: 'A', name: '1' },
          { tag: 'A', name: '3' },
        ],
      ],
      ['B', [{ tag: 'B', name: '2' }]],
    ])
  )
})
