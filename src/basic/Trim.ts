type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

type Space = ' ' | '\n' | '\t';
export type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S;
export type TrimRight<S extends string> = S extends `${infer R}${Space}` ? TrimRight<R> : S;


type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
export type Trim<T extends string> = TrimRight<TrimLeft<T>>

type Trim2<S extends string> = S extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> : S;

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

type DropChar<T extends string, X, U extends string = ''> = T extends `${infer F}${infer R}` ? F extends X ? DropChar<R, X, U> : DropChar<R, X, `${U}${F}`> : U

export type DropChar2<S extends string, C extends string> = 
  S extends `${infer F}${infer Rest}` 
    ? F extends C 
      ? `${DropChar2<Rest, C>}`
      : `${F}${DropChar2<Rest, C>}`
    : S;