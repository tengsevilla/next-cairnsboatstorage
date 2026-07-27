import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Builds a dial-safe `tel:` URI. A tel: URI must not contain spaces, so
 * "+61 494 368 354" has to become "+61494368354" in the href. The number
 * shown on screen is unaffected.
 */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`
}
