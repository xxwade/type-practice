// Omit<T, K>

type MyExclude<T, K> = T extends K ? never : T;
export type MyOmit<T, K extends keyof T> = {[P in MyExclude<keyof T, K>]: T[P]}


interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Omit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

type K1 = 'a' | 'b' | 'c'
type K2 = 'a'
type K3 = Exclude<K1, K2>
