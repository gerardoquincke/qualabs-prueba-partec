import React, {useState, useEffect} from "react";
import Filename from "../Filename";
import { getFilenameList } from '../parteA';


const Provider = ({ module, providers }) => {

    const [activeProvider, setActiveProvider] = useState(null);

    useEffect( () => {
        setActiveProvider(null);
    }, [providers])

    
    const onProviderClick = provider => {
        if (provider === activeProvider) {
            setActiveProvider(null);
        } else {
            setActiveProvider(provider);
        }
    }

    const renderedProviders = providers.map((provider) => {

        return <button
                key={provider}
                className={`ui button ${activeProvider === provider? "primary" : ""}`}
                onClick={() => onProviderClick(provider)}
            >
            {provider}
        </button>;
    });

    const filenamesMenu = () => {
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
        <div className="ui container">
            <h2>Providers</h2>
            <p>{activeProvider ? activeProvider : "select a provider"}</p>
            <div className="ui menu">
                {renderedProviders}
            </div>
            {filenamesMenu()}
        </div>
    );
}

export default Provider;