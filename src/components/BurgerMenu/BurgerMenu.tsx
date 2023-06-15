'use client';

import Link from 'next/link';

import Container from '@/components/Container';
import Icon from '@/components/Icon';

export default function BurgerMenu() {
  return (
    <div>
      <div>
        <Container>
          <div>
            <ul>
              <li>
                <span>1</span>
                <Icon iconName='heart' width='20px' height='20px' />
              </li>
              <li>
                <Icon iconName='user' width='20px' height='20px' />
              </li>
              <li>
                <span>1</span>
                <Icon iconName='basket-order' width='20px' height='20px' />
              </li>
            </ul>
            <button type='button' onClick={() => {}}>
              <Icon iconName='close' width='20px' height='20px' />
            </button>
          </div>
          <nav>
            <ul>
              <li>
                <Link href='/catalog'>Каталог</Link>
              </li>
              <li>
                <Link href='/about-us'>Про нас</Link>
              </li>
              <li>
                <Link href='/news'>Новини</Link>
              </li>
              <li>
                Сервіс
                <ul>
                  <li>
                    <Link href='/delivery'>Доставка</Link>
                  </li>
                  <li>
                    <Link href='/payment'>Оплата</Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>Політика конфіденційності</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='/contacts'>Контакти</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
}
