import Image from 'next/image';

import type ILogoProps from './ILogoProps';
import logoImg from '@/assets/icon-png/logo.png';

export default function Logo({ width, height, priority, className }: ILogoProps) {
  return (
    <Image
      src={logoImg}
      alt='Logo'
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
