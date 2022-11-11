interface N {
  name: string;
  age: number;
  height: number
}

type NSplit = SplitObj<N>

export type SplitObj<Obj> = {
  [Key in keyof Obj]: {
      [Key2 in Key]: Obj[Key2]
  }
}[keyof Obj];


type Template = {
  aaa: string;
  bbb: {
    cc: {
      dd: string
    }
  },
  eee: {
    ff:string;
    gg: number
  }
}

type TemplateStr = DFS<Template>

export type DFS<Obj> = {
  [Key in keyof Obj]: 
    Key extends string
      ? Obj[Key] extends Record<string, any>
        ? Key | `${Key}.${DFS<Obj[Key]>}`
        : Key
      : never
}[keyof Obj];