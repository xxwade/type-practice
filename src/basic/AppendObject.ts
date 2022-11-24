type Test = { id: '1' }
type AppendToObject1 = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
const appendToObject1: AppendToObject1 = { id: '1', value: 4 }

export type AppendToObject<T, K extends string, V> = { [P in keyof T]: P extends K ? V : T[P] } & { [P in K]: V }



export type AppendToObject2<T, K extends string, V> = T & { [P in K]: V }
type ToObject<T extends object> = {[P in keyof T]: T[P]}

type AppendToObject22 = ToObject<AppendToObject2<Test, 'value', 4>> // expected to be { id: '1', value: 4 }

const appendToObject3: AppendToObject22 = { id: '1', value: 4 }

