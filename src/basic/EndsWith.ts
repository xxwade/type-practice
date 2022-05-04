type EndsWitha = EndsWith<'abc', 'ac'> // expected to be false
type EndsWithb = EndsWith<'abc', 'bc'> // expected to be false

export type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false