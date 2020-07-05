import { createContext } from "react";

/**
 * Wrapper for React's default `createContext` factory which disables
 * requirement of providing all default values.
 * @param defaultVals
 */
export const createContextWithPartial = <T extends Record<string, unknown>>(
  defaultVals: Partial<T>
) => createContext<T>({ ...defaultVals } as T);
