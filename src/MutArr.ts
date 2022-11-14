import { Iter } from './Iter'

export type MutArr<T> = T[]

export function from<T>(stream: Iter<T>): MutArr<T> {
  return Array.from(stream)
}
