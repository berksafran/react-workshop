"use client";

import { useTheme } from "../contexts/ThemeContext";
import styles from "./theme-demo.module.scss";

export function ThemeDemo() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`${styles.demoContainer} ${styles[theme]}`}>
            <h2 className={styles.title}>Context API Demo</h2>

            <p className={styles.info}>
                Aktif Tema: <strong>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</strong>
            </p>

            <div className={styles.cardGrid}>
                <div className={styles.card}>
                    <h3>Bileşen A</h3>
                    <p>Ben temayı Context'ten okuyorum.</p>
                </div>
                <div className={styles.card}>
                    <h3>Bileşen B</h3>
                    <p>Prop drilling olmadan veriye eriştim!</p>
                </div>
                <div className={styles.card}>
                    <h3>Bileşen C</h3>
                    <p>Theme: {theme.toUpperCase()}</p>
                </div>
            </div>

            <button onClick={toggleTheme} className={styles.themeButton}>
                {theme === "light" ? "🌙 Dark Mod'a Geç" : "☀️ Light Mod'a Geç"}
            </button>
        </div>
    );
}
