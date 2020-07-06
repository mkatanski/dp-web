/** Return object keys as array */
export const getKeysArray = <T extends Record<string, unknown>>(obj: T) =>
  Object.keys(obj) as (keyof T)[];
