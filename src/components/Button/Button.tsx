'use client';

import clsx from 'clsx';

import styles from './Button.module.scss';
import type { TButtonProps } from './TButtonProps';

export default function Button({
  children,
  type = 'button',
  className,
  classNameInner,
  space = '24px',
  align = 'center',
  variant = 'solid-orange',
  color = 'white',
  disabled = false,
  onClick,
  leftIcon,
  rightIcon,
  ...rest
}: TButtonProps<'button'>) {
  return (
    <button
      type={type}
      className={clsx(
        styles.base,
        className,
        align !== 'center' && styles[align],
        variant !== 'solid-orange' && styles[variant],
        color !== 'white' && styles[color]
      )}
      disabled={disabled}
      style={{ gap: space }}
      onClick={onClick}
      {...rest}
    >
      {leftIcon}
      <div className={clsx(styles.inner, classNameInner)}>{children} </div>
      {rightIcon}
    </button>
  );
}
