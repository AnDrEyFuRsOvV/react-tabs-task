import { useRef, useState, useEffect } from "react";
import styles from "./TabsBlock.module.scss";
import Tab from "./Tab";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const LOCAL_STORAGE_KEY = "user-tabs";

const defaultTabs = [
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

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result.map((tab, index) => ({ ...tab, order: index }));
};

const TabsBlock = () => {
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        const storedTabs = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedTabs) {
            try {
                const parsedTabs = JSON.parse(storedTabs);
                parsedTabs.sort((a, b) => a.order - b.order);
                setTabs(parsedTabs);
            } catch {
                setTabs(defaultTabs);
            }
        } else {
            setTabs(defaultTabs);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tabs));
    }, [tabs]);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const newTabs = reorder(tabs, result.source.index, result.destination.index);
        setTabs(newTabs);
    };

    const [activeMenuPin, setActiveMenuPin] = useState(null);

    const handleOpenMenuPin = (e, id) => {
        e.preventDefault();
        setActiveMenuPin(id);
        e.stopPropagation();
    }

    useEffect(() => {
        const closeMenu = () => {
            setActiveMenuPin(null);
        };

        if (activeMenuPin !== null) {
            document.addEventListener("mouseup", closeMenu); // замість mousedown
        }

        return () => {
            document.removeEventListener("mouseup", closeMenu);
        };
    }, [activeMenuPin]);

    const togglePin = (id) => {
        setTabs((prevTabs) => {
            const updatedTabs = prevTabs.map((tab) => {
                if (tab.id === id) {
                    return { ...tab, pinned: !tab.pinned };
                }
                return tab;
            });

            const sortedTabs = [
                ...updatedTabs.filter(t => t.pinned).sort((a, b) => a.order - b.order),
                ...updatedTabs.filter(t => !t.pinned).sort((a, b) => a.order - b.order),
            ].map((tab, i) => ({ ...tab, order: i }));

            return sortedTabs;
        });

        setActiveMenuPin(null);
    };


    return (
        <div className={styles.tabs__block_content}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="tabs-droppable" direction="horizontal">
                    {(provided) => (
                        <ul
                            className={styles.tabs__block}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {tabs.map((tab, index) => (
                                <Draggable key={tab.id.toString()} draggableId={tab.id.toString()} index={index} isDragDisabled={tab.pinned}>
                                    {(provided, snapshot) => (
                                        <li
                                            className={`${styles.tabs__item} ${snapshot.isDragging ? styles.dragging : ''}`}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                ...provided.draggableProps.style,
                                                backgroundColor: snapshot.isDragging ? '#7F858D' : 'transparent',
                                                color: snapshot.isDragging ? '#ffffff' : '#7F858D'
                                            }}
                                        >
                                            <Tab key={tab.id} tab={tab} activeMenuPin={activeMenuPin} onContextMenu={handleOpenMenuPin} onTogglePin={() => togglePin(tab.id)} />
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default TabsBlock;