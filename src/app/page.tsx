import App from "@/components/app/App";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Hero from "@/components/sections/hero/Hero"
import Section from "@/components/sections/section/Section";


export default function Home() {
  return (<App>
    <Header/>
    <Hero/>
    <Main>
      <Section
  id="home-1"
  title="À propos du portfolio"
>
  <p>
    Ce portfolio a été conçu pour présenter mes compétences en développement
    web Fullstack ainsi que les différentes solutions que je suis capable de
    concevoir.
  </p>

  <p>
    Spécialisé dans le développement backend et l’architecture applicative,
    je développe des applications modernes, performantes et maintenables en
    utilisant des technologies récentes adaptées aux besoins de chaque projet.
  </p>

  <p>
    Vous trouverez ici plusieurs projets et applications déployés sur un
    environnement VPS administré et conteneurisé avec <strong>Docker</strong>,
    afin de démontrer aussi bien mes compétences en développement qu’en
    déploiement et gestion d’infrastructure.
  </p>

 
</Section>

<Section
  id="home-2"
  title="Ma manière de développer"
>
  <p>
    J’accorde une attention particulière à la qualité du code, à la structure
    des projets et à la conception d’architectures fiables et évolutives.
  </p>

  <p>
    Chaque application est pensée pour être performante, sécurisée et simple
    à maintenir, avec une approche orientée bonnes pratiques et expérience utilisateur.
  </p>

  <p>
    Mon workflow s’appuie sur des outils professionnels comme
    <strong> Git</strong>, <strong>GitHub</strong> et <strong>Docker</strong>,
    me permettant de développer et déployer des applications dans des
    environnements proches de la production.
  </p>

  <p>
    À travers ce portfolio, mon objectif est de proposer une vision concrète
    de mon savoir-faire technique et de ma capacité à accompagner des projets
    web modernes, de la conception jusqu’à la mise en ligne.
  </p>
</Section>
    </Main>
    <Footer/>
    </App>
  )
}
