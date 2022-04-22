export type MyPick<T, K extends keyof T> =  {[P in K]: T[P]}

// wrong
// will result in {a: string; b: nerver}
type MyPickNerver<T, K > =  {[P in keyof T]: K extends keyof T ? T[P] : never}



// test
interface Todo {
  title: string
  description: string
  completed: boolean
}

type Keys = keyof Todo

var a: Keys = 'title'


type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}