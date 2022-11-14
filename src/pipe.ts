class Pipe<T> {
  constructor(readonly value: T) {}

  _<U>(f: (value: T) => U): Pipe<U> {
    return new Pipe<U>(f(this.value))
  }
}
export function pipe<T>(value: T): Pipe<T> {
  return new Pipe(value)
}