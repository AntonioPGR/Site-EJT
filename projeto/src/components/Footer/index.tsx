import Image from "next/image";

export default function Footer(){

  return <footer 
  className="
    flex
    justify-between
    items-center
    py-3
    px-10
    dark:bg-azul
    gap-2
  ">
    <div
      className="
        dark:bg-branco
        p-2
      "
    >
      <Image 
        src="/logo_longa/normal.png" 
        alt="Empresa junior" 
        width={225.06} 
        height={64.60} 
        className="
          w-[225.06px]
          aspect-[225.06 / 64.60]
        "
      />
    </div>
    <p
      className="
        text-lg
        text-azul
        dark:text-white
        uppercase
        text-center
        grow-1
      "
    >Todos os direitos reservados © 2025</p>
    <div
      className="
        dark:bg-branco
        p-2
      "
    >
      <Image
        src="/correlatos/if.png"
        alt="Instituto Federal"
        width={100.17}
        height={100}
        className="
          h-[90px]
          w-[98.8px]
        "
      />
    </div>
    <div
      className="
        dark:bg-branco
        p-2
      "
    >
      <Image
        src="/correlatos/engenharia.png"
        alt="Engenharia logo"
        width={100.17}
        height={100}
        className="
          w-[90px]
          h-[90px]
          aspect-[100.17 / 100.00]
        "
      />
    </div>
  </footer>
}