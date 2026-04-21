import { useCityName } from "../context/LocationFinder";

function SearchCity() {
  const cityDataOrError = useCityName();

  if (cityDataOrError instanceof Error) {
    console.error("Context error:", cityDataOrError.message);
    return (
      <div className="text-red-500 text-center p-4">
        Error loading city context: {cityDataOrError.message}. Please refresh.
      </div>
    );
  }

  // Now cityDataOrError narrowed to CityData
  const { setCity } = cityDataOrError;
  return (
    <div>
      <input
        type="text"
        placeholder="Search city"
        className="w-80 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 text-lg font-medium text-gray-700"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchCity;

