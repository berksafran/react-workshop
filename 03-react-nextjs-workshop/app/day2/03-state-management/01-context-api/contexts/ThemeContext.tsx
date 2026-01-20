"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Context için tip tanımı
type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// 2. Context oluşturma (başlangıç değeri undefined olabilir)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider bileşeni
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 4. Custom hook (Kullanımı kolaylaştırmak için)
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
