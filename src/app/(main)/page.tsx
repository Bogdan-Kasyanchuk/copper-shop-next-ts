import Button from '@/components/Button';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Title from '@/components/Title';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <Container>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit explicabo illum,
        rerum tenetur nam itaque voluptatem non reiciendis totam vitae adipisci, sint
      </h1>
      <div className='grid gap-5'>
        <Button align='start' leftIcon={<Icon iconName='heart' />}>
          Button
        </Button>
        <Button variant='solid-green' space='10px'>
          Button
        </Button>
        <Button variant='outline-gray' color='gray'>
          Button
        </Button>
        <Button variant='outline-black' color='black' space='10px'>
          Button
        </Button>
      </div>
      <div className='grid gap-5'>
        <Title>h2-h2</Title>
        <Title as='h3' variant='h3' align='center'>
          h3-h3
        </Title>
        <Title as='h4' variant='h4' align='center'>
          h4-h4
        </Title>
      </div>
    </Container>
  );
}
