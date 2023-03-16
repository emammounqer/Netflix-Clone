import { useEffect } from "react";
import { useState } from "react";

function useApiFetch(serviceFunc, { defValue = null, dependanceArray = [] }) {
  const [data, setData] = useState(defValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const respData = await serviceFunc();
        console.log(respData);
        setData(respData);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependanceArray]);

  return { data, loading, error };
}

export default useApiFetch;
