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
    <svg className={className} width={width} height={height} fill={fill} stroke={stroke}>
      <use xlinkHref={`./sprite.svg#${iconName}`} />
    </svg>
  );
}
