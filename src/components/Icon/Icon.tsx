import type IIconProps from './IIconProps';

export default function Icon({
  className = '',
  iconName,
  width = '24px',
  height = '24px',
  fill = 'currentColor',
  stroke = 'currentColor',
}: IIconProps) {
  return (
    <svg className={className} width={width} height={height} fill={fill} stroke={stroke}>
      <use xlinkHref={`./sprite.svg#${iconName}`} />
    </svg>
  );
}
