import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    return (
    <ThemeContext value={{ theme, setTheme }}>
        {children}
    </ThemeContext>
    );
}
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be called inside ThemeProvider');
    return ctx;
}

