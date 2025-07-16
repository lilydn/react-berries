import AppRoutes from '@/routes/AppRoutes';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
