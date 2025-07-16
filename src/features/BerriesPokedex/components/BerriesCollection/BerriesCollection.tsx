import clsx from 'clsx';

import { BerryCard } from '@/features/BerriesPokedex/components';
import type { ProcessedBerry } from '@/types/berries';

import styles from './BerriesCollection.module.scss';

type BerriesCollectionProps = {
  berries: ProcessedBerry[];
  className?: string;
  isLoading?: boolean;
  emptyMessage?: string;
};

const BerriesCollection = ({
  berries,
  className,
  isLoading = false,
  emptyMessage = 'No berries available',
}: BerriesCollectionProps) => {
  if (isLoading) {
    return (
      <div className={clsx(styles.container, styles.loading, className)}>
        <div className={styles.loadingIndicator}>
          <div className={styles.spinner} />
          <p className={styles.loadingText}>Searching berries...</p>
        </div>
      </div>
    );
  }

  if (berries.length === 0) {
    return (
      <div className={clsx(styles.container, styles.empty, className)}>
        <div className={styles.emptyState}>
          <p className={styles.emptyMessage}>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.container, className)}>
      {berries.map((berry) => (
        <BerryCard key={berry.id} berry={berry} />
      ))}
    </div>
  );
};

export { BerriesCollection };
