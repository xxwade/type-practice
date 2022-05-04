type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54

type MinusOne<T extends number,Result extends number[] = []> = T extends Result['length'] 
? Result extends [infer _F,...infer R] 
  ? R['length'] 
  : 0 
: MinusOne<T, [...Result, T]>
