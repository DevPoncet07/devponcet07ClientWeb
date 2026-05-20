import App from "@/components/app/App";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Hero from "@/components/sections/hero/Hero"


export default function Home() {
  return (<App>
    <Header/>
    <Main>
      <Hero/>
    </Main>
    <Footer/>
    </App>
  )
}
