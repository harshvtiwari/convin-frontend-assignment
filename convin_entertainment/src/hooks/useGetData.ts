import axios from 'axios';
import { useEffect, useState } from 'react';
import type { BucketsObjectType, UseGetDataReturnType } from 'utils/_interface';

const useGetData = (apiUrl: string): UseGetDataReturnType => {
  const [buckets, setBuckets] = useState<BucketsObjectType>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setBuckets(response.data);
        setError(null);
      } catch (err) {
        setError(err as Error);
      }
      setLoading(false);
    };
    void fetchData();
  }, [apiUrl]);

  return { buckets, loading, error };
};

export default useGetData;
