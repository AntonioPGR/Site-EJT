import Image from "next/image";

interface ServicoProps{
  nome: string;
  descricao: string;
  image_url: string;
  alt: string
}

export default function Imagem(props: ServicoProps){
  return <div
    className="
      flex
      flex-col
      bg-cinza
      dark:bg-branco
      rounded-lg
      min-w-[400px]
    "
  >
    <Image 
      src={props.image_url} 
      alt={props.alt} 
      width={400} 
      height={125}
      className="
        rounded-lg
        w-[400px]
        h-[125px]
        object-cover
      "
    />
    <div
      className="
        py-2
        px-4
        flex
        flex-col
        gap-2
      "
    >
      <h3
        className="
          text-azul
          border-b-2
          border-amarelo
          font-bold
          text-3xl
          text-center
        "
      >{props.nome}</h3>
      <p
        className="
          text-2xl
          text-justify
        "
      >{props.descricao}</p>
    </div>
  </div>
}