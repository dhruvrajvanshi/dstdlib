import { Stream } from './Stream'
export type Arr<T> = ReadonlyArray<T>

export function from<T>(stream: Stream<T>): Arr<T> {
  return Array.from(stream)
}
