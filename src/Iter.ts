import { Arr, MutArr, Predicate, Primitive, RO } from './index'

export type Iter<T> = Iterable<T>
export type Iterator<T> = IterableIterator<T>

export function* map<T, U>(self: Iter<T>, f: (value: T) => U): Iterator<U> {
  for (const item of self) {
    yield f(item)
  }
}

export function* filter<T>(self: Iter<T>, f: Predicate<T>): Iterator<T> {
  for (const item of self) {
    if (f(item)) {
      yield item
    }
  }
}

export function toMutArr<T>(self: Iter<T>): MutArr<T> {
  const result: MutArr<T> = []
  for (const item of self) {
    result.push(item)
  }
  return result
}

export function groupBy<T, Key extends Primitive>(
  self: Iter<RO<T>>,
  property: (value: T) => Key
): Map<Key, Arr<T>> {
  const result = new Map<Key, MutArr<T>>()
  for (const item of self) {
    const key = property(item)
    if (!result.has(key)) {
      result.set(key, [])
    }
    result.get(key)?.push(item)
  }
  return result
}

export function* range(start: number, end: number): Iterator<number> {
  for (let i = start; i < end; i++) {
    yield i
  }
}

export function* repeat<T>(value: T, times: number): Iterator<T> {
  for (const _ in range(0, times)) {
    yield value
  }
}
