export type Concat<T extends unknown[], K extends unknown[]> = [ ...T, ...K ];

type Result = Concat<[1], [2]> // expected to be [1, 2]
