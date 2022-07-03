import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

const darkTheme = {
    primaryBG: "#151515",
    secondaryBG: "#222",
    primaryLetterColor: "#F0F1F7",
    secondaryLetterColor: "#F8F8F8",
}
const lightTheme = {
    primaryBG: "#F0F1F7",
    secondaryBG: "#F8F8F8",
    primaryLetterColor: "#151515",
    secondaryLetterColor: "#222",
}

const Theme = ({children}) => {
    // hacer un redux para cambiar o reducer
    const [dark, setDark] = useState(true);
    return <ThemeProvider theme={dark ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};

export default Theme;
