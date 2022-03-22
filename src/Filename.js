import React, { useState, useEffect } from "react";
import FileContent from "./FileContent";

const Filename = ({ filenames }) => {

    const [activeFilename, setActiveFilename] = useState(null);

    useEffect( () => {
        setActiveFilename(null);
    }, [filenames])

    const onFilenameClick = filename => {
        if (filename === activeFilename) {
            setActiveFilename(null);
        } else {
            setActiveFilename(filename);
        }
    }

    if (!filenames) {
        return <div class="ui loader"></div>;
    }

    const renderedFilenames = filenames.map((filename) => {
        return (
            <div className="ui item"
                key={filename}
            >
                <div
                    className={`ui button ${activeFilename === filename? "primary" : ""}`}
                    onClick={() => onFilenameClick(filename)}
                    >
                    {filename}
                </div>
            </div>
        );
    })
    
    return (
        <div className="ui container">
            <h2>Filenames</h2>
            <p>{activeFilename ? activeFilename : "select a filename"}</p>
            <div className="ui grid">
                <div className="eight wide column">
                    <div className="ui vertical menu">
                        {renderedFilenames}
                    </div>
                </div>
                <div className="eight wide column">
                        {activeFilename ? <FileContent filename={activeFilename} /> : ""}
                </div>
            </div>
        </div>
    );
};

export default Filename;