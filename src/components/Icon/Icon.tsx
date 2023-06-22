import styles from './Icon.module.scss';
import type { TIconProps } from './TIconProps';

export default function Icon({
  className = '',
  iconName,
  width = '24px',
  height = '24px',
  fill = 'currentColor',
  stroke = 'currentColor',
}: TIconProps) {
  return (
    <svg
      className={`${styles.base} ${className}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`./sprite.svg#${iconName}`} />
    </svg>
  );
}
