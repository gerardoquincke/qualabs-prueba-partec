import React, {useState, useEffect} from "react";
import Provider from "./Provider";
import { getProviderList } from '../parteA';


const Module = ({ modules }) => {

    const [activeModule, setActiveModule] = useState(null);

    useEffect( () => {
        setActiveModule(null);
    }, [modules]);

    const onModuleClick = module => {
        if (module === activeModule) {
            setActiveModule(null);
        } else {
            setActiveModule(module);
        }
    }

    if (!modules) {
        return <div>Loading...</div>;
    }

    const renderedModules = modules.map((module) => {
        return <button
                key={module}
                className={`ui button ${activeModule === module? "primary" : ""}`}
                onClick={() => onModuleClick(module)}
            >
            {module}
        </button>;
    })

    const providersMenu = () => {
        if (!activeModule) {
            return null;
        }
        return (
            <Provider
                module={activeModule}
                providers={getProviderList(activeModule)}
            />
        );
    }

    return (
        <div className="ui container">
            <h2>Modules</h2>
            <p>{activeModule ? activeModule : "select a module"}</p>
            <div className="ui menu">
                {renderedModules}
            </div>
            {providersMenu()}
        </div>
    );
}

export default Module;