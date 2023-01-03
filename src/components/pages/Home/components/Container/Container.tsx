import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactChild | React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return <main className={styles.container}>{children}</main>;
}
