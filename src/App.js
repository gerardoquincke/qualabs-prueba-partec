import React, { useState, useEffect } from 'react';
import { getModuleList } from './parteA';
import ModuleMenu from './ModuleMenu';
import JsonFileSelector from './JsonFileSelector';

const App = () => {

    const [jsonLoaded, setJsonLoaded] = useState(false);
    const [clicked, setClicked] = useState(false); // sin este estado, no renderiza 100% bien ante cambios
    const [moduleList, setModuleList] = useState([]);

    useEffect( () => {
        setModuleList(getModuleList())
        setClicked(false)
    }, [clicked, jsonLoaded]);

    return (
        <div className='ui container'>
            <JsonFileSelector setJsonLoaded={setJsonLoaded} setClicked={setClicked} />
            <ModuleMenu
                modules={moduleList}
            />
        </div>
    );
}

export default App;
