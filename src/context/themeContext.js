import { createContext } from "react";

const ThemeContext = createContext({
    theme: 'light',
    setThemeMode: (theme) => {}
});

export default ThemeContext;