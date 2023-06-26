import FooterMini from '@/components/Footer/FooterMini';
import HeaderMini from '@/components/Header/HeaderMini';
import Wrapper from '@/components/Wrapper';

export default function Layout({ children }: TChildren) {
  return (
    <Wrapper>
      <HeaderMini />
      <main className='mini'>{children}</main>
      <FooterMini />
    </Wrapper>
  );
}