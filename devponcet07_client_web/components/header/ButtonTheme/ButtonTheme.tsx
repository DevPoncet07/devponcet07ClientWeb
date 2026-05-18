"use client"
import styles from "./ButtonTheme.module.css"
import { useTheme } from "@/components/provider/themeProvider";

export default function ButtonTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                checked={theme === 'dark' ? true : false}
                onChange={()=>toggleTheme()}
            />
            <span className={styles.slider}></span>
        </label>
    )
}