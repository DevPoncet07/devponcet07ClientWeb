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
  id="skills-1"
  title="Compétences techniques"
>
  <p>
    Au cours de ma formation et de mes projets personnels, j’ai développé des
    compétences solides en développement web Fullstack avec une préférence
    marquée pour le backend et la logique applicative.
  </p>

  <p>
    Je travaille principalement avec <strong>JavaScript</strong>,
    <strong> TypeScript</strong> et <strong>Python</strong>, aussi bien pour
    le développement d’API, la gestion de bases de données que la création
    d’interfaces web modernes.
  </p>

  <p>
    J’utilise régulièrement des frameworks et outils modernes tels que
    <strong> React</strong>, <strong>Next.js</strong>,
    <strong> SvelteKit</strong>, ainsi que des ORM comme
    <strong> Prisma</strong> et <strong>Sequelize</strong>.
  </p>

  <p>
    Je possède également des connaissances en <strong>GraphQL</strong>,
    architecture backend, gestion d’API REST, conteneurisation avec
    <strong> Docker</strong> et déploiement d’applications sur VPS.
  </p>
</Section>

<Section
  id="skills-2"
  title="Ma manière de travailler"
  isLast={true}
>
  <p>
    J’accorde une grande importance à la qualité du code, à l’organisation des
    projets et à la mise en place de structures maintenables et évolutives.
  </p>

  <p>
    Mon approche du développement repose sur la compréhension des besoins,
    la recherche de solutions fiables et la création d’applications pensées
    pour durer dans le temps.
  </p>

  <p>
    J’utilise quotidiennement des outils comme <strong>Git</strong>,
    <strong> GitHub</strong> et <strong>Docker</strong> afin de travailler
    dans un environnement professionnel.
  </p>

  <p>
    Je continue également à apprendre et expérimenter de nouvelles technologies
    afin d’améliorer constamment mes compétences et mes méthodes de développement.
  </p>
</Section>
    </Main>
    <Footer/>
    </App>
  )
}
