import React, { useState, useEffect } from 'react';

export let allData = {}
export let allFiles = {}

const JsonFileSelector = ({ setJsonLoaded, setClicked }) => {

    const [jsonList, setJsonList] = useState(null);
    // const [jsonLoaded, setJsonLoaded] = useState(false);

   
    useEffect( () => { // no me gusta como quedo / a corregir
        if (jsonList && jsonList.length !== 0) {
            allData = {
                "auth_module": {},
                "content_module": {}
            }
            Array.from(jsonList).forEach(elem => {
                ['auth_module', 'content_module'].forEach(module => {
                    console.log('found = ', elem.result.provider[module])
                    console.log('name = ', elem.name)
                    if (!(elem.result.provider[module] in allData[module])) {
                        allData[module][elem.result.provider[module]] = []
                    }
                    allData[module][elem.result.provider[module]].push(elem.name)
                    console.log('allData =', allData)
                })
            })
            setJsonLoaded(true)
        } else {
            console.log('Emptying allData ...')
            allData = {}
            setJsonLoaded(false)
        }
    }, [jsonList]); // ojo, warning React Hook useEffect has a missing dependency: 'setJsonLoaded'.
    
    const readFileAsync = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = () => {
                resolve({name: file.name, result: JSON.parse(reader.result)});
            };
            
            reader.onerror = reject;
            
            reader.readAsText(file);
        })
    }
    
    const uploadFiles = event => {
        setClicked(true)
        Promise.all(
            Array.from(event.target.files).map(file => readFileAsync(file))
        ).then(values => {
            console.log('Promise then ...', values);
            setJsonList(values);
        }).catch(reason => {
            console.log('Promise catch ...', reason);
            setJsonList(null);
        })
    }
        
    console.log('BEFORE RENDER allData =', allData)

    allFiles = jsonList;
    
    return (
        <div>
            <h1>To begin, choose some json files from your computer</h1>
            <input
                type='file'
                accept='application/json'
                multiple
                onChange={uploadFiles}
                className='ui input'
            />
            <hr />
        </div>
    );
}

export default JsonFileSelector;
