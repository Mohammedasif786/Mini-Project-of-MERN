import type { FormatType } from "../types/format";

export function validateNumber(value: string, format: FormatType): boolean {
  // Validation logic based on format
  switch (format) {
    case "binary":
      return /^[01]+$/.test(value);
    case "octal":
      return /^[0-7]+$/.test(value);
    case "decimal":
      return /^[0-9]+$/.test(value);
    case "hexadecimal":
      return /^[0-9a-fA-F]+$/.test(value);
    default:
      return false;
  }
}
