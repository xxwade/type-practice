type StartsWitha = StartsWith<'abc', 'ac'> // expected to be false
type StartsWithb = StartsWith<'abc', 'ab'> // expected to be true
type StartsWithc = StartsWith<'abc', 'abcd'> // expected to be false

export type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false



