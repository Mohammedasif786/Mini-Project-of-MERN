export type FormatType = "binary" | "decimal" | "octal" | "hexadecimal";

export const formatOptions: Array<{ value: FormatType; label: string }> = [
  { value: "binary", label: "Binary" },
  { value: "decimal", label: "Decimal" },
  { value: "octal", label: "Octal" },
  { value: "hexadecimal", label: "Hexadecimal" },
];
