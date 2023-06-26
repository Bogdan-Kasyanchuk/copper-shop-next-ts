import clsx from 'clsx';

import type { TTitleProps } from './TTitleProps';
import styles from './Title.module.scss';

export default function Title({ children, align = 'left', className, as = 'h2' }: TTitleProps) {
  const As = as as React.ElementType;
  return (
    <As
      className={clsx(styles.base, className, as !== 'h2' && styles[as])}
      style={{ textAlign: align }}
    >
      {children}
    </As>
  );
}
