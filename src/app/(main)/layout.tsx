import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';

export default function Layout({ children }: TChildren) {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
}
