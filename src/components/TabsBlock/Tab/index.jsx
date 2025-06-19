import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Tab.module.scss"


const Tab = ({ tab }) => {

    const { name, url, icon } = tab;

    let navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url)
    }

    const location = useLocation();
    const isActive = location.pathname === url;

    return (
        <div className={`${styles.tabs__item} ${isActive ? styles.active : ""}`} onClick={() => handleClick(url)}>
            <span className="material-icons icon">{icon}</span>
            <p className="name__tab">{name}</p>
        </div>
    )
}

export default Tab
