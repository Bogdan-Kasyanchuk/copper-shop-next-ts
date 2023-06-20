import Link from 'next/link';

import styles from './Header.module.scss';
import BurgerMenu from '@/components/BurgerMenu';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='l-container'>
        <div className={styles.header__inner}>
          <nav className={styles.nav}>
            <Link href='/'>
              <Logo width={115} height={31} priority className={styles.logo} />
            </Link>
            <ul className={styles['nav__list-link']}>
              <li className={`${styles['nav__item-link']} ${styles['nav__item-link-more']}`}>
                <Link href='/catalog'>
                  <div className={styles['nav__item-link-more-title']}>
                    Каталог
                    <Icon
                      iconName='arrow'
                      width='12px'
                      height='12px'
                      className={styles['nav__item-link-more-icon']}
                    />
                  </div>
                </Link>
                <div className={styles['nav__item-link-more-list-wrapper']}>
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
                </div>
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
                <div className={styles['nav__item-link-more-list-wrapper']}>
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
                </div>
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
                <span className={styles.count}>21</span>
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
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}
