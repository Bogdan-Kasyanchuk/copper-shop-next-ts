'use client';

import Link from 'next/link';

import styles from './Header.module.scss';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <Link href='/'>
            <Logo width={115} height={31} />
          </Link>
          <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
              <li className={styles.navigation__item}>
                <Link href='/catalog'>Каталог</Link>
              </li>
              <li className={styles.navigation__item}>
                <Link href='/about-us'>Про нас</Link>
              </li>
              <li className={styles.navigation__item}>
                <Link href='/news'>Новини</Link>
              </li>
              <li className={styles.navigation__item}>
                Сервіс
                {/* <ul>
                  <li>
                    <Link href='/delivery'>Доставка</Link>
                  </li>
                  <li>
                    <Link href='/payment'>Оплата</Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>Політика конфіденційності</Link>
                  </li>
                </ul> */}
              </li>
              <li className={styles.navigation__item}>
                <Link href='/contacts'>Контакти</Link>
              </li>
            </ul>
          </nav>
          <ul className={styles.list__button}>
            <li className={styles.item__button}>
              <span className={styles.count}>1</span>
              <Icon iconName='heart' width='20px' height='20px' />
            </li>
            <li className={styles.item__button}>
              <Icon iconName='user' width='20px' height='20px' />
            </li>
            <li className={styles.item__button}>
              <span className={styles.count}>1</span>
              <Icon iconName='basket-order' width='20px' height='20px' />
            </li>
          </ul>
          <button className={styles.button} type='button' onClick={() => {}}>
            <Icon iconName='burger' width='26px' height='20px' />
          </button>
        </div>
      </Container>
    </header>
  );
}
