import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getData(url);
  }, []);

  const getData = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const results = await response.json();
      setData(results);
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else {
        setError("An error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
