import TabsBlock from "../TabsBlock"
import styles from "./Header.module.scss"

const Header = () => {

  return (
    <header className={styles.header}>
        <div className={styles.header__top}></div>
        <TabsBlock />
    </header>
  )
}

export default Header
