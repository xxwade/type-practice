type Chainable<T extends object = {}> = {
  option<K extends string | number | symbol, V>(key: K, value: V): Chainable<T & {[k in K]: V}>
  get: () => T,
}

type EmptyObject<T> = keyof T extends keyof {} ? true : false;

type Chainable1<T extends {} = {}> = {
  option<K extends (EmptyObject<T> extends true ? string : Omit<keyof T, K> extends true ? never : string), V>(key: K, value: V): Chainable1<T & { [k in K]: V }>
  get(): T
}

declare const config: Chainable


const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}


