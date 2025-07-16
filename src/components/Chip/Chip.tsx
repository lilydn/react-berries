import { FC, KeyboardEvent } from 'react';

import clsx from 'clsx';

import styles from './Chip.module.scss';

type ChipProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

const Chip: FC<ChipProps> = ({ label, className, onClick }) => {
  const handleKey = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <span
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyPress={handleKey}
      className={clsx(
        styles.chip,
        { [styles.clickable]: !!onClick },
        className
      )}
    >
      {label}
    </span>
  );
};

Chip.displayName = 'Chip';
export { Chip };
