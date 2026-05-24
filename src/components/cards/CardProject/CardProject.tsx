"use client"
import styles from "./CardProject.module.css"
import { useRouter } from "next/navigation"

export default function CardProject({children,title,url}:{children:React.ReactNode,title:string,url:string}){

    const router = useRouter()

    function goTo(){
        window.open(url, '_blank')
    }

    return(
        <article className={styles.article} onClick={goTo} >

            <h3>{title}</h3>
            {children}

        </article>
    )

}