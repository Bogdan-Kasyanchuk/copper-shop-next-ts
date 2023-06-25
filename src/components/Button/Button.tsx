import styles from './Button.module.scss';
import type { TButtonProps } from './TButtonProps';
import Icon from '@/components/Icon';

export default function Button({
  children,
  classNameBase = '',
  classNameInner = '',
  type = 'button',
  variant = 'solid-orange',
  color = 'white',
  onClick,
  leftIcon,
  rightIcon,
}: TButtonProps) {
  return (
    <button className={`${styles.base} ${classNameBase}`} type={type} onClick={onClick}>
      {leftIcon}
      <span className={`${styles.inner} ${classNameInner}`}> {children}</span>
      {rightIcon}
    </button>
  );
}
