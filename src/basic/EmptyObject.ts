export type EmptyObject<T> = keyof T extends keyof {} ? true : false;
