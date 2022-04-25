export type Replace<S extends string, T extends string, R extends string> = 
  S extends `${infer First}${T}${infer Last}` ? Replace<`${First}${R}${Last}`, T, R> : S;

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

type replaced2 = Replace<'types fun are fun!', 'fun', 'awesome'> // expected to be 'types awesome are awesome!'

type replaced3 = Replace<'t y p e s', ' ', ''> // expected to be 'types'
