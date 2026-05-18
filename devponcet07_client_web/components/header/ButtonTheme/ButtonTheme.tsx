"use client"
import { useEffect, useState } from "react"
import styles from "./ButtonTheme.module.css"

export default function ButtonTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    console.log(isDark)
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark((prev) => !prev)}
      />
      <span className={styles.slider}></span>
    </label>
  )
}