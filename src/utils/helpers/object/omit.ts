import { getKeysArray } from "./getKeysArray";

export const omit = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  key: K
) =>
  getKeysArray(obj).reduce((accum, objKey) => {
    if (objKey === key) return accum;
    return {
      ...accum,
      [objKey]: obj[objKey]
    };
  }, {} as Omit<T, K>);
