import { allData, allFiles } from "./JsonFileSelector";
// const allData = {
//     "auth_module": {
//         "authn.provider_1": [
//             "u17.json",
//             "u19.json",
//             "u3.json",
//             "u4.json"
//         ],
//         "authn.provider_2": [
//             "u1.json",
//             "u10.json",
//             "u13.json",
//             "u14.json",
//             "u16.json",
//             "u18.json",
//             "u6.json",
//             "u8.json"
//         ],
//         "authn.provider_3": [
//             "u0.json",
//             "u11.json",
//             "u12.json",
//             "u15.json",
//             "u7.json"
//         ],
//         "authn.provider_4": [
//             "u2.json",
//             "u5.json",
//             "u9.json"
//         ]
//     },
//     "content_module": {
//         "authz.provider_1": [
//             "u14.json",
//             "u4.json"
//         ],
//         "authz.provider_2": [
//             "u13.json",
//             "u15.json",
//             "u16.json",
//             "u17.json",
//             "u8.json",
//             "u9.json"
//         ],
//         "authz.provider_3": [
//             "u10.json",
//             "u11.json",
//             "u18.json",
//             "u2.json",
//             "u3.json",
//             "u5.json"
//         ],
//         "authz.provider_4": [
//             "u0.json",
//             "u1.json",
//             "u12.json",
//             "u19.json",
//             "u6.json",
//             "u7.json"
//         ]
//     }
// };

export const getModuleList = () => {
    return Object.keys(allData).sort();
}

export const getProviderList = module => {
    if (module in allData) {
        return Object.keys(allData[module]).sort();
    }

    return [];
}

export const getFilenameList = (module, provider) => {
    if (module in allData) {
        if (provider in allData[module]) {
            return Array.from(allData[module][provider]).sort();
        }
    }
    return [];
}

export const getFileContent = filename => {
    console.log('filename:', filename)
    console.log (allFiles.filter(elem => elem.name === filename)[0]);
    return JSON.stringify(allFiles.filter(elem => elem.name === filename)[0].result, null, '  ');
}