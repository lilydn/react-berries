import { TEXT } from '@/features/BerriesPokedex/components/constants';

import styles from './PokedexTitle.module.scss';

const { TITLES } = TEXT;

const PokedexTitle = () => (
  <div className={styles.section}>
    <p className={styles.title}>{TITLES.title}</p>
    <p className={styles.subtitle}>{TITLES.subtitle}</p>
  </div>
);

export { PokedexTitle };
