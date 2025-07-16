import { FC, useRef } from 'react';

import clsx from 'clsx';

import { TextField } from '@/components';

import styles from './SearchField.module.scss';

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  className?: string;
};

const SearchField: FC<SearchFieldProps> = ({
  value,
  onChange,
  placeholder = 'Search…',
  disabled = false,
  clearable = true,
  onClear = () => {},
  className,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange('');
    onClear?.();
    inputRef.current?.focus();
  };

  return (
    <TextField
      ref={inputRef}
      className={clsx(styles.wrapper, className)}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      suffix={
        <div className={styles.icons}>
          {value && clearable && (
            <button
              type="button"
              onClick={handleClear}
              className={styles.clearBtn}
              aria-label="Clear"
            >
              x
            </button>
          )}
        </div>
      }
      {...rest}
    />
  );
};

SearchField.displayName = 'SearchField';
export { SearchField };
