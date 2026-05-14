export const randomColorGenerator = () => {
  const RGB = 256 * 256 * 256;
  return (
    "#" +
    Math.floor(Math.random() * RGB)
      .toString(16)
      .padStart(0, "6")
  );
};

export const TimeFormat: {
  Sec: number;
  Minute: number;
  Hour: number;
  Day: number;
} = {
  Sec: 1000,
  Minute: 1000 * 60,
  Hour: 1000 * 60 * 60,
  Day: 1000 * 60 * 60 * 24,
};
