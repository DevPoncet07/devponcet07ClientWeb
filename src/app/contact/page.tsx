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
        title="Contact"
      >
        <p>
          telephone : 06 37 72 17 07
        </p>

        <p>
          Mail: devponcet07@gmail.com
        </p>
      </Section>

      <Section
        id="contact-2"
        title="Un projet ? Parlons-en"
      >
        <p>
          Vous avez besoin d’un site web, d’une application ou d’un outil
          développé sur mesure ? Je suis disponible pour discuter de votre
          projet et voir ensemble comment le réaliser.
        </p>

        <p>
          Que vous partiez d’une idée précise ou que vous ayez simplement
          un besoin à résoudre, vous pouvez me contacter pour en discuter.
          Je peux intervenir sur le développement frontend et backend,
          la création d’API, la gestion des données ou encore le déploiement
          de votre application.
        </p>

        <p>
          <strong>Pas besoin d’avoir déjà toutes les réponses :</strong>
          un premier échange permet simplement de comprendre votre besoin,
          de discuter des différentes possibilités et de voir si je peux
          vous accompagner.
        </p>
      </Section>

      <Section
        id="contact-3"
        title="Un premier échange, simplement"
        isLast={true}
      >
        <p>
          Je privilégie les échanges simples et directs. Avant de parler
          de technologie, je cherche d’abord à comprendre ce que vous
          souhaitez réaliser et les objectifs de votre projet.
        </p>

        <p>
          Nous pouvons ensuite définir ensemble les fonctionnalités à prévoir,
          les contraintes du projet et la solution la plus adaptée.
          L’objectif est d’avoir une vision claire de ce qui doit être réalisé
          avant de commencer le développement.
        </p>

        <p>
          Que votre projet soit encore au stade de l’idée ou que vous ayez
          déjà un cahier des charges, <strong>n’hésitez pas à me contacter</strong>.
          Je serai ravi d’échanger avec vous.
        </p>
      </Section>
    </Main>
    <Footer />
  </App>
  )
}
