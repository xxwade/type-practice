interface User {
  name?: string
  age?: number
  address?: string
}

type UserPartialName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }

type Combine<T extends object> = {[P in keyof T]: T[P]}
export type RequiredByKeys<T extends object, K extends keyof T> = Combine<{[P in K]-?: T[P]} & {[P in Exclude<keyof T, K>]: T[P]}>