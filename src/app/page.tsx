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
          id="section1"
          title="À propos du portfolio"
        >
          <p>
            Ce portfolio a été conçu comme une vitrine moderne de mon travail
            de développeur web front-end.
          </p>

          <p>
            Vous y trouverez une sélection de projets, des expérimentations
            UI/UX ainsi qu’un aperçu de mes compétences autour de{" "}
            <strong>React</strong>, <strong>Next.js</strong>,
            l’animation web et le design d’interfaces modernes.
          </p>

          <p>
            Mon objectif est de créer des expériences numériques fluides,
            performantes et visuellement impactantes, avec une attention
            particulière portée aux détails, à l’accessibilité et à
            l’expérience utilisateur.
          </p>
        </Section>

        <Section
          id="section2"
          title="Ma manière de développer"
        >
          <p>
            J’accorde une grande importance à la qualité du code, à
            l’architecture des composants et à la maintenabilité des projets.
          </p>

          <p>
            Chaque interface est pensée pour être responsive, rapide et
            intuitive, tout en conservant une identité visuelle forte et
            moderne.
          </p>

          <p>
            J’aime également expérimenter avec les animations, les transitions
            et les interactions afin de rendre chaque projet plus vivant et
            immersif.
          </p>
        </Section>
    </Main>
    <Footer/>
    </App>
  )
}
