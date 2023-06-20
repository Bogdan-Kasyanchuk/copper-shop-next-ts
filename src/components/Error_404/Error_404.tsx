import Link from 'next/link';

import styles from './Error_404.module.scss';

export default function Error_404() {
  return (
    <div className='l-container'>
      <div className={styles['error-404']}>
        <p className={styles['error-404__code']}>404</p>
        <div className={styles['error-404__text']}>
          <h1 className={styles['error-404__title']}>Something is not right...</h1>
          <p className={styles['error-404__desc']}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL.
          </p>
        </div>
        <div className={styles['error-404__go-home']}>
          <Link href='/'> Back to home page</Link>
        </div>
      </div>
    </div>
  );
}
