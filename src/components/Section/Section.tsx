import styles from './Section.module.scss';
import type { TSectionProps } from './TSectionProps';

export default function Section({ children, className }: TSectionProps) {
  return <div className={`${styles.base} ${className}`}>{children}</div>;
}
