import type IIconProps from './IIconProps';

export default function Icon({ className, iconName, width, height, fill, stroke }: IIconProps) {
  return (
    <svg
      className={`icon icon-${iconName} ${className}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`./sprite.svg#${iconName}`} />
    </svg>
  );
}

Icon.defaultProps = {
  className: '',
  width: '24px',
  height: '24px',
  fill: 'currentColor',
  stroke: 'currentColor',
};
