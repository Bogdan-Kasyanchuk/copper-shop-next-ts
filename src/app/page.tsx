import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Icon iconName='burger' width='50' height='50' />
      <Logo width={115} height={31} />
      <a href='http://google.com'>fefdef</a>
      <button>sas</button>
      <label>
        fdfdfdf
        <input type='checkbox' />
      </label>
    </Container>
  );
}
