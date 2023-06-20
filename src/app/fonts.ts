import { Open_Sans, Playfair_Display } from 'next/font/google';

export const openSans = Open_Sans({
  style: ['italic', 'normal'],
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const playfairDisplay = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
});
