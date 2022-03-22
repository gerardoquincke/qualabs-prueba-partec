import React from "react";
import { getProviderList } from './parteA';
import Menu from "./Menu";
import ProviderMenu from "./ProviderMenu";


const ModuleMenu = ({ modules }) => {

    if (!modules || modules.length === 0) {
        return null
    }

    const providersMenu = activeModule => {
        if (!activeModule) {
            return null;
        }
        return (
            <ProviderMenu
                module={activeModule}
                providers={getProviderList(activeModule)}
            />
        );
    }

    return (
        <Menu menuHeader="Modules" menuItems={modules} nextMenu={providersMenu} />
    );
}

export default ModuleMenu;