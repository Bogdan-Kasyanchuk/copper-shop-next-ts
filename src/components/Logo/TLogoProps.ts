import { ImageProps } from 'next/image';

export type TLogoProps = Pick<ImageProps, 'width' | 'height' | 'priority'> & {
  className?: string;
};
