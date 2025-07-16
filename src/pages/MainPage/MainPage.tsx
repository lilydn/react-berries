import { PokedexCard } from '@/features/BerriesPokedex/containers';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.layout}>
      <PokedexCard />
    </div>
  );
};

export { MainPage };
