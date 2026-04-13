import { useState, useEffect } from "react";
import { useColorName } from "../Hooks/useColorName";
import generateColor from "../Logic/GeneratorColor";

function Box(key: string) {
  const [color, setColor] = useState<string>("black");

  const { colorName, isLoading, error } = useColorName(color);

  if (isLoading)
    return (
      <p className="text-center place-content-center text-blue-500 ease-linear duration-300">
        Loading...
      </p>
    );
  if (error) return <p className="font-bold text-red-500 border-2">{error}</p>;

  return (
    <div
      onClick={() => setColor(generateColor)}
      className={`border-2 px-16 py-16 text-white cursor-pointer`}
      style={{
        backgroundColor: color,
      }}
      key={key}
    >
      {colorName}
    </div>
  );
}

export default Box;
