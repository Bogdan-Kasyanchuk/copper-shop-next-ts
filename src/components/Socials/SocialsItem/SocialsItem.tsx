import clsx from 'clsx';

import styles from './SocialsItem.module.scss';
import type { TSocialsItemProps } from './TSocialsItemProps';

export default function SocialsItem({ href = '#', className, children }: TSocialsItemProps) {
  return (
    <li className={clsx(styles.base, className)}>
      <a href={href} className={styles.link} target='_blank' rel='noreferrer noopener'>
        {children}
      </a>
    </li>
  );
}
