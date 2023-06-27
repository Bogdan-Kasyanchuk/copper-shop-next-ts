import clsx from 'clsx';

import styles from './Icon.module.scss';
import type { TIconProps } from './TIconProps';

export default function Icon({
  iconName,
  className,
  width = '24px',
  height = '24px',
  fill = 'currentColor',
  stroke = 'currentColor',
  ...rest
}: TIconProps) {
  return (
    <svg
      className={clsx(styles.base, className)}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      {...rest}
    >
      <use xlinkHref={`./sprite.svg#${iconName}`} />
    </svg>
  );
}
