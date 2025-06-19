import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import styles from "./MainLayout.module.scss"

const MainLayout = () => {

    return (
        <div className={styles.main__section}>
            <Sidebar />
            <div className={styles.main__content}>
                <Header />
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout
