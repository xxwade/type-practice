type Properties<T extends { new (...args: any[]): any }> =
  keyof InstanceType<T>;

class Example {
  a: string;
  b: number;

  constructor() {
    this.a = "one";
    this.b = 1;
  }

  getA() {
    return this.a;
  }
}
type ModifierProperties = Properties<typeof Example>;

var a: ModifierProperties = "a";
