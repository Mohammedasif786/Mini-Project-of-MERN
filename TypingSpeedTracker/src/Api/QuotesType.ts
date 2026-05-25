import { useEffect, useState } from "react";
import { useUserInput } from "../Context/TimerData";

const QUOTES_URL = "https://southparkquotes.onrender.com/v1/quotes/3";

function useQuotesGenerator() {
  const [loading, setLoading] = useState<boolean>(true);
  const { level, quote, setQuote, setType } = useUserInput();

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);

      try {
        const response = await fetch(QUOTES_URL);
        const data = await response.json();
        const selectedQuote = data[level] ?? data[0];
        const nextQuote = selectedQuote?.quote ?? "";

        setQuote(nextQuote);
        setType("");
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quotes:", error);
        setQuote("");
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [level, setQuote, setType]);

  return { quotes: quote, loading };
}

export default useQuotesGenerator;
