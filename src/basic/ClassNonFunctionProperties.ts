type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K;
}[keyof T];

type NonFunctionProperties<T> = Pick<T, NonFunctionKeys<T>>;

class C {
  k: string;
  constructor(data: { k: string }) {
    this.k = data.k;
  }

  isRed() {
    return this.k === "red";
  }
}

type OC = NonFunctionProperties<C>;
