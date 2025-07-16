import React, { forwardRef, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './TextField.module.scss';

type TextFieldProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      value,
      onChange,
      placeholder = '',
      type = 'text',
      name,
      id,
      className,
      disabled = false,
      prefix,
      suffix,
      ...rest
    },
    ref
  ) => (
    <div className={clsx(styles.wrapper, className)}>
      {prefix && <div className={styles.prefix}>{prefix}</div>}
      <input
        ref={ref}
        className={styles.input}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {suffix && <div className={styles.suffix}>{suffix}</div>}
    </div>
  )
);

TextField.displayName = 'TextField';
export { TextField };
