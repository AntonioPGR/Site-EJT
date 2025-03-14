import Image from "next/image";

const SobreNos = () => {
  return (
    <section className="relative w-full flex flex-col items-center text-center py-12 px-6 transition-colors duration-300 bg-gray-100 dark:bg-[#0B1E3C]">
      <div className="absolute top-0 w-full h-80 md:h-96 lg:h-[270px] overflow-hidden flex justify-center items-center">
        <Image
          src="/sobrenos/fundo.jpg"
          alt="Fundo espacial, Foto tirada por NASA na Unsplash https://unsplash.com/pt-br/@nasa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash https://unsplash.com/pt-br/fotografias/foto-do-espaco-sideral-Q1p7bh3SHj8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <h2 className="absolute top-[15%] transform -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg z-10">
        SOBRE NÓS:
      </h2>
      <div className="relative w-[95%] max-w-2xl md:max-w-xl lg:max-w-lg p-8 rounded-lg shadow-lg transition-all duration-300 bg-white dark:bg-[#1A2B4C] text-black dark:text-white mt-40">
        <p className="text-md text-justify mt-4 leading-relaxed">
          A EJ Turing é a Empresa Júnior de Engenharia de Computação do Instituto Federal (IF). Formada por estudantes apaixonados por tecnologia e inovação, nossa missão é proporcionar soluções criativas e eficientes para o mercado, ao mesmo tempo em que desenvolvemos habilidades técnicas e gerenciais essenciais para nossa formação.
        </p>
        <p className="text-md text-justify mt-4 leading-relaxed">
          Atuamos em diversas áreas da computação, incluindo desenvolvimento web, automação, inteligência artificial e consultoria tecnológica. Nosso diferencial está na aplicação prática do conhecimento adquirido na graduação, sempre com foco em qualidade e excelência.
        </p>
        <p className="text-md text-justify mt-4 leading-relaxed">
          Como empresa júnior, oferecemos serviços a preços acessíveis, garantindo que nossos membros tenham experiência real no mercado, enquanto entregamos projetos inovadores e de alto impacto.
        </p>
      </div>
    </section>
  );
};

export default SobreNos;