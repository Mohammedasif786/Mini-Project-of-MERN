// Result component
// Show output
// Show formatted text
// Maybe copy button later

import { useContext, useEffect, useState, type SetStateAction } from "react";
import { convertFromDecimal } from "../utils/converters";
import { UiContext } from "../context/UiContext";
type ResultProps = {
  label: string;
  value: string;
  hasSelect?: boolean;
};

const Result = ({ label, value, hasSelect }: ResultProps) => {
  const { fromFormat } = useContext(UiContext);
  const [hold, setHold] = useState<string>("");
  const [select, setSelected] = useState("2");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelected(event.target.value);
  };
  //FIXME: identify this function idea is 🟢 or ❌
  // const handleConvert = () => {
  useEffect(() => {
    switch (fromFormat) {
      case "binary":
        setHold(convertFromDecimal(Number(value), fromFormat));
        break;

      case "octal":
        setHold(convertFromDecimal(Number(value), fromFormat));
        break;

      case "hexadecimal":
        setHold(convertFromDecimal(Number(value), fromFormat));
        break;

      case "decimal":
        setHold(value);
        break;

      default:
        break;
    }
  }, [value, fromFormat]);
  // }

  return (
    <div>
      <label className="mb-2 block text-lg font-medium">{label}</label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={hold.padEnd(hold.length + Number(select) - 1, select)}
          readOnly
          className="h-12 flex-1 rounded border border-gray-300 bg-white px-3 outline-none"
        />

        {hasSelect && (
          <select
            className="h-12 w-full rounded border border-gray-300 bg-white px-3 outline-none sm:w-20"
            onChange={handleChange}
            value={select}
          >
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default Result;
