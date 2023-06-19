// import { Open_Sans } from 'next/font/google';
import type { ReactNode } from 'react';

// import '@/app/styles.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

// const openSans = Open_Sans({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
// });

// export const metadata = {
//   title: 'Copper shop',
//   description: 'Web site created using next app',
// };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // <html lang='en'>
    //   <body suppressHydrationWarning className={openSans.className}>
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
    //   </body>
    // </html>
  );
}
