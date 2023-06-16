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
          <nav className={styles.nav}>
            <Link href='/'>
              <Logo width={115} height={31} className={styles.logo} />
            </Link>
            <ul className={styles['nav__list-link']}>
              <li className={styles['nav__item-link']}>
                <Link href='/catalog'>Каталог</Link>
              </li>
              <li className={styles['nav__item-link']}>
                <Link href='/about-us'>Про нас</Link>
              </li>
              <li className={styles['nav__item-link']}>
                <Link href='/news'>Новини</Link>
              </li>
              <li className={`${styles['nav__item-link']} ${styles['nav__item-link-more']}`}>
                <div className={styles['nav__item-link-more-title']}>
                  Сервіс
                  <Icon
                    iconName='arrow'
                    width='12px'
                    height='12px'
                    className={styles['nav__item-link-more-icon']}
                  />
                </div>
                <ul className={styles['nav__item-link-more-list']}>
                  <li className={styles['nav__item-link-more-item']}>
                    <Link href='/delivery'>Доставка</Link>
                  </li>
                  <li className={styles['nav__item-link-more-item']}>
                    <Link href='/payment'>Оплата</Link>
                  </li>
                  <li className={styles['nav__item-link-more-item']}>
                    <Link href='/privacy-policy'>Політика конфіденційності</Link>
                  </li>
                </ul>
              </li>
              <li className={styles['nav__item-link']}>
                <Link href='/contacts'>Контакти</Link>
              </li>
            </ul>
            <ul className={styles['nav__list-btn']}>
              <li className={styles['nav__item-btn']}>
                <span className={styles.count}>1</span>
                <Link href='/personal-area/wish-list'>
                  <Icon
                    iconName='heart'
                    width='20px'
                    height='20px'
                    className={styles['nav__item-btn-icon']}
                  />
                </Link>
              </li>
              <li className={styles['nav__item-btn']}>
                <Link href='/personal-area/profile-detail'>
                  <Icon
                    iconName='user'
                    width='20px'
                    height='20px'
                    className={styles['nav__item-btn-icon']}
                  />
                </Link>
              </li>
              <li className={styles['nav__item-btn']}>
                <span className={styles.count}>1</span>
                <Link href='/basket'>
                  <Icon
                    iconName='basket-order'
                    width='20px'
                    height='20px'
                    className={styles['nav__item-btn-icon']}
                  />
                </Link>
              </li>
            </ul>
          </nav>
          <button className={styles['btn-burger']} type='button' onClick={() => {}}>
            <Icon
              iconName='burger'
              width='20px'
              height='20px'
              className={styles['btn-burger-icon']}
            />
          </button>
        </div>
      </Container>
    </header>
  );
}
