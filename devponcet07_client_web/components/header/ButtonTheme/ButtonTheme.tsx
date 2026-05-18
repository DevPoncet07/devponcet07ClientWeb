"use client"
import { useEffect, useState } from "react"
import styles from "./ButtonTheme.module.css"


type Theme = "light" | "dark";

function getSystemTheme(): Theme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}


export default function ButtonTheme() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<Theme>("light");


    useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme | null;

        const initialTheme = saved ?? getSystemTheme();

        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
        setMounted(true);
    }, []);


    useEffect(() => {
        if (!mounted) return;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme,mounted]);

    const toggle = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

     if (!mounted) {
    // 🔥 important: évite flash + mismatch
    return null;
  }


    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                checked={theme === 'dark' ? true : false}
                onChange={toggle}
            />
            <span className={styles.slider}></span>
        </label>
    )
}