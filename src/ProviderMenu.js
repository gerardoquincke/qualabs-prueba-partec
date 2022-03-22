import React from "react";
import { getFilenameList } from './parteA';
import Menu from "./Menu";
import Filename from "./Filename";


const ProviderMenu = ({ module, providers }) => {

    const filenamesMenu = (activeProvider) => {
        if (!activeProvider) {
            return null;
        }
        return (
            <Filename
                filenames={getFilenameList(module, activeProvider)}
            />
        );
    }

    return (
        <Menu menuHeader="Providers" menuItems={providers} nextMenu={filenamesMenu} />
    );
}

export default ProviderMenu;