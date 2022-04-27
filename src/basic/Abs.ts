
type Test2 = -100;
type Result2 = Abs<Test2>; // expected to be "100"

// your answers
type Abs<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? R : T
