function test(a: string, b: number){}
type fn = typeof test;
type TestParam  = Parameters<typeof test>

export type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

type TestParam2  = MyParameters<typeof test>
