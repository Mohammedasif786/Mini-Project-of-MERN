import { useContext } from "react";
import FormatSelector from "./FormatSelector";
import NumberInput from "./NumberInput";
import Result from "./Result";
import { UiContext } from "../context/UiContext";
import converter from "number-to-words";

const ConverterCard = () => {
  const { inputValue } = useContext(UiContext);
  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg border border-gray-300 bg-[#dfdccb] p-4 sm:p-6 shadow-sm">
      {/* Heading */}
      <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
        Number Format Converter
      </h1>

      {/* Format Selector */}
      <div className="mb-4">
        <FormatSelector />
      </div>

      {/* Number Input + Button */}
      <div className="mb-4">
        <NumberInput />
      </div>
      {/* Results */}
      <div>
        <Result label="Significant Number" value={inputValue} hasSelect />

        <Result label="Rounded Number" value={inputValue} hasSelect />

        {/* Fraction Row */}
        <div>
          <label className="mb-2 block text-lg font-medium">Fraction</label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              value={inputValue}
              readOnly
              className="h-12 w-full rounded border border-gray-300 px-3 outline-none"
            />

            <div className="flex items-center gap-3">
              <input
                type="text"
                value="0"
                readOnly
                className="h-12 w-24 rounded border border-gray-300 px-3 outline-none"
              />

              <span className="text-2xl">/</span>

              <input
                type="text"
                value="0"
                readOnly
                className="h-12 w-24 rounded border border-gray-300 px-3 outline-none"
              />
            </div>
          </div>
        </div>

        <Result
          label={`Decimal Format(Base-10) of Integer ${inputValue}`}
          value={inputValue}
        />

        <Result
          label={`Octal Format(Base-8) of Integer ${inputValue}`}
          value={inputValue}
        />

        <Result
          label={`Hexadecimal Format(Base-16) of Integer ${inputValue}`}
          value={inputValue}
        />

        <Result
          label={`In Words of Integer ${inputValue}`}
          value={inputValue ? converter.toWords(Number(inputValue)) : ""}
        />
      </div>
    </div>
  );
};

export default ConverterCard;
