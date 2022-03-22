import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import "./dropzonestyles.css";

const SelectFiles = () => {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const fileContent = JSON.parse(reader.result)
                console.log(fileContent)
            }
            // reader.readAsArrayBuffer(file)
            reader.readAsText(file)
        })
    }, [])
    
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: 'application/json'
    });

    return (
        <div className='ui container'>
            <h2>Select JSON files</h2>
            <button className='ui primary button'>Reset</button>
            <div {...getRootProps({className: "dropzone"})}>
                <input {...getInputProps()} />
                {isDragAccept && (<p>All files will be accepted</p>)}
                {isDragReject && (<p>Some files will be rejected</p>)}
                {!isDragActive && (<p>Drag 'n' drop some json files here, or click to select files</p>)}
            </div>
        </div>
    );
}

// const SelectFiles = () => {

//   return (
//     <div className='ui container'>
//         <h2>Select JSON files</h2>
//         <button className='ui primary button'>Reset</button>
//       <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
//         {({getRootProps, getInputProps}) => (
//           <section>
//             <div {...getRootProps({className: "dropzone"})}>
//               <input {...getInputProps()} />
//               <p>Drag 'n' drop some files here, or click to select files</p>
//             </div>
//           </section>
//         )}
//       </Dropzone>
//     </div>
//   );
// }

export default SelectFiles;