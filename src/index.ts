export type RO<T> = Readonly<T>

export type KeyOf<T> = keyof T
export type ValueOf<T> = T[keyof T]

export function cast<T>(value: unknown): T {
  return value as T
}

export type Predicate<T> = (value: T) => boolean

export * as IterM from './Iter'
export { Iter } from './Iter'

export * as ObjM from './Obj'

export * as ArrM from './Arr'
export { Arr } from './Arr'

export * as MutArrM from './MutArr'
export { MutArr } from './MutArr'

export * from './pipe'
