import { useState } from "react";
import styles from "./TabsBlock.module.scss"
import Tab from "./Tab";


const myTabs = [
    { id: 0, name: "Dashboard", url: "/", pinned: false, order: 0, visible: true, icon: "dashboard" },
    { id: 1, name: "Banking", url: "/banking", pinned: false, order: 1, visible: true, icon: "account_balance" },
    { id: 2, name: "Accounting", url: "/accounting", pinned: false, order: 2, visible: true, icon: "attach_money" },
    { id: 3, name: "Administration", url: "/administration", pinned: false, order: 3, visible: true, icon: "manage_accounts" },
    { id: 4, name: "Auswahllisten", url: "/auswahllisten", pinned: false, order: 4, visible: true, icon: "attach_money" },
    { id: 5, name: "Doppage1", url: "/doppage1", pinned: false, order: 5, visible: true, icon: "attach_money" },
    { id: 6, name: "Doppage2", url: "/doppage2", pinned: false, order: 6, visible: true, icon: "attach_money" },
    { id: 7, name: "Doppage3", url: "/doppage3", pinned: false, order: 7, visible: true, icon: "attach_money" },
    { id: 8, name: "Einkauf", url: "/einkauf", pinned: false, order: 8, visible: true, icon: "attach_money" },
    { id: 9, name: "Help", url: "/help", pinned: false, order: 9, visible: true, icon: "accessibility" },
    { id: 10, name: "Lagerverwaltung", url: "/lagerverwaltung", pinned: false, order: 10, visible: true, icon: "attach_money" },
    { id: 11, name: "Post Office", url: "/post-office", pinned: false, order: 11, visible: true, icon: "attach_money" },
    { id: 12, name: "Rechn", url: "/rechn", pinned: false, order: 12, visible: true, icon: "attach_money" },
    { id: 13, name: "Statistik", url: "/statistik", pinned: false, order: 13, visible: true, icon: "1k_plus" },
    { id: 14, name: "Telephone", url: "/telephone", pinned: false, order: 14, visible: true, icon: "add_call" },
    { id: 15, name: "Verkauf", url: "/verkauf", pinned: false, order: 15, visible: true, icon: "aod" },
    { id: 16, name: "Warenbestand", url: "/warenbestand", pinned: false, order: 16, visible: true, icon: "fullscreen_portrait" },
];



const TabsBlock = () => {

    const [tabs, setTabs] = useState(myTabs);

    return (
        <ul className={styles.tabs__block}>
            {tabs.map(tab => (
                <Tab
                    key={tab.id}
                    tab={tab}
                />
            ))}
        </ul>
    )
}

export default TabsBlock
