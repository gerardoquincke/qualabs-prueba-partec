import React, {useState, useEffect} from "react";

// generic top Menu to be used for Modules and Providers

const Menu = ({ menuHeader, menuItems, nextMenu }) => {

    const [activeMenuItem, setActiveMenuItem] = useState(null);

    useEffect( () => {
        setActiveMenuItem(null);
    }, [menuItems]);

    const onMenuClick = item => {
        if (item === activeMenuItem) {
            setActiveMenuItem(null);
        } else {
            setActiveMenuItem(item);
        }
    }

    if (!menuItems) {
        return <div class="ui loader"></div>;
    }

    const renderedMenus = menuItems.map((item) => {
        return <button
                key={item}
                className={`ui button ${activeMenuItem === item? "primary" : ""}`}
                onClick={() => onMenuClick(item)}
            >
            {item}
        </button>;
    })

    return (
        <div className="ui container">
            <h2>{menuHeader}</h2>
            <p>{activeMenuItem ? activeMenuItem : "select a item"}</p>
            <div className="ui menu">
                {renderedMenus}
            </div>
            {nextMenu(activeMenuItem)}
        </div>
    );
}

export default Menu;