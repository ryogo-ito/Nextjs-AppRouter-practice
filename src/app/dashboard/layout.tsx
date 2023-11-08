import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return <section className={styles.dashboard}>{children}</section>;
}
