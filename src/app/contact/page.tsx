import App from "@/components/app/App";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Section from "@/components/sections/section/Section";


export default function Home() {
  return (<App>
    <Header />
    <Main>
      <Section
        id="contact-1"
        title="Me contacter"
      >
        <p>
          Vous avez un projet, une idée ou besoin d’un développeur Fullstack pour
          concevoir une application web moderne et performante ?
        </p>

        <p>
          Je suis disponible pour échanger autour de vos besoins, qu’il s’agisse
          d’un développement backend, d’une application complète, d’une API,
          d’un déploiement sur serveur ou d’un accompagnement technique.
        </p>

        <p>
          Vous pouvez me contacter via le formulaire de contact du site ou directement
          par email. Je répondrai dans les meilleurs délais afin de discuter de votre projet.
        </p>
      </Section>

      <Section
        id="contact-2"
        title="Collaboration & projets"
      >
        <p>
          Je recherche des projets stimulants me permettant de mettre en pratique
          mes compétences techniques tout en continuant à évoluer dans le développement web.
        </p>

        <p>
          J’accorde une importance particulière à la communication, à la compréhension
          des besoins et à la création de solutions fiables, maintenables et adaptées
          aux objectifs du projet.
        </p>

        <p>
          Que ce soit pour une collaboration freelance, un projet personnel,
          une mission ponctuelle ou une opportunité professionnelle, n’hésitez
          pas à me contacter.
        </p>
      </Section>
    </Main>
    <Footer />
  </App>
  )
}
