"use client"
import { useEffect, useState } from "react"
import styles from "./ButtonTheme.module.css"

export default function ButtonTheme() {

    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
    }, [isDark])

    function handleSetTheme() {
        setIsDark(!isDark)
    }

    return (
        <label className={styles.switch} >
            <input type="checkbox"  onClick={handleSetTheme} />
            <span className={styles.slider}></span>
        </label>
    )
}