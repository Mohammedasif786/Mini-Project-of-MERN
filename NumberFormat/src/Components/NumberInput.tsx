import { useContext, useRef } from "react";
import { UiContext } from "../context/UiContext";

const NumberInput = () => {
  const Inputref = useRef<HTMLInputElement>(null);
  const { fromFormat, setInputValue } = useContext(UiContext);

  const handleSumbit = () => {
    if (Inputref.current) {
      setInputValue(Inputref.current.value);
    }
  };
  return (
    <div>
      <label className="mb-2 block text-lg font-medium">
        Enter {fromFormat} Number
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          ref={Inputref}
          placeholder="101010"
          className="h-12 flex-1 rounded border border-gray-300 px-3 outline-none"
          // onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          className="h-12 rounded bg-green-600 px-6 text-white transition hover:bg-green-700"
          onClick={handleSumbit}
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
