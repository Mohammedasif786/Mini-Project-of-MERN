import type { FormatType } from "../types/format";

export function convertToDecimal(
  value: string,
  fromFormat: FormatType,
): number {
  switch (fromFormat) {
    case "binary":
      return parseInt(value, 2);
    case "octal":
      return parseInt(value, 8);
    case "decimal":
      return parseInt(value, 10);
    case "hexadecimal":
      return parseInt(value, 16);
    default:
      throw new Error("Unsupported format");
  }
}

export function convertFromDecimal(
  value: number,
  toFormat: FormatType,
): string {
  switch (toFormat) {
    case "binary":
      return value.toString(2);
    case "octal":
      return value.toString(8);
    case "decimal":
      return value.toString(10);
    case "hexadecimal":
      return value.toString(16).toUpperCase();
    default:
      throw new Error("Unsupported format");
  }
}
