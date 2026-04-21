import { useCityName } from "../context/LocationFinder";

function SearchCity() {
  const cityData = useCityName();

  if (cityData instanceof Error) {
    console.error("Context error:", cityData.message);
    return (
      <div className="text-red-500 text-center">
        Error loading city context. Please refresh.
      </div>
    );
  }

  const { setCity } = cityData;

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

