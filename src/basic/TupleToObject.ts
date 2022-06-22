export type TupleToObject<T extends readonly any[]> = {[P in T[number]]: P}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type TupleType = keyof typeof tuple   // '0' | '1' | '2' | '3'

type T1 = typeof tuple[number]
var a: T1 = 'model 3'


type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
