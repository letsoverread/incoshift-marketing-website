import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CONTACT_FORM_VI = "https://tally.so/r/mY2yB0";
export const CONTACT_FORM_EN = "https://tally.so/r/3xGB79";
