'use client';

import clsx from 'clsx';

import styles from './Button.module.scss';
import type { TButtonProps } from './TButtonProps';

export default function Button({
  children,
  type = 'button',
  classNameBase,
  classNameInner,
  space = '24px',
  align = 'center',
  variant = 'solid-orange',
  color = 'white',
  onClick,
  leftIcon,
  rightIcon,
}: TButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        styles.base,
        classNameBase,
        align !== 'center' && styles[align],
        variant !== 'solid-orange' && styles[variant],
        color !== 'white' && styles[color]
      )}
      style={{ gap: space }}
      onClick={onClick}
    >
      {leftIcon}
      <div className={clsx(styles.inner, classNameInner)}>{children} </div>
      {rightIcon}
    </button>
  );
}
