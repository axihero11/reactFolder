import React, { useEffect, useState } from "react";

export function HooksList(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPanding] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsPanding(true);
      try {
        const req = await fetch(url);
       if(!req.ok){
        throw new Error(req.ok);
       }
        const data = await req.json();
        setData(data);
        setIsPanding(false);
      } catch (err) {
        console.log(`hatolik ${err.message}`);
        setIsError(err.message)
        setIsPanding(false);

      }
    };
    fetchData();
  }, [url]);

  return { data, isPending,isError };
}