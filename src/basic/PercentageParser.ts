type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = PercentageParser<PString1> // expected ['', '', '']
type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
type R5 = PercentageParser<PString5> // expected ["", "85", ""]

export type PercentageParser<T extends string, U extends any[] = ['', '', '']> = T extends `${infer F}${infer R}` ? 
  F extends '+' | '-' ? PercentageParser<R, [F, U[1], U[2]]> : F extends '%' ? PercentageParser<R, [U[0], U[1], F]> : PercentageParser<R, [U[0], `${U[1]}${F}`, U[2]]> : U



