
type Foo = {
  [key: string]: any;
  foo(): void;
}

type Foo1 = {
  [key: string]: any;
  foo: () => void;
}



type A11 = RemoveIndexSignature<Foo>  // expected { foo(): void }

export type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer U}` ? P : never]: T[P]
}