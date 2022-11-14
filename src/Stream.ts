import { MutArr, Predicate, StreamM } from './index'

export type Stream<T> = Iterable<T>

export function* map<T, U>(self: Stream<T>, f: (value: T) => U): Stream<U> {
  for (const item of self) {
    yield f(item)
  }
}

export function* filter<T>(self: Stream<T>, f: Predicate<T>): Stream<T> {
  for (const item of self) {
    if (f(item)) {
      yield item
    }
  }
}

export function toMutArr<T>(self: Stream<T>): MutArr<T> {
  const result: MutArr<T> = []
  for (const item of self) {
    result.push(item)
  }
  return result
}
