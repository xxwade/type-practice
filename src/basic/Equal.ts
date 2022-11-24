export type Equal<X, Y> = (<T>() => (T extends X ? 1 : 2)) extends (<T>() => (T extends Y ? 1 : 2)) ? true : false

type Expect<T extends boolean> = T

type Equal1 = Equal<{a:1}, {a:1}>

let a: Equal1 = true


type Equal2<X, Y> = X extends Y ? (Y extends X ? true : false) : false
type Equal22 = Equal<{a:2}, {a:1}>
