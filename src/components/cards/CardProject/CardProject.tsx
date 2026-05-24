"use client"
import styles from "./CardProject.module.css"
import { useRouter } from "next/navigation"
import Image from "next/image";

export default function CardProject({children,title,url,img}:{children:React.ReactNode,title:string,url:string,img?:string}){

    const router = useRouter()

    function goTo(){
        window.open(url, '_blank')
    }

    return(
        <article className={styles.article} onClick={goTo} >

            <h3>{title}</h3>
            {img &&
            <Image
            src={img}
            width={250}
            height={250}
            alt=""
            loading="eager"
            className={styles.img}
          />
            }
            {children}

        </article>
    )

}