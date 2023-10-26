import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSizeName(value: string) {
  switch (value) {
    case "XS":
      return "X-Small";
    case "S":
      return "Small";
    case "M":
      return "Medium";
    case "L":
      return "Large";
    case "XL":
      return "X-Large";
    case "one-size":
      return "One Size";
  }
}
