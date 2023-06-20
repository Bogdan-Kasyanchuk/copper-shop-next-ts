import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }: TChildren) {
  return (
    <div className='l-wrapper'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
