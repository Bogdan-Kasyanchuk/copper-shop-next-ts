import { ImageProps } from 'next/image';

export default interface ILogoProps extends Pick<ImageProps, 'width' | 'height' | 'priority'> {
  className?: string;
}
