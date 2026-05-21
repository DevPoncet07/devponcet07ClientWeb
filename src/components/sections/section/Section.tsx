'use client'
import { useEffect } from "react"
import styles from "./Section.module.css"

export default function Section(
    { children, id, title }: { children: React.ReactNode | null, id: string, title: string }) {



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0.5) {
                    console.log(id, "visible")
                    entry.target.children[0].classList.add(styles.sectionAnim)
                }
            })
        }, { threshold: 0.5})
        const section = document.getElementById(id) as HTMLElement
        observer.observe(section);

    }, [])

    return (
        <section id={id} >
            <div className={styles.section}>
                <h2>{title}</h2>
                {children}
            </div>
        </section>
    )

}