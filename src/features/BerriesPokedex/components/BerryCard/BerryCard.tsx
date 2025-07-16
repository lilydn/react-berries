import clsx from 'clsx';

import { Chip } from '@/components';
import type { ProcessedBerry } from '@/types/berries';

import styles from './BerryCard.module.scss';

type BerryCardProps = {
  berry: ProcessedBerry;
  className?: string;
};

const BerryCard = ({ berry, className }: BerryCardProps) => (
  <div className={clsx(styles.card, className)}>
    <div className={styles.info}>
      <img src={berry.image} alt={berry.name} className={styles.icon} />
      <span className={styles.name}>{berry.name}</span>
    </div>
    <div className={styles.flavors}>
      {berry.flavors.map((flavor) => (
        <Chip key={flavor.url} label={flavor.name} />
      ))}
    </div>
  </div>
);

export { BerryCard };
