export type MyReadonly<T> = {readonly [P in keyof T]: T[P]};

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
  completed: false
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // Error: cannot reassign a readonly property

export type MyReadonly2<T, K extends keyof T> = {readonly [P in K]: T[P]} & {
  [P in Exclude<keyof T, K>]: T[P]
};


const todo2: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo2.title = "Hello" // Error: cannot reassign a readonly property
todo2.description = "barFoo" // Error: cannot reassign a readonly property
todo2.completed = true // OK


type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

export type DeepReadonly<T> = {readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]}
type Todo3 = DeepReadonly<X> // should be same as `Expected`

var todo3: Todo3 = {
  x: { 
    a: 1,
    b: 'hi'
  },
  y: 'hey'
}

todo3.x.a =1
