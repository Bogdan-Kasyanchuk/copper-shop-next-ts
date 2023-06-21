'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from './BurgerMenu.module.scss';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';
import setBodyOverflow from '@/helpers/setBodyOverflow';

export default function BurgerMenu() {
  const [isBurgerMenuShow, setIsBurgerMenuShow] = useState<boolean>(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuShow(!isBurgerMenuShow);
    setBodyOverflow(isBurgerMenuShow);
  };
  return (
    <>
      <button className={styles['btn-burger']} type='button' onClick={toggleBurgerMenu}>
        <Icon iconName='burger' width='25px' height='25px' className={styles['btn-burger-icon']} />
      </button>
      {isBurgerMenuShow && (
        <div className={styles.backdrop}>
          <div className={styles.base}>
            <Container>
              <div className={styles.header}>
                <nav className={styles.nav}>
                  <Link href='/'>
                    <Logo width={115} height={31} />
                  </Link>
                  <ul className={styles['nav__list-btn']}>
                    <li className={styles['nav__item-btn']}>
                      <span className={styles['nav__item-btn-count']}>1</span>
                      <Link href='/personal-area/wish-list'>
                        <Icon iconName='heart' width='20px' height='20px' />
                      </Link>
                    </li>
                    <li className={styles['nav__item-btn']}>
                      <Link href='/personal-area/profile-detail'>
                        <Icon iconName='user' width='20px' height='20px' />
                      </Link>
                    </li>
                    <li className={styles['nav__item-btn']}>
                      <span className={styles['nav__item-btn-count']}>11</span>
                      <Link href='/basket'>
                        <Icon iconName='basket-order' width='20px' height='20px' />
                      </Link>
                    </li>
                  </ul>
                </nav>
                <button className={styles['btn-close']} type='button' onClick={toggleBurgerMenu}>
                  <Icon
                    iconName='close'
                    width='19px'
                    height='19px'
                    className={styles['btn-close-icon']}
                  />
                </button>
              </div>
              <nav className={styles['nav-link']}>
                <ul className={styles['nav-link__list-link']}>
                  <li
                    className={`${styles['nav-link__item-link']} ${styles['nav-link__item-link-more']}`}
                  >
                    <Link href='/catalog'>Каталог</Link>
                    <ul className={styles['nav-link__item-link-sublist']}>
                      <li className={styles['nav-link__item-link-subitem']}>
                        <Link href='/catalog/distillers'>Дистилятори</Link>
                      </li>
                      <li className={styles['nav-link__item-link-subitem']}>
                        <Link href='/catalog/dishes'>Посуд</Link>
                      </li>
                      <li className={styles['nav-link__item-link-subitem']}>
                        <Link href='/catalog/accessories'>Аксесуари</Link>
                      </li>
                      <li className={styles['nav-link__item-link-subitem']}>
                        <Link href='/catalog/aquadistilators'>Аквадистилятори</Link>
                      </li>
                      <li className={styles['nav-link__item-link-subitem']}>
                        <Link href='/catalog/individual-order'>Індивідуальне замовлення</Link>
                      </li>
                      <li className={styles['nav-link__item-link-subitem']}>
                        <Link href='/catalog/discounts-offers'>Знижки та пропозиції</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={styles['nav-link__item-link']}>
                    <Link href='/about-us'>Про нас</Link>
                  </li>
                  <li className={styles['nav-link__item-link']}>
                    <Link href='/news'>Новини</Link>
                  </li>
                  <li
                    className={`${styles['nav-link__item-link']} ${styles['nav-link__item-link-more']}`}
                  >
                    <div className={styles['nav-link__item-link-more-title']}>Сервіс</div>
                    <ul className={styles['nav-link__item-link-sublist']}>
                      <li className={styles['nav-link__item-link-subitem']}>
                        <Link href='/delivery'>Доставка</Link>
                      </li>
                      <li className={styles['nav-link__item-link-subitem']}>
                        <Link href='/payment'>Оплата</Link>
                      </li>
                      <li className={styles['nav-link__item-link-subitem']}>
                        <Link href='/privacy-policy'>Політика конфіденційності</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={styles['nav-link__item-link']}>
                    <Link href='/contacts'>Контакти</Link>
                  </li>
                </ul>
              </nav>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
