import { ObjM, ArrM } from './index'

test('ObjM.entries', () => {
  const entries = ArrM.from(
    ObjM.entries({
      key1: 1,
      key2: 2,
    })
  )
  expect(entries).toEqual([
    ['key1', 1],
    ['key2', 2],
  ])
})

test('ObjM.keys', () => {
  const keys = ArrM.from(
    ObjM.keys({
      key1: 1,
      key2: 2,
    })
  )
  expect(keys).toEqual(['key1', 'key2'])
})

test('ObjM.values', () => {
  const keys = ArrM.from(
    ObjM.values({
      key1: 1,
      key2: 2,
    })
  )
  expect(keys).toEqual([1, 2])
})
