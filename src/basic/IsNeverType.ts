// never相当于一个空的union，所以后面的condition不会执行，直接返回never本身， it may distribute over nothing.
// 所以加个 [], 以便正确判断
export type IsNeverType<T> = [T] extends [never] ? true : never;