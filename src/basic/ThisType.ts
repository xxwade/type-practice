/**
在对象字面量方法中的 this 类型，将由以下决定：

如果这个方法显式指定了 this 参数，那么 this 具有该参数的类型。（下例子中 bar）
否则，如果方法由带 this 参数的签名进行上下文键入，那么 this 具有该参数的类型。（下例子中 foo）
否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为 T。
否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中不包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为该上下文类型。
否则，如果 --noImplicitThis 选项已经启用，this 具有该对象字面量的类型。
否则，this 的类型为 any。

 */

let bar = {
  x: 'hello',
  f(this: { message: string }) {
    this; // { message: string }
  }
};


// Compile with --noImplicitThis

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    }
  }
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
