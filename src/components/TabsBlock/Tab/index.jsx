import { useNavigate } from "react-router-dom";
import styles from "./Tab.module.scss"

const Tab = ({ tab }) => {

    const { name, url, icon } = tab;

    let navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url)
    }

    return (
        <li className={styles.tabs__item} onClick={() => handleClick(url)}>
            <span className="material-icons icon">{icon}</span>
            <p className={styles.name__tab}>{name}</p>
        </li>
    )
}

export default Tab
