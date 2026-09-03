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
        id="skills-1"
        title="Compétences techniques"
      >
        <p>
          Je développe principalement des applications web Fullstack, avec une
          préférence pour le <strong>backend</strong> et la logique applicative.
          J’aime particulièrement travailler sur la partie qui fait fonctionner
          une application : traitement des données, logique métier, API et bases
          de données, tout en prenant en compte la <strong>sécurité</strong>,
          l’<strong>accessibilité</strong> et les bonnes pratiques de
          <strong>référencement</strong>.
        </p>

        <p>
          Je travaille principalement avec <strong>JavaScript</strong>,
          <strong> TypeScript</strong> et <strong>Python</strong>.
          Côté frontend, j’utilise notamment <strong>React</strong> et
          <strong>Next.js</strong>, ainsi que <strong>SvelteKit</strong>.
          Je porte également une attention particulière à la conception
          d’interfaces accessibles, performantes et adaptées aux différents
          supports.
        </p>

        <p>
          Pour le backend, je travaille avec <strong>Node.js</strong> et ses
          différents outils, notamment pour la création d’<strong>API REST</strong>.
          J’utilise également des ORM comme <strong>Prisma</strong> et
          <strong>Sequelize</strong> pour gérer les échanges avec les bases
          de données. La validation des données, la gestion des accès et la
          protection des différentes parties de l’application font partie
          des points auxquels je prête attention.
        </p>

        <p>
          Je travaille avec différentes bases de données, notamment
          <strong>PostgreSQL</strong> et <strong>SQLite</strong>, et possède
          également des connaissances en <strong>GraphQL</strong>.
          Je m’intéresse également à la manière dont les données sont
          structurées et exploitées afin de conserver des applications
          fiables et faciles à faire évoluer.
        </p>

        <p>
          Je peux également prendre en charge la partie déploiement :
          <strong>Docker</strong>, configuration d’un environnement Linux,
          administration d’un <strong>VPS</strong> et mise en ligne
          d’applications web. Je prends aussi en compte les aspects liés
          à la <strong>sécurité</strong>, aux performances et au
          <strong>référencement naturel (SEO)</strong> lors de la mise en ligne
          d’un projet.
        </p>
      </Section>

      <Section
        id="skills-2"
        title="Ma manière de travailler"
        isLast={true}
      >
        <p>
          Je connais les principales <strong>méthodes Agile</strong> et leurs
          principes, notamment le travail par itérations, la priorisation des
          tâches et l’adaptation aux besoins qui peuvent évoluer au cours
          d’un projet.
        </p>

        <p>
          Je suis également à l’aise avec les outils et les usages liés à
          l’<strong>intelligence artificielle</strong>. Je connais notamment
          le fonctionnement des <strong>agents IA</strong> et des systèmes
          d’<strong>orchestration</strong>, et je m’intéresse à leur intégration
          dans les applications et les workflows de développement.
        </p>

        <p>
          L’<strong>autonomie dans l’apprentissage</strong> fait partie de mes
          points forts. Je suis habitué à apprendre par moi-même, à chercher
          dans la documentation, tester différentes approches et résoudre les
          problèmes rencontrés sans forcément avoir besoin d’un accompagnement
          constant.
        </p>

        <p>
          Cette façon d’apprendre me permet également de prendre rapidement en
          main de nouveaux outils ou technologies lorsqu’un projet le nécessite.
          Je préfère comprendre comment les choses fonctionnent plutôt que
          simplement reproduire une solution trouvée ailleurs.
        </p>

        <p>
          Je reste enfin attentif aux évolutions du développement web et aux
          nouvelles pratiques qui peuvent être utiles dans un projet, notamment
          autour de l’IA, de l’automatisation et des outils de développement.
        </p>
      </Section>
    </Main>
    <Footer />
  </App>
  )
}
