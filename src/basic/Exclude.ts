var obj = {
  a: 1,
  b: 2,
}

type objType = MyExclude<keyof typeof obj, 'a'>

export type MyExclude<T, U> = T extends U ? never : T