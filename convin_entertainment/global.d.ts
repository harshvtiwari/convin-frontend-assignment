/// <reference types="react-scripts" />

export {};

declare global {
  type PartiallyOptionalType<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
  type PartiallyRequiredType<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
  type GenericIdType = string | number;
  type ArrayItemType<T> = T extends Array<infer U> ? U : T;
}
