import { Open_Sans } from 'next/font/google';
import type { ReactNode } from 'react';

import '@/app/styles.scss';

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Copper shop',
  description: 'Web site created using next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
