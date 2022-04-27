const str = '123' as const

type StringToUnion1 = StringToUnion<typeof str>; // expected to be "1" | "2" | "3"

export type StringToUnion<T extends string, U extends any[] = []> = T extends `${infer F}${infer R}` ? StringToUnion<R, [F, ...U]> : U[number]