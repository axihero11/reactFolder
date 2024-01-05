import React, { useEffect, useState } from "react";

export function HooksList(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(`it has Error ${error}`);
      }
    };
    fetchData();
  }, [url]);
  return{data,loading}
}


 
