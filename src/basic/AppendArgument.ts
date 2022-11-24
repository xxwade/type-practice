type Fn = (a: number, b: string) => number

type a = Parameters<Fn>

type Result = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number

export type AppendArgument<F extends (...args: any[]) => any, T> = F extends (...args: infer U) => infer R ? (...args: [...U, T]) => R : never

export type AppendArgument2<F extends (...args: any[]) => any, T> = (...args: [...Parameters<F>, T]) => ReturnType<F>
type Result2 = AppendArgument2<Fn, boolean> 