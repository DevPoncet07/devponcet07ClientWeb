import App from "@/components/app/App";

import CardProject from "@/components/cards/CardProject/CardProject";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Section from "@/components/sections/section/Section";


export default function Home() {
  return (<App>
    <Header />
    <Main>
      <Section id="realisation-1" title="Application web full stack">
        <CardProject title="Skillfusion" url='https://skillfusion.devponcet07.fr'>
          <p>skillfusion est une platforme de partage de tutoriel manuel</p>
        </CardProject>
      </Section>

      <Section id="realisation-2" title="Application bureau python">

        <CardProject 
          title="Jeu d'echec en python" 
            url='https://github.com/DevPoncet07/Jeu_Echec_Python'
            img="/static/imageProject/chessScreen.png">
          <p>Mon jeu d'echec entierement codé en python</p>
        </CardProject>

        <CardProject title="Jeu de la vie  en python" url='https://github.com/DevPoncet07/jeu_de_la_vie'>
          <p>jeu de la vie codé en python</p>
        </CardProject>

        <CardProject title="Visualisateur fractal  en python" url='https://github.com/DevPoncet07/mandelbrot_fractale'>
          <p>visualisateur de la farctal de mandelbrot codé en python</p>
        </CardProject>
      </Section>

      <Section id="realisation-3" title="Ce site web">
        <CardProject title="Ce site web" url='https://devponcet07.fr'>
          <p>Site developper avec nextjs </p>
        </CardProject>
      </Section>
    </Main>
    <Footer />
  </App>
  )
}
