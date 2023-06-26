import clsx from 'clsx';

import styles from './Socials.module.scss';
import type { TSocialsProps } from './TSocialsProps';
import Icon from '@/components/Icon';
import SocialsItem from '@/components/Socials/SocialsItem';

export default function Socials({ className }: TSocialsProps) {
  return (
    <ul className={clsx(styles.base, className)}>
      <SocialsItem href='https://twitter.com'>
        <Icon iconName='twiter' width='21px' height='17px' />
      </SocialsItem>
      <SocialsItem href='https://uk-ua.facebook.com'>
        <Icon iconName='facebook' width='10px' height='18px' />
      </SocialsItem>
      <SocialsItem href='https://www.youtube.com/'>
        <Icon iconName='instagram' width='18px' height='18px' />
      </SocialsItem>
    </ul>
  );
}
