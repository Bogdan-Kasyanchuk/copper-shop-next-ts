import styles from './RightsReserved.module.scss';
import type { TRightsReservedProps } from './TRightsReservedProps';

export default function RightsReserved({ className = '' }: TRightsReservedProps) {
  return <p className={`${styles.base} ${className}`}>© 2023 “Copper Pro” Всі права захищені</p>;
}
