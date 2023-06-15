import { useEffect, useState } from 'react';

import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';
import setBodyOverflow from '@/helpers/setBodyOverflow';

export default function Header() {
  const [isBurgerMenuShow, setIsBurgerMenuShow] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState('');

  const toggleBurgerMenu = (): void => {
    setIsBurgerMenuShow(!isBurgerMenuShow);
    setBodyOverflow(isBurgerMenuShow);
  };

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      return setIsScrolled('scrolled');
    }
    return setIsScrolled('');
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  });

  return (
    <SectionHeader
      className={isScrolled}
      color='#ffffff'
      padding={{
        bottomTab: '20px',
        bottomDesk: '20px',
      }}
    >
      <Container>
        <BoxHeader className={isScrolled}>
          <Logo width={115} height={31} />
          <Navigation>
            <NavList>
              <NavListItem>
                <NavListItemLink href='#Каталог'>Каталог</NavListItemLink>
              </NavListItem>
              <NavListItem>
                <NavListItemLink href='#Новости'>Новости</NavListItemLink>
              </NavListItem>
              <NavListItem>
                <NavListItemLink href='#Доставка'>Доставка</NavListItemLink>
              </NavListItem>
              <NavListItem>
                <NavListItemLink href='#Онас'>О нас</NavListItemLink>
              </NavListItem>
              <NavListItem>
                <NavListItemLink href='#Контакты'>Контакты</NavListItemLink>
              </NavListItem>
            </NavList>
          </Navigation>
          <ListButton>
            <ItemButton>
              <Count>1</Count>
              <Icon iconName='heart' width='20px' height='20px' />
            </ItemButton>
            <ItemButton>
              <Icon iconName='user' width='20px' height='20px' />
            </ItemButton>
            <ItemButton>
              <Count>1</Count>
              <Icon iconName='basket-order' width='20px' height='20px' />
            </ItemButton>
          </ListButton>
          <Button type='button' onClick={toggleBurgerMenu}>
            <Icon iconName='burger' width='26px' height='20px' />
          </Button>
        </BoxHeader>
      </Container>
    </SectionHeader>
  );
}
