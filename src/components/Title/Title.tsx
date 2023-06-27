import clsx from 'clsx';

import type { TTitleProps } from './TTitleProps';
import styles from './Title.module.scss';

export default function Title({
  children,
  align = 'left',
  className,
  as = 'h2',
  variant = 'h2',
  ...rest
}: TTitleProps) {
  const As = as as React.ElementType;
  return (
    <As
      className={clsx(styles.base, className, styles[variant])}
      style={{ textAlign: align }}
      {...rest}
    >
      {children}
    </As>
  );
}
