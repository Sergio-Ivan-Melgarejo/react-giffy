import React from 'react'

export const Context = React.createContext({})

let theme = localStorage.getItem("dark")
if (theme) theme = JSON.parse(theme)
else theme = true

function ThemeProvider ({children}) {
    const [dark, setDark] = React.useState(theme);

    const changeTheme = () => {
        setDark((theme) => {
            localStorage.setItem("dark", JSON.stringify(!theme))
            return !theme
        })
    }
    
    const value = {dark,changeTheme}
    return <Context.Provider value={value} >{children}</Context.Provider>
}

export default ThemeProvider