import Container from '@/components/Container';
import Icon from '@/components/Icon';

export default function BurgerMenu() {
  return (
    <Backdrop>
      <BurgerMenu>
        <Container>
          <BoxButton>
            <ListButtonBurger>
              <ItemButtonBurger>
                <CountBurger>1</CountBurger>
                <Icon iconName='heart' width='20px' height='20px' />
              </ItemButtonBurger>
              <ItemButtonBurger>
                <Icon iconName='user' width='20px' height='20px' />
              </ItemButtonBurger>
              <ItemButtonBurger>
                <CountBurger>1</CountBurger>
                <Icon iconName='basket-order' width='20px' height='20px' />
              </ItemButtonBurger>
            </ListButtonBurger>
            <ButtonBurger type='button' onClick={toggleBurgerMenu}>
              <Icon iconName='close' width='20px' height='20px' />
            </ButtonBurger>
          </BoxButton>
          <nav>
            <ul>
              <ItemNavBurger>Каталог</ItemNavBurger>
              <ItemNavBurger>Новости</ItemNavBurger>
              <ItemNavBurger>Доставка</ItemNavBurger>
              <ItemNavBurger>О нас</ItemNavBurger>
              <ItemNavBurger>Контакты</ItemNavBurger>
            </ul>
          </nav>
        </Container>
      </BurgerMenu>
    </Backdrop>
  );
}
