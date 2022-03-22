import React from "react";
import { getFileContent } from "./parteA";


const FileContent = ({ filename }) => {
    return (
        <div className="ui message">
            <div className="header">
                {filename}
            </div>
            <pre>
                <code>
                    {getFileContent(filename)}
                </code>
            </pre>
        </div>
    );
}

export default FileContent