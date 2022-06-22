const obj1 ={
  a: 100,
  b:200,
  c:300
}

const obj2={
  a:1,
  d:100,
  f:9
}

export type Diff<A, B> = {
  [K in Exclude<keyof A,keyof B>]: A[K]
} & {
  [K in Exclude<keyof B,keyof A>]: B[K]
}

type Diff12 = Diff<typeof obj1, typeof obj2>