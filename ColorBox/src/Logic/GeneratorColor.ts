export const generateColor = (): string => {
  const RGB: number = 256 * 256 * 256;
  const result = "#" + Math.floor(Math.random() * RGB).toString(16);
  return result.padStart(0, 6);
};
