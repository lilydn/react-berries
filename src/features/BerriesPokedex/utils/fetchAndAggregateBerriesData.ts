import {
  categorizeBerriesWithCounts,
  processBerryData,
} from '@/features/BerriesPokedex/utils/berryDataTransformers';
import {
  fetchAllFirmness,
  fetchBerryDetail,
  fetchBerryList,
  fetchItemSprite,
} from '@/services/berries/berriesService';
import type { BerryAggregatedData } from '@/types/berries';

const fetchAndAggregateBerriesData = async (): Promise<BerryAggregatedData> => {
  try {
    const [berriesList, firmnessLevels] = await Promise.all([
      fetchBerryList(),
      fetchAllFirmness(),
    ]);

    const berryDetails = await Promise.all(
      berriesList.map((berry) => fetchBerryDetail(berry.name))
    );

    const berryImages = await Promise.all(
      berryDetails.map((detail) => fetchItemSprite(detail.item.url))
    );

    const processedBerries = processBerryData(berryDetails, berryImages);
    const aggregatedData = categorizeBerriesWithCounts(
      processedBerries,
      firmnessLevels
    );

    return aggregatedData;
  } catch (error) {
    console.error('Error in fetchingAndAggregateBerriesData:', error);
    throw error;
  }
};

export { fetchAndAggregateBerriesData };
