import React from "react";
import { texts } from "languages/texts";

export const Context = React.createContext({});

const lang = localStorage.getItem("lang")

export function LanguageProvider({ children }) {
  const [language, setlanguage] = React.useState(lang || "en");
  const [text, setText] = React.useState(texts[language]);

  const changeLanguage = () => {
    setlanguage((prevLang) => {
        const newLang = prevLang === "en" ? "es" : "en"
        setText(texts[newLang])
        localStorage.setItem("lang", newLang)
        return newLang
    })
  }
  
  return (
    <Context.Provider value={{ changeLanguage, text, language }}>
      {children}
    </Context.Provider>
  );
}

export default LanguageProvider;
