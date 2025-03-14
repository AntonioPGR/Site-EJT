import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Galeria from "@/components/Galeria";
import Header from "@/components/Header";
import ServicosOferecidos from "@/components/ServicosOferecidos";
import SobreNos from "@/components/SobreNos";
import Image from "next/image";

export default function Home() {
  return <>
    <Header />
    <SobreNos />
    <ServicosOferecidos />
    <Galeria />
    <Contato />
    <Footer />
  </>;
}
