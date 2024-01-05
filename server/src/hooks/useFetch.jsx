import React, { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setDate] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        const data = await req.json();
        setDate(data);
        setIsPending(false);
      } catch (error) {
        console.log("hatolik bor");
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending };
}
