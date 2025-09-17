import styles from "./Header.module.scss";
import { ThemeSwitcher } from "components/ThemeSwitcher";

export const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.logo}>devFinder</h1>
    <ThemeSwitcher />
  </div>
);
