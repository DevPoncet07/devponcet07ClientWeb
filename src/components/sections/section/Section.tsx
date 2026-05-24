'use client'
import { useEffect } from "react"
import styles from "./Section.module.css"

export default function Section(
    { children, id, title,isLast=false }: { children: React.ReactNode | null, id: string, title: string,isLast?:boolean }) {



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0.2) {
                    console.log(id, "visible")
                    entry.target.children[0].classList.add(styles.sectionAnim)
                }
            })
        }, { threshold: 0.2})
        const section = document.getElementById(id) as HTMLElement
        observer.observe(section);

    }, [])

    return (
        <section id={id} >
            <div className={styles.section+" "+(isLast?styles.isLast:" ")}>
                <h2>{title}</h2>
                {children}
            </div>
        </section>
    )

}