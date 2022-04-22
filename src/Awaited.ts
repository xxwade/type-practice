// K maybe Promise
export type MyAwaited<T> = T extends Promise<infer K> ? MyAwaited<K> : T;

type MyAwaited1<T> = T extends Promise<infer K> ? K : T;


const promise1 = new Promise<string>((resolve, reject) => {
  resolve('hello');
})

type Promise1 = MyAwaited<typeof promise1>