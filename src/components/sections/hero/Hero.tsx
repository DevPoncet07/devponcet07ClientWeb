'use client'
import Image from "next/image";
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

const slides = [
    "/static/heroCarouselImage/carousel1.png",
    "/static/heroCarouselImage/carousel2.png",
    "/static/heroCarouselImage/carousel3.png",
    "/static/heroCarouselImage/carousel4.png",
    "/static/heroCarouselImage/carousel1.png",
    "/static/heroCarouselImage/carousel2.png",
    "/static/heroCarouselImage/carousel3.png",
    "/static/heroCarouselImage/carousel4.png",
];

const allText = [
    "> Initialisation du site...",
    "> Chargement des projets...",
    "Bienvenue sur mon site",
    "Chargement des compétences... ████████ 100%",
    "Développeur frontend & fullstack",
    "Concepteur d’expériences web modernes",
    "Je donne vie aux idées en ligne",
    "Site responsive… même à 2h du matin",
    "Pensé pour l’utilisateur. Construit pour durer.",
    "Minimalisme, fluidité, performance",
]

let indexText = 0

export default function Hero() {

    async function writingText(text: string) {
        setTextVisible("")
        for (let i = 1; i <= text.length; i++) {
            setTextVisible(text.slice(0, i))
            await new Promise(r => setTimeout(r, 50));
        }
        await new Promise(r => setTimeout(r, 2000));
        if (indexText == allText.length - 1) {
            indexText = 0
        } else {
            indexText++
        }
        writingText(allText[indexText])
    }

    useEffect(() => {
        writingText(allText[indexText])
    }, [])

    const [textVsible, setTextVisible] = useState('')

    return (
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <p>{textVsible}<span className={styles.cursor}></span></p>

            </div>
            <div className={styles.heroCarousel}>
                {slides.map((slide, i) =>
                    <div className={styles.heroCarouselSlide} key={i}>
                        <Image
                            src={slide}
                            width={500}
                            height={500}
                            alt=""
                            loading="eager"
                            className={styles.heroCarouselImage}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
