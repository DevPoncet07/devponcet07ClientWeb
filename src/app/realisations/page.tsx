import App from "@/components/app/App";
import CardProject from "@/components/cards/CardProject/CardProject";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Section from "@/components/sections/section/Section";


export default function Home() {
  return (<App>
    <Header/>
    <Main>
      <Section id="realisation-1" title="Application web full stack">
        <CardProject title="Skillfusion" url='https://skillfusion.devponcet07.fr'>
          <p>skillfusion est une platforme de partage de tutoriel manuel</p>
        </CardProject>
      </Section>

      <Section id="realisation-2" title="Application bureau python">
        <p></p>
      </Section>

      <Section id="realisation-3" title="Ce site web">
        <p></p>
      </Section>
    </Main>
    <Footer/>
    </App>
  )
}
