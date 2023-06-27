import FooterMini from '@/components/Footer/FooterMini';
import HeaderMini from '@/components/Header/HeaderMini';

export default function Layout({ children }: TChildren) {
  return (
    <>
      <HeaderMini />
      <main className='short'>{children}</main>
      <FooterMini />
    </>
  );
}
