import { useMemo, useState } from 'react';

import { useDebouncedSearch } from '@/hooks/useDebouncedSearch';
import type { ProcessedBerry } from '@/types/berries';

type UseBerrySearchReturn = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredAfterSearchBerries: ProcessedBerry[];
  isSearching: boolean;
};

const useBerrySearch = (berries: ProcessedBerry[]): UseBerrySearchReturn => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebouncedSearch(searchQuery);

  const filteredAfterSearchBerries = useMemo(() => {
    if (!debouncedQuery.trim()) return berries;

    return berries.filter(
      (berry) =>
        berry.name.toLowerCase().includes(debouncedQuery) ||
        berry.flavors.some((flavor) =>
          flavor.name.toLowerCase().includes(debouncedQuery)
        )
    );
  }, [berries, debouncedQuery]);

  const isSearching = useMemo(() => {
    return searchQuery !== debouncedQuery;
  }, [searchQuery, debouncedQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredAfterSearchBerries,
    isSearching,
  };
};

export { useBerrySearch };
