// TODO: the goal of this if is = From Format To Format
import { useContext } from "react";
import { UiContext } from "../context/UiContext";
import { formatOptions, type FormatType } from "../types/format";

function FormatSelector() {
  const { fromFormat, setFromFormat } = useContext(UiContext);
  return (
    <div>
      <label className="mb-2 block text-lg font-medium">From</label>

      <select
        value={fromFormat}
        className="h-12 w-full rounded border border-gray-300 bg-white px-3 outline-none"
        onChange={(e) => setFromFormat(e.target.value as FormatType)}
      >
        {formatOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormatSelector;
