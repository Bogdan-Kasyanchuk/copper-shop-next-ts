import styles from './Section.module.scss';

export default function Section({ children, className = '', as = 'section' }: TBoxProps) {
  const As = as;
  return <As className={`${styles.base} ${className}`}>{children}</As>;
}
