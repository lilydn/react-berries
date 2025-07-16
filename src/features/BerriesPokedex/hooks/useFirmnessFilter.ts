import { useLayoutEffect, useMemo, useState } from 'react';

import type {
  BerriesByFirmness,
  FirmnessLevel,
  ProcessedBerry,
} from '@/types/berries';

type UseFirmnessFilterReturn = {
  selectedFirmness: FirmnessLevel | null;
  setSelectedFirmness: (key: FirmnessLevel | null) => void;
  filteredByFirmnessBerries: ProcessedBerry[];
  isReady: boolean;
};

const useFirmnessFilter = (
  firmnessLevels: FirmnessLevel[],
  berriesByFirmness: BerriesByFirmness | null
): UseFirmnessFilterReturn => {
  const [selectedFirmness, setSelectedFirmness] =
    useState<FirmnessLevel | null>(null);

  useLayoutEffect(() => {
    if (firmnessLevels.length > 0 && selectedFirmness === null) {
      setSelectedFirmness(firmnessLevels[0]);
    }
  }, [firmnessLevels, selectedFirmness]);

  const filteredByFirmnessBerries = useMemo(() => {
    if (!berriesByFirmness || !selectedFirmness) return [];
    return berriesByFirmness[selectedFirmness.name] || [];
  }, [berriesByFirmness, selectedFirmness]);

  const isReady = useMemo(() => {
    return (
      firmnessLevels.length > 0 &&
      berriesByFirmness !== null &&
      selectedFirmness !== null
    );
  }, [firmnessLevels, berriesByFirmness, selectedFirmness]);

  return {
    selectedFirmness,
    setSelectedFirmness,
    filteredByFirmnessBerries,
    isReady,
  };
};

export { useFirmnessFilter };
