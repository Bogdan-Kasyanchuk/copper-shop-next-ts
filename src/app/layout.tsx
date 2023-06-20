import { openSans } from '@/app/fonts';
import '@/app/style.scss';

export const metadata = {
  title: 'Copper shop',
  description: 'Web site created using next app',
};

export default function RootLayout({ children }: TChildren) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
