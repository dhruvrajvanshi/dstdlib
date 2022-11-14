import { cast, IterM, ValueOf } from './index'

export function* entries<T extends object>(
  obj: T
): IterableIterator<[keyof T, ValueOf<T>]> {
  for (const key of Object.keys(obj)) {
    yield [cast(key), obj[cast<keyof T>(key)]]
  }
}

export function keys<T extends object>(obj: T): IterableIterator<keyof T> {
  return IterM.map(entries(obj), ([key]) => key)
}

export function values<T extends object>(obj: T): IterableIterator<ValueOf<T>> {
  return IterM.map(entries(obj), ([_, value]) => value)
}
