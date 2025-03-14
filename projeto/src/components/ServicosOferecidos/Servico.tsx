import Image from "next/image";

interface ServicoProps{
  nome: string;
  descricao: string;
  image_url: string;
}

export default function Servico(props: ServicoProps){
  return <div
    className="
      flex
      flex-col
      bg-cinza
      rounded-lg
      min-w-[400px]
    "
  >
    <Image 
      className="
        w-full
        rounded-lg
        height-[125px]
      "
      src={props.image_url} 
      alt={props.nome} 
      width={400} 
      height={125}
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
        "
      >{props.nome}</h3>
      <p
        className="
          text-2xl
        "
      >{props.descricao}</p>
    </div>
  </div>
}