'use client';

import styles from './ButtonUp.module.scss';
import scrollTop from '@/helpers/scrollTop';

export default function ButtonUp() {
  return (
    <button type='button' className={styles.base} onClick={scrollTop}>
      <p className={styles.inner}> До верху</p>
    </button>
  );
}
