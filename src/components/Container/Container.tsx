import styles from './Container.module.scss';

export default function Container({ children, className = '', as = 'div' }: TBoxProps) {
  const As = as;
  return <As className={`${styles.base} ${className}`}>{children}</As>;
}
