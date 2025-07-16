import type {
  BerriesByFirmness,
  BerryAggregatedData,
  BerryDetail,
  FirmnessCounts,
  FirmnessLevel,
  ProcessedBerry,
} from '@/types/berries';
import { FIRMNESS_ORDER_DESC } from '@/types/berries/constants';

const sortFirmnessLevels = (levels: FirmnessLevel[]): FirmnessLevel[] => {
  return [...levels].sort(
    (a, b) =>
      FIRMNESS_ORDER_DESC.indexOf(
        a.name as (typeof FIRMNESS_ORDER_DESC)[number]
      ) -
      FIRMNESS_ORDER_DESC.indexOf(
        b.name as (typeof FIRMNESS_ORDER_DESC)[number]
      )
  );
};

const shapeBerryData = (
  detailedBerry: BerryDetail,
  image: string
): ProcessedBerry => ({
  id: detailedBerry.id,
  name: detailedBerry.name,
  firmness: detailedBerry.firmness,
  flavors: detailedBerry.flavors
    .filter((flavor) => flavor.potency > 0)
    .map((flavor) => flavor.flavor),
  image,
});

export const processBerryData = (
  berryDetails: BerryDetail[],
  berryImages: string[]
): ProcessedBerry[] => {
  return berryDetails.map((detail, index) =>
    shapeBerryData(detail, berryImages[index])
  );
};

const createCategorizedBerries = (
  firmnessLevels: FirmnessLevel[]
): BerriesByFirmness =>
  firmnessLevels.reduce((acc, { name: firmnessName }) => {
    acc[firmnessName] = [];
    return acc;
  }, {} as BerriesByFirmness);

const createCategoryCounts = (
  firmnessLevels: FirmnessLevel[]
): FirmnessCounts =>
  firmnessLevels.reduce((acc, { name: firmnessName }) => {
    acc[firmnessName] = 0;
    return acc;
  }, {} as FirmnessCounts);

export const categorizeBerriesWithCounts = (
  berries: ProcessedBerry[],
  firmnessLevels: FirmnessLevel[]
): BerryAggregatedData => {
  const sortedLevels = sortFirmnessLevels(firmnessLevels);
  const categorizedBerries = createCategorizedBerries(sortedLevels);
  const counts = createCategoryCounts(sortedLevels);

  berries.forEach((berry) => {
    const firmnessName = berry.firmness.name;
    if (categorizedBerries[firmnessName]) {
      categorizedBerries[firmnessName].push(berry);
      counts[firmnessName] = (counts[firmnessName] || 0) + 1;
    }
  });

  return {
    firmnessLevels: sortedLevels,
    berriesByFirmness: categorizedBerries,
    firmnessCounts: counts,
  };
};
