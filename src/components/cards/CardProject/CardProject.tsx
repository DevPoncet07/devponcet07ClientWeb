"use client"
import styles from "./CardProject.module.css"
import { useRouter } from "next/navigation"
import Image from "next/image";

export default function CardProject({ children, title, url, img,tags,inProgress}: { children: React.ReactNode, title: string, url: string, img?: string,tags?:string[],inProgress:boolean}) {

    const router = useRouter()

    function goTo() {
        window.open(url, '_blank')
    }

    return (
        <article className={styles.card} onClick={goTo} >

            {img && <div className={styles.imageContainer}>
                <Image
                    src={img}
                    fill
                    alt=""
                    loading="eager"
                    className={styles.image}
                />

            </div>
            }
            <div className={styles.content}>
                <h3>{title}</h3>
                <div className={styles.tags}>
                    <span>{inProgress?"En construction":"Terminer"}</span>
                </div>

                {children}

                <div className={styles.tags}>
                    {tags?.map(element => {
                        return (<span>{element}</span>)
                    })}
                </div>
            </div>

        </article>
    )

}