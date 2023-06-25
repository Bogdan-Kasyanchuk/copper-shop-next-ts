import Link from 'next/link';

import styles from './Footer.module.scss';
import ButtonUp from '@/components/ButtonUp';
import Container from '@/components/Container';
import RightsReserved from '@/components/Footer/RightsReserved';
import Logo from '@/components/Logo';
import Section from '@/components/Section';
import Socials from '@/components/Socials';

export default function Footer() {
  return (
    <Section as='footer' className={styles.base}>
      <Container>
        <div className={styles.inner}>
          <div className={styles['logo-box']}>
            <Link href='/'>
              <Logo width={175} height={47} />
            </Link>
            <RightsReserved className={styles['rights-reserved']} />
            <Link href='/privacy-policy'>
              <p className={styles['privacy-policy']}>Політика конфіденційності</p>
            </Link>
          </div>
          <nav className={styles.nav}>
            <div className={styles['nav__nav']}>
              <p className={styles['nav__title']}>Навігація</p>
              <ul className={styles['nav__list']}>
                <li className={styles['nav__item']}>
                  <Link href='/catalog'>Каталог</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/about-us'>Про нас</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/news'>Новини</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/delivery'>Доставка</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/payment'>Оплата</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/contacts'>Контакти</Link>
                </li>
              </ul>
            </div>
            <div className={styles['nav__catalog']}>
              <p className={styles['nav__title']}>Каталог</p>
              <ul className={styles['nav__list']}>
                <li className={styles['nav__item']}>
                  <Link href='/catalog/distillers'>Дистилятори</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/catalog/dishes'>Посуд</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/catalog/accessories'>Аксесуари</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/catalog/aquadistilators'>Аквадистилятори</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/catalog/individual-order'>Індивідуальне замовлення</Link>
                </li>
                <li className={styles['nav__item']}>
                  <Link href='/catalog/discounts-offers'>Знижки та пропозиції</Link>
                </li>
              </ul>
            </div>
            <div className={styles['nav__contacts']}>
              <p className={styles['nav__title']}>Контакты</p>
              <ul className={styles['nav__list']}>
                <li className={styles['nav__item']}>
                  <a
                    href='https://goo.gl/maps/iQ1fi4EBQ65hfGRz9'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Бажана 8-Б, Київ, 02132&nbsp;Україна
                  </a>
                </li>
                <li className={styles['nav__item']}>
                  <a href='tel:+380123456789'>+38 (012) 345 67 89</a>
                </li>
                <li className={styles['nav__item']}>
                  <a href='mailto:ex.example@gmail.com'>ex.example@gmail.com</a>
                </li>
              </ul>
              <Socials />
            </div>
          </nav>
        </div>
      </Container>
      <ButtonUp />
    </Section>
  );
}
