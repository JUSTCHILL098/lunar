import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple cookie mock for the environment since we can't use js-cookie
export const CookieMock = {
  get: (key: string) => localStorage.getItem(key),
  set: (key: string, value: string, options?: any) => localStorage.setItem(key, value),
};
