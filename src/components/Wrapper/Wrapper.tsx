import clsx from 'clsx';

import styles from './Wrapper.module.scss';

export default function Wrapper({ children, className, as = 'div' }: TBoxProps) {
  const As = as;
  return <As className={clsx(styles.base, className)}>{children}</As>;
}
