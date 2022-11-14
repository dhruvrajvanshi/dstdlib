import { Stream } from './Stream'

export type MutArr<T> = T[]

export function from<T>(stream: Stream<T>): MutArr<T> {
  return Array.from(stream)
}
