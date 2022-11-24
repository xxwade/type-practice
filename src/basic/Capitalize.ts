type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'

// your answers
export type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S;
