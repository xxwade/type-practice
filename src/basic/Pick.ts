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


type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }

export type PickByType<T extends {[k: string]: any}, U> = {[P in keyof T as T[P] extends U ? P : never]: T[P]}