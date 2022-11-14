import { Arr, cast } from './index'

export function pipe<T, U>(value: T, f: (value: T) => U): U
export function pipe<T0, T1, T2>(
  value: T0,
  f0: (value: T0) => T1,
  f1: (value: T1) => T2
): T2
export function pipe<T0, T1, T2, T3>(
  value: T0,
  f0: (value: T0) => T1,
  f1: (value: T1) => T2,
  f2: (value: T2) => T3
): T3
export function pipe<T0, T1, T2, T3, T4>(
  value: T0,
  f0: (value: T0) => T1,
  f1: (value: T1) => T2,
  f2: (value: T2) => T3,
  f3: (value: T3) => T4
): T4
export function pipe<T0, T1, T2, T3, T4, T5>(
  value: T0,
  f0: (value: T0) => T1,
  f1: (value: T1) => T2,
  f2: (value: T2) => T3,
  f3: (value: T3) => T4,
  f4: (value: T4) => T5
): T5
export function pipe<T0, T1, T2, T3, T4, T5, T6>(
  value: T0,
  f0: (value: T0) => T1,
  f1: (value: T1) => T2,
  f2: (value: T2) => T3,
  f3: (value: T3) => T4,
  f4: (value: T4) => T5,
  f5: (value: T5) => T6
): T6
export function pipe<T, U>(value: T, ...fs: Arr<(value: never) => unknown>): U {
  let result: unknown = value
  for (const f of fs) {
    result = f(cast(value))
  }
  return cast(result)
}
