'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from './BurgerMenu.module.scss';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
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
        <Icon iconName='burger' width='20px' height='20px' className={styles['btn-burger-icon']} />
      </button>
      {isBurgerMenuShow && (
        <div className={styles.backdrop}>
          <div className={styles['burger-menu']}>
            <Container>
              <div className={styles.buttons}>
                <ul className={styles['list-button-burger']}>
                  <li className={styles['item-button-burger']}>
                    <span className={styles.count}>1</span>
                    <Icon iconName='heart' width='20px' height='20px' />
                  </li>
                  <li className={styles['item-button-burger']}>
                    <Icon iconName='user' width='20px' height='20px' />
                  </li>
                  <li className={styles['item-button-burger']}>
                    <span className={styles.count}>1</span>
                    <Icon iconName='basket-order' width='20px' height='20px' />
                  </li>
                </ul>
                <button
                  className={styles['button-burger']}
                  type='button'
                  onClick={toggleBurgerMenu}
                >
                  <Icon iconName='close' width='20px' height='20px' />
                </button>
              </div>
              <nav>
                <ul>
                  <li className={styles['item-nav-burger']}>
                    <Link href='/catalog'>
                      <div>
                        Каталог
                        <Icon
                          iconName='arrow'
                          width='12px'
                          height='12px'
                          className={styles['nav__item-link-more-icon']}
                        />
                      </div>
                    </Link>
                    <ul className={styles['nav__item-link-more-list']}>
                      <li className={styles['nav__item-link-more-item']}>
                        <Link href='/catalog/distillers'>Дистилятори</Link>
                      </li>
                      <li className={styles['nav__item-link-more-item']}>
                        <Link href='/catalog/dishes'>Посуд</Link>
                      </li>
                      <li className={styles['nav__item-link-more-item']}>
                        <Link href='/catalog/accessories'>Аксесуари</Link>
                      </li>
                      <li className={styles['nav__item-link-more-item']}>
                        <Link href='/catalog/aquadistilators'>Аквадистилятори</Link>
                      </li>
                      <li className={styles['nav__item-link-more-item']}>
                        <Link href='/catalog/individual-order'>Індивідуальне замовлення</Link>
                      </li>
                      <li className={styles['nav__item-link-more-item']}>
                        <Link href='/catalog/discounts-offers'>Знижки та пропозиції</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={styles['item-nav-burger']}>
                    <Link href='/about-us'>Про нас</Link>
                  </li>
                  <li className={styles['item-nav-burger']}>
                    <Link href='/news'>Новини</Link>
                  </li>
                  <li className={styles['item-nav-burger']}>
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
                  <li className={styles['item-nav-burger']}>
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
