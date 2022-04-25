export type First<T extends unknown[]> = T extends [infer First, ...unknown[]] ? First : never

export type First0<T extends any[]> = {[P in keyof T]: T[0]}[0]
type First1<T extends any[]> = T[0] 
type First2<T extends any[]> =  Extract<T[number], T[0]>


type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3




type arr3 = ['a', 'b', 'c']
type arr4 = [3, 2, 1]

export type Last<T extends unknown[]> = T extends [...unknown[], infer Last] ? Last : never

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

