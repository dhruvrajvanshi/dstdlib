import { MutArr, Predicate } from './index'

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
