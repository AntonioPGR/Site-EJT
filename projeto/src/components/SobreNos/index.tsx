import Image from "next/image";
import "./styles.css";

export default function SobreNos(){
  return <>
    <section className="banner">
      <h1>SOBRE NÓS:</h1>
    </section>
    <section className="sobre" id="sobre">
      <div className="texto">
        <h2>Quem Somos?</h2>
        <p>A <strong>EJ Turing</strong> é a Empresa Júnior de Engenharia de Computação do Instituto Federal (IF), formada por estudantes apaixonados por tecnologia e inovação. Nossa missão é criar <span className="destaque">soluções criativas e eficientes</span> para o mercado, enquanto desenvolvemos habilidades técnicas e gerenciais essenciais para nossa formação.</p>
        <h2>O Que Fazemos?</h2>
        <p>Atuamos em diversas áreas da computação, incluindo <span className="destaque">desenvolvimento web</span>, <span className="destaque">automação</span>, <span className="destaque">inteligência artificial</span> e <span className="destaque">consultoria tecnológica</span>. Nosso diferencial está na <em>aplicação prática</em> do conhecimento adquirido na graduação, sempre com foco em <strong>qualidade</strong> e <strong>excelência</strong>.</p>
        <h2>Por Que Escolher a EJ Turing?</h2>
        <p>Como empresa júnior, oferecemos serviços a preços acessíveis, garantindo que nossos membros adquiram experiência real no mercado, enquanto entregamos projetos <span className="destaque">inovadores e de alto impacto</span>.</p>
      </div>
      <div className="imagem">
        <Image src="/image 5.png" alt="Foto da empresa" width={459} height={660} />
      </div>
    </section>
  </>
}