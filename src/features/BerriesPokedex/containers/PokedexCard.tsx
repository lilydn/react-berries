import { SearchField } from '@/components';
import {
  BerriesCollection,
  FirmnessSlider,
  PokedexTitle,
} from '@/features/BerriesPokedex/components';
import {
  useBerriesPokedexData,
  useBerrySearch,
  useFirmnessFilter,
} from '@/features/BerriesPokedex/hooks';

import styles from './PokedexCard.module.scss';

const PokedexCard = () => {
  const {
    firmnessLevels,
    berriesByFirmness,
    firmnessCounts,
    isLoading,
    error,
  } = useBerriesPokedexData();

  const {
    selectedFirmness,
    setSelectedFirmness,
    filteredByFirmnessBerries,
    isReady,
  } = useFirmnessFilter(firmnessLevels, berriesByFirmness);

  const {
    searchQuery,
    setSearchQuery,
    filteredAfterSearchBerries: filtered,
    isSearching,
  } = useBerrySearch(filteredByFirmnessBerries);

  if (isLoading || !isReady) return <p>Loading Pokédex…</p>;
  if (error)
    return <p>Error loading Pokédex: {(error.message || error).toString()}</p>;

  return (
    <div className={styles.pokedexCard}>
      <PokedexTitle />

      <div className={styles.body}>
        <div className={styles.firmnessSlider}>
          <FirmnessSlider
            levels={firmnessLevels}
            counts={firmnessCounts}
            selected={selectedFirmness}
            onSelect={setSelectedFirmness}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.searchWrapper}>
            <SearchField
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by name.."
            />
          </div>

          <div className={styles.berriesCollection}>
            <BerriesCollection
              berries={filtered}
              isLoading={isSearching}
              emptyMessage={
                searchQuery
                  ? `No berries found matching "${searchQuery}"`
                  : 'No berries available'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PokedexCard };
