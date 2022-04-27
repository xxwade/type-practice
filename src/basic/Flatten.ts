type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
type flatten2 = Flatten<[]> // []


export type Flatten<T extends unknown[]> = T extends [infer F, ...infer Rest] ? (F extends unknown[] ? [...Flatten<F>, ...Flatten<Rest>] : [F, ...Flatten<Rest>]) : T