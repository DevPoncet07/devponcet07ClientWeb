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
        id="about-1"
        title="Mon parcours"
      >
        <p>
          Âgé de 30 ans, je me suis reconverti dans le développement web après
          plus de dix ans dans la charpente et la menuiserie.
        </p>

        <p>
          Pendant ces années, j’ai travaillé à mon compte et appris à gérer
          des projets de A à Z : comprendre les besoins d’un client, trouver
          des solutions, organiser le travail et aller jusqu’à la réalisation.
          J’y ai aussi développé le goût du travail bien fait, la rigueur,
          l’autonomie et le sens du détail.
        </p>

        <p>
          L’informatique m’intéresse depuis plusieurs années. Bien avant ma
          reconversion, j’ai commencé à apprendre la programmation seul,
          notamment avec <strong>Python</strong>, en développant des scripts
          et de petits logiciels pour comprendre et expérimenter.
        </p>
      </Section>

      <Section
        id="about-2"
        title="Du code à la création de projets"
        isLast={true}
      >
        <p>
          Au fil du temps, ce qui était au départ une curiosité personnelle
          est devenu un véritable projet professionnel. J’ai donc décidé
          de me former au développement d’applications et d’en faire
          aujourd’hui mon activité.
        </p>

        <p>
          Ce que j’aime dans le développement, c’est surtout le fait de partir
          d’un problème et de chercher comment le résoudre. Comprendre comment
          les choses fonctionnent, essayer différentes approches, corriger
          ce qui ne fonctionne pas et finalement arriver à quelque chose
          de concret : c’est cette partie-là qui me plaît.
        </p>

        <p>
          Je continue aujourd’hui à apprendre et à expérimenter à travers
          mes projets personnels. Vous pouvez retrouver une partie de ce
          travail sur mon <strong>GitHub</strong>, avec des projets allant
          de scripts Python et d’expérimentations techniques à des applications
          web plus complètes.
        </p>
      </Section>
    </Main>
    <Footer />
  </App>
  )
}
