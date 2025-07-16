import clsx from 'clsx';

import type { FirmnessCounts, FirmnessLevel } from '@/types/berries';
import { removeHyphens } from '@/utils';

import styles from './FirmnessSlider.module.scss';

type FirmnessSliderProps = {
  levels: FirmnessLevel[];
  counts: FirmnessCounts | null;
  selected: FirmnessLevel | null;
  onSelect: (firmness: FirmnessLevel) => void;
};

const FirmnessSlider = ({
  levels,
  counts,
  selected,
  onSelect,
}: FirmnessSliderProps) => {
  const idx = selected
    ? levels.findIndex((item) => item.url === selected.url)
    : -1;
  const pct =
    levels.length > 1 && idx !== -1 ? (idx / (levels.length - 1)) * 100 : 0;

  const firmnessClassName = selected?.name ? styles[selected.name] : '';

  return (
    <div className={clsx(styles.sliderWrapper, firmnessClassName)}>
      <div className={styles.track}>
        <div className={styles.handleMoveArea}>
          {/* doesn't show handle if nothing is selected */}

          {selected && (
            <div className={styles.handle} style={{ top: `calc(${pct}%)` }} />
          )}
        </div>
      </div>

      <div className={styles.items}>
        {levels.map((firmnessItem) => {
          const isActive = selected && firmnessItem.url === selected.url;
          return (
            <div
              key={firmnessItem.url ?? firmnessItem.name}
              className={clsx(styles.item, { [styles.active]: isActive })}
              onClick={() => onSelect(firmnessItem)}
            >
              <p className={styles.label}>{removeHyphens(firmnessItem.name)}</p>
              <p className={styles.count}>{counts?.[firmnessItem.name] ?? 0}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { FirmnessSlider };
