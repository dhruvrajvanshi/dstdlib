import { Primitive } from './index'

export type Eq<T> = Primitive | { eq(a: T, b: T): boolean }
