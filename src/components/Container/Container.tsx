import styles from './Container.module.scss';

export default function Container({ children }: TChildren) {
  return <div className={styles.container}>{children}</div>;
}
