"use client"
import { useEffect, useState } from "react";
import styles from "./ButtonTheme.module.css"
import { useTheme } from "next-themes";

export default function ButtonTheme() {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Set initial theme state on mount
        setIsDark(theme === "dark");
    }, [theme]);

    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                checked={isDark}
                onChange={() => {
                    setTheme(isDark ? "light" : "dark");
                    setIsDark(!isDark);
                }}
            />
            <span className={styles.slider}></span>
        </label>
    )
}