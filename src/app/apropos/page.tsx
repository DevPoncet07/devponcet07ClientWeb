import App from "@/components/app/App";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Section from "@/components/sections/section/Section";


export default function Home() {
  return (<App>
    <Header/>
    <Main>
       <Section
  id="about-1"
  title="Mon parcours"
>
  <p>
    Âgé de 30 ans, je suis actuellement en reconversion professionnelle dans
    le développement web après plus de 10 années d’expérience dans le domaine
    de la charpente et de la menuiserie.
  </p>

  <p>
    Ce parcours m’a permis de développer des qualités essentielles que
    j’applique aujourd’hui dans le développement : rigueur, autonomie,
    capacité d’adaptation, l'écoute du client et le sens du détail.
  </p>

  <p>
    Passionné par l’informatique depuis plusieurs années, j’ai commencé à
    développer des scripts et petits logiciels en <strong>Python</strong> en
    autodidacte bien avant ma reconversion professionnelle.
  </p>
</Section>

<Section
  id="about-2"
  title="Du code à la création de projets"
>
  <p>
    Au fil du temps, cette passion est devenue une véritable orientation
    professionnelle. J’ai approfondi mes compétences en développement web,
    backend et architecture applicative afin de construire des projets complets
    et modernes.
  </p>

  <p>
    Mon profil mélange aujourd’hui expérience terrain et compétences techniques,
    avec une approche orientée résolution de problèmes, logique et conception
    de solutions fiables.
  </p>

  <p>
    Vous pouvez retrouver sur mon <strong>GitHub</strong> plusieurs projets
    personnels développés au fil des années, allant de scripts Python à des
    applications web plus complètes, qui reflètent ma progression et ma
    curiosité technique.
  </p>
</Section>
    </Main>
    <Footer/>
    </App>
  )
}
