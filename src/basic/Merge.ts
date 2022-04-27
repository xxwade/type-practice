type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}

type MergeDemo = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}

const demo: MergeDemo = {
  name: 'xx',
  age: 19,
  sex: 'male'
}

// your answers
type Merge<F, S> = { [K in keyof (F & S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never }
