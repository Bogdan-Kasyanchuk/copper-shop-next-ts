import Image from 'next/image';

import type { TLogoProps } from './TLogoProps';
import logoImg from '@/assets/icon-png/logo.png';

export default function Logo({ width, height, priority, className }: TLogoProps) {
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
