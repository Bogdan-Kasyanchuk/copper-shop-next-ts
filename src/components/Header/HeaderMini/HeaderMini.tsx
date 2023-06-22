import Link from 'next/link';

import styles from './HeaderMini.module.scss';
import Container from '@/components/Container';
import Logo from '@/components/Logo';

export default function HeaderMini() {
  return (
    <header className={styles.base}>
      <Container>
        <div className={styles.inner}>
          <Link href='/'>
            <Logo width={114} height={31} priority className={styles.logo} />
          </Link>
        </div>
      </Container>
    </header>
  );
}
