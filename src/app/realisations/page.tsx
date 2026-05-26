import App from "@/components/app/App";

import CardProject from "@/components/cards/CardProject/CardProject";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import SectionProject from "@/components/sections/sectionProject/SectionProject";



export default function Home() {
  return (<App>
    <Header />
    <Main>
      <SectionProject id="realisation-1" title="Application web full stack">
        <CardProject 
        title="Skillfusion" 
        url='https://skillfusion.devponcet07.fr'
        img="/static/imageProject/screenSkillfusion.png"
        tags={["Svelte-kit","Express","Postgres",'typescript']}>
          <p>skillfusion est une plateforme de partage de tutoriel manuel</p>
        </CardProject>
      </SectionProject>

      <SectionProject id="realisation-2" title="Application bureau python">

        <CardProject
          title="Jeu d'echec en python"
          url='https://github.com/DevPoncet07/Jeu_Echec_Python'
          img="/static/imageProject/screenChess.png"
          tags={["Python3","Tkinter","Stockfish"]}>
          <p>Jeu d'echec entierement codé en python</p>
        </CardProject>

        <CardProject 
        title="Jeu de la vie  en python" 
        url='https://github.com/DevPoncet07/jeu_de_la_vie'
          img="/static/imageProject/screenGameOfLife.png"
          tags={["Python3"]}>
          <p>jeu de la vie codé en python</p>
        </CardProject>

        <CardProject 
        title="Visualisateur fractal  en python" 
        url='https://github.com/DevPoncet07/mandelbrot_fractale'
        img="/static/imageProject/screenMandelbrotFractal.png"
        tags={["Python3","PILimage"]}>
          <p>visualisateur de la farctal de mandelbrot codé en python</p>
        </CardProject>
      </SectionProject>

      <SectionProject id="realisation-3" title="Ce site web" isLast={true}>
        <CardProject title="Ce site web" url='https://devponcet07.fr'
        tags={["Nextjs",'typescript']}>
          <p>Site developper avec nextjs </p>
        </CardProject>
      </SectionProject>
    </Main>
    <Footer />
  </App>
  )
}
