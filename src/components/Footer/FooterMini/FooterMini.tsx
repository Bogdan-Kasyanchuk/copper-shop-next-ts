import Link from 'next/link';

import styles from './FooterMini.module.scss';
import Container from '@/components/Container';
import RightsReserved from '@/components/Footer/RightsReserved';
import Logo from '@/components/Logo';
import Section from '@/components/Section';

export default function FooterMini() {
  return (
    <Section as='footer' className={styles.base}>
      <Container>
        <div className={styles.inner}>
          <Link href='/'>
            <Logo width={115} height={31} priority className={styles.logo} />
          </Link>
          <RightsReserved className={styles['rights-reserved']} />
        </div>
      </Container>
    </Section>
  );
}
