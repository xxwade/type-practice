type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

type Space = ' ' | '\n' | '\t';
export type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S;
export type TrimRight<S extends string> = S extends `${infer R}${Space}` ? TrimRight<R> : S;


type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
export type Trim<T extends string> = TrimRight<TrimLeft<T>>

type Trim2<S extends string> = S extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> : S;
