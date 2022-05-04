interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

export type PartialByKeys<T extends {[k: string]: any}, K extends string> =  {[P in K]?: T[P]} & {[P in Exclude<keyof T, K>]: T[P]}