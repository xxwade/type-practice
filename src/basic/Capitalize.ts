type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'

// type MyCapitalize<T extends string> = 


// your answers
export type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S;
