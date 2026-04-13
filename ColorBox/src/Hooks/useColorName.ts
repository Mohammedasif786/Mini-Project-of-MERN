import { useEffect, useState } from "react";

export function useColorName(color: string) {
  const [colorName, setColorName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const colors: string = color.replace("#", "");
    const fetchColorName = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://www.thecolorapi.com/id?format=json&hex=${colors}`,
        );
        const data = await res.json();
        if(!res.ok) {
          throw new Error(data.error.message || "Error fetching color name");
        }
        setColorName(data.name.value);
      } catch (error) {
        setError("Error fetching color name");
      } finally {
        setIsLoading(false);
      }
    };
    fetchColorName();
  }, [color]);
  return { colorName, isLoading, error };
}
