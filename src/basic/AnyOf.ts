type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.

type AnyOf<T extends readonly any[]> = T[number] extends (false | '' | 0 | [] | Record<string, never> ) ? false : true
  