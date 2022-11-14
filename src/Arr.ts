import { Iter } from './Iter'
export type Arr<T> = ReadonlyArray<T>

export function from<T>(stream: Iter<T>): Arr<T> {
  return Array.from(stream)
}
