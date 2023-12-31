import clsx from 'clsx';

import styles from './Section.module.scss';

export default function Section({ children, className, as = 'section', id = '' }: TBoxProps) {
  const As = as;
  return (
    <As className={clsx(styles.base, className)} id={id}>
      {children}
    </As>
  );
}
