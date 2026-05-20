'use client'
import Image from "next/image";
import styles from "./Hero.module.css";

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

export default function Hero() {

  return (
    <section className={styles.hero}>
      <div className={styles.heroCarousel}>
        {slides.map((slide,i) => 
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
