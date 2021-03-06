import React,  {createContext, useState} from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [language, setLanguage] = useState("spanish");
    const changeLanguage = (evt) => setLanguage(evt.target.value)
    return (
        <LanguageContext.Provider value = {{language: language, changeLanguage: changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    );
}

// const withLanguageContext = Component => props => (
//     <LanguageContext.Consumer>
//         {value => <Component languageContext = {value} {...props} />}
//     </LanguageContext.Consumer>
// )

