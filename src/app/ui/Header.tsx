import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>TOP画面</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/home">Top</a>
            </li>
            <li className={styles.navItem}>
              <a href="">About</a>
            </li>
            <li className={styles.navItem}>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
