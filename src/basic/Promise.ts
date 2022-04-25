const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = Promise.all([promise1, promise2, promise3] as const)


type PromiseAll = <T extends any[]>(...args: T) => Promise<[T[number] extends Promise<infer P> ? P: T[number]]>

 
// declare function PromiseAll<T extends unknown[]>(values: readonly [...T]):Promise<{[P in keyof T] : (T[P] extends Promise<infer R> ? R : T[P]) }>

type promiseAllReturnType<T extends unknown[]> = Promise<{[P in keyof T] : (T[P] extends Promise<infer R> ? R : T[P]) }>
// not right
// type promiseAllReturnType2<T extends any[]> = Promise<[T[number] extends Promise<infer P> ? P: T[number]]>
type A = promiseAllReturnType<[Promise<string>, Promise<number>, number]>

const promiseAll = function<T extends readonly unknown[]>(promises: T): promiseAllReturnType<T> {
  const results: unknown[] = [];
  let count = 0;

  return new Promise(function(resolve, reject) {
    for (let i=0; i < promises.length; i++) {
      const val = promises[i];

      Promise.resolve(val).then(function(res) {
        count++;
        results[i] = res;

        if (count === promises.length) {
          return resolve(results as any as promiseAllReturnType<T>);
        }
      }, function(err) {
        return reject(err);
      });
    }
  });
};

const b =  promiseAll([promise1, promise2, promise3] as const)
type B = typeof b
const example: B = Promise.resolve([1,42,'33'])


