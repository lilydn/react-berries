import { useEffect, useState } from 'react';

import { fetchAndAggregateBerriesData } from '@/features/BerriesPokedex/utils/fetchAndAggregateBerriesData';
import type {
  BerriesByFirmness,
  FirmnessCounts,
  FirmnessLevel,
} from '@/types/berries';

type UseBerriesPokedexDataReturn = {
  firmnessLevels: FirmnessLevel[];
  berriesByFirmness: BerriesByFirmness | null;
  firmnessCounts: FirmnessCounts | null;
  isLoading: boolean;
  error: Error | null;
};

const useBerriesPokedexData = (): UseBerriesPokedexDataReturn => {
  const [firmnessLevels, setFirmnessLevels] = useState<FirmnessLevel[]>([]);
  const [berriesByFirmness, setBerriesByFirmness] =
    useState<BerriesByFirmness | null>(null);
  const [firmnessCounts, setFirmnessCounts] = useState<FirmnessCounts | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const { firmnessLevels, berriesByFirmness, firmnessCounts } =
          await fetchAndAggregateBerriesData();

        setFirmnessLevels(firmnessLevels);
        setBerriesByFirmness(berriesByFirmness);
        setFirmnessCounts(firmnessCounts);
      } catch (e) {
        const error =
          e instanceof Error ? e : new Error('Unknown error occurred');
        console.error('Error loading berries data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    firmnessLevels,
    berriesByFirmness,
    firmnessCounts,
    isLoading,
    error,
  };
};

export { useBerriesPokedexData };
