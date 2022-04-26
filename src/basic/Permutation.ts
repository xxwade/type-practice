type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : (T extends U
    ? [T, ...Permutation<Exclude<U, T>>]
    : [])


/**
 * When conditional types act on a generic type, they become distributive when given a union type;   分布式条件类型
 * 
string extends T ? A : B  -> string extends T ? A : B

(string | number) extends T ? A : B  -> (string extends T ? A : B) | (number extends T ? A : B)

(string | number | boolean) extends T ? A : B -> (string extends T ? A : B) | (number extends T ? A : B) | (boolean extends T ? A : B)
 */

type P<T> = T extends never ? true : false;
// never相当于一个空的union，所以后面的condition不会执行，直接返回never本身， it may distribute over nothing.
type A1 = P<never> //never 
type A2 = P<any> //boolean 

type Q<T> = [T] extends [never] ? true : false;
type B1 = Q<never> //true
type B2 = Q<any> //false