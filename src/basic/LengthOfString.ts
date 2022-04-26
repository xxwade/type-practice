export type LengthOfString<S extends string, L extends any[] = []> = S extends `${infer F}${infer R}` 
  ? LengthOfString<R, [F, ...L]>
  : L['length']

type Ls1 = LengthOfString<never> //never
type Ls2 = LengthOfString<'2882'> //never

