import FooterMini from '@/components/Footer/FooterMini';
import HeaderMini from '@/components/Header/HeaderMini';

export default function Layout({ children }: TChildren) {
  return (
    <div className='l-wrapper'>
      <HeaderMini />
      <main>{children}</main>
      <FooterMini />
    </div>
  );
}
