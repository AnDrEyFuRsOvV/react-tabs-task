import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Tab.module.scss"

const Tab = ({ tab, activeMenuPin, onContextMenu, onTogglePin }) => {

    const { name, url, icon, id, pinned } = tab;

    let navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url)
    }
    const isMenuActive = activeMenuPin === id;

    const location = useLocation();
    const isActive = location.pathname === url;

    const pinClass = isMenuActive ? styles.active : "";

    return (
        <div className={styles.tab__item} onContextMenu={(e) => onContextMenu(e, id)}>
            <div className={`${styles.tabs__item} ${isActive ? styles.active : ""} ${pinned ? styles.pinned : ""}`} onClick={() => handleClick(url)}>
                <span className={`material-icons icon ${pinned ? "pinned" : ""}`}>{icon}</span>
                {!pinned && <p className="name__tab">{name}</p>}
                {/* {pinned && (
                    <div className={styles.pinned__menu}>
                        <span className={`material-icons icon ${pinned ? "pinned" : ""}`}>{icon}</span>
                        <p className="name__tab">{name}</p>
                    </div>
                )} */}
            </div>

            <div className={`${styles.menu__item} ${pinClass}`} onClick={(e) => {
                e.stopPropagation();
                onTogglePin(id);
            }}>
                <div className={styles.menu__text}>
                    <span className="material-icons icon">dashboard</span>
                    {pinned ? "Unpinned" : "Pinned"}
                </div>
            </div>
        </div>
    )
}

export default Tab
