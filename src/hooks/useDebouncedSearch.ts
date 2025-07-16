import { useEffect, useState } from 'react';

const useDebouncedSearch = (query: string, delay: number = 300): string => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(
      () => setDebouncedQuery(query.toLowerCase().trim()),
      delay
    );
    return () => clearTimeout(timeout);
  }, [query, delay]);

  return debouncedQuery;
};

export { useDebouncedSearch };
