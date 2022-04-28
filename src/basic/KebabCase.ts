type KbDemo = KebabCase<'FooBarBaz'> // FooBarBaz -> foo-bar-baz

export type KebabCase<T extends string> = T extends `${infer A}${infer B}`
	? B extends Uncapitalize<B>
		? `${Uncapitalize<A>}${KebabCase<B>}`
		: `${Uncapitalize<A>}-${KebabCase<B>}`
	: T;


  type KebabCase2<S extends string, isFirstChar = true> =
  S extends `${infer s}${infer right}`
  ? s extends Lowercase<s>
  ? `${s}${KebabCase2<right, false>}`
  : isFirstChar extends true
  ? `${Lowercase<s>}${KebabCase2<right, false>}`
  : `-${Lowercase<s>}${KebabCase2<right, false>}`
  : S
