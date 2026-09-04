import App from "@/components/app/App";
import CardProject from "@/components/cards/CardProject/CardProject";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Hero from "@/components/sections/hero/Hero"
import Section from "@/components/sections/section/Section";

import styles from "./Home.module.css"


export default function Home() {
  return (<App>
    <Header />
    <Hero />
    <Main>
      <Section
        id="home-1"
        title="Adrien Poncet"
      >
        <h3>Développeur Web Freelance</h3>

        <p>
          Vous avez un projet de site web, d’application ou d’outil sur mesure ?
          Je peux vous accompagner dans sa conception et son développement,
          de l’idée jusqu’à sa mise en ligne.
        </p>

        <p>
          Je suis <strong>Concepteur Développeur d’Applications (CDA)</strong>
          et développeur web freelance. Je conçois des solutions adaptées
          aux besoins de chaque projet, avec une attention particulière portée
          à la qualité du code, aux performances et à la simplicité d’utilisation.
        </p>

        <p>
          Site web, application métier, API, base de données ou outil personnalisé :
          je peux intervenir sur différentes parties d’un projet, aussi bien
          sur le <strong>backend</strong> que sur le <strong>frontend</strong>.
        </p>

        <p>
          Je travaille principalement avec
          <strong> JavaScript, TypeScript, Python, React et Node.js</strong>,
          mais j'aime apprendre de nouvelles technologies,
          et je peux également prendre en charge le déploiement de l’application
          sur un environnement adapté.
        </p>


      </Section>

      <Section
        id="home-2"
        title="Des projets concrets, pas seulement des compétences sur le papier">

        <p>
          Avant de parler de ce que je sais faire, je préfère vous montrer
          ce que je construis.
        </p>

        <p>
          Vous trouverez sur ce portfolio différents projets que j’ai développés,
          depuis des applications web jusqu’à des expérimentations plus techniques.
          Chaque projet me permet de travailler sur des problématiques concrètes :
          architecture, logique métier, bases de données, interfaces, API,
          débogage et déploiement.
        </p>

        <p>
          Mes applications sont développées puis déployées sur mon propre
          <strong>VPS</strong>, que j’administre et conteneurise avec
          <strong>Docker</strong>. Cela me permet de maîtriser une grande partie
          du projet, du développement jusqu’à sa mise en ligne.
        </p>

        <p>
          <strong>Vous avez un projet en tête  ?</strong>
          Contactez-moi pour en discuter et voir ensemble ce que je peux réaliser
          pour vous.
        </p>
      </Section>

      <Section
        id="home-3"
        title="Ma manière de développer"
      >
        <p>
          J’aime comprendre les choses avant de commencer à les construire.
          Pour un projet, je cherche donc d’abord à comprendre le besoin,
          le fonctionnement attendu et les contraintes à prendre en compte.
        </p>

        <p>
          Je préfère avancer étape par étape, en gardant une structure claire
          et en vérifiant régulièrement que ce qui est développé correspond
          réellement à ce qui était prévu.
        </p>

        <p>
          Quand je rencontre un problème, je prends le temps de chercher
          d’où il vient plutôt que de chercher uniquement une solution rapide.
          C’est une façon de travailler qui me vient aussi de mon ancien métier :
          mesurer, réfléchir, trouver une solution et aller jusqu’au bout.
        </p>

        <p>
          Mon objectif reste simple : développer une solution qui fonctionne,
          qui soit compréhensible et qui puisse évoluer avec le temps.
        </p>
      </Section>
      <Section
        id="home-4"
        title="Dernière réalisation"
        isLast={true}

      >
        <CardProject
          title="Vtc-couchevel-saint-tropez"
          url='https://vtc-courchevel-saint-tropez.devponcet07.fr'
          img="/static/imageProject/screenVtc.png"
          inProgress={true}
          tags={["Svelte-kit", "Postgres", "express", 'typescript']}>
          <p></p>
        </CardProject>
        <div className={styles.divOtherRealisation}>
          <a className={styles.otherRealisation} href="/realisations">Découvrir mes autres réalisations</a>
        </div>
      </Section>
    </Main>
    <Footer />
  </App>
  )
}
