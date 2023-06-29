'use client';

import clsx from 'clsx';

import styles from './Button.module.scss';
import type { TButtonProps } from './TButtonProps';

export default function ButtonLink({
  children,
  className,
  classNameInner,
  space = '24px',
  align = 'center',
  variant = 'solid-orange',
  color = 'white',
  leftIcon,
  rightIcon,
  ...rest
}: TButtonProps<'div'>) {
  return (
    <div
      className={clsx(
        styles.base,
        className,
        align !== 'center' && styles[align],
        variant !== 'solid-orange' && styles[variant],
        color !== 'white' && styles[color]
      )}
      style={{ gap: space }}
      {...rest}
    >
      {leftIcon}
      <div className={clsx(styles.inner, classNameInner)}>{children} </div>
      {rightIcon}
    </div>
  );
}
