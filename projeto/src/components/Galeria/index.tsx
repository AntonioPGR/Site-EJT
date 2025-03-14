"use client"

import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Imagens } from "./Imagens";
import Imagem from "./Imagem";
import Image from "next/image";

export default function Galeria() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="galeria"
      className="
        py-6 px-16 
        bg-branco
        dark:bg-azul 
        flex 
        flex-col 
        gap-6
      "
    >
      <div>
        <h2 className="text-azul dark:text-branco text-4xl font-bold uppercase border-b-4 border-amarelo">
          Galeria de Imagens:
        </h2>
      </div>
      <div className="flex w-full justify-between items-center gap-4">
        <IoIosArrowBack
          className="w-12 h-12 text-amarelo bg-azul rounded-full cursor-pointer p-2"
          onClick={() => scroll("left")}
        />
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll w-full scrollbar-none"
          style={{ scrollBehavior: "smooth" }}
        >
          {Imagens.map((image, index) => (
            <div className="
              relative 
              group
              w-[450px]
              h-[253.13px]
              flex-none
            ">
              <Image 
                src={image.image_url}
                alt={image.alt}
                key={index}
                width={450} 
                height={253.13}
                className="
                  rounded-lg 
                  w-[450px]
                  min-w-[450px]
                  max-h-[253.13px]
                  object-cover
                "
              />
              <div 
                className="
                  bg-preto
                  text-center
                  w-[450px]
                  h-full
                  absolute
                  top-0
                  justify-center
                  items-center
                  hidden
                  group-hover:flex
                  opacity-0
                  group-hover:opacity-50
                  transition-opacity
                  duration-300
                  delay-200
                "
              >
                <p className="text-white">{image.descricao}</p>
              </div>
            </div>
          ))}
        </div>
        <IoIosArrowForward
          className="w-12 h-12 text-amarelo bg-azul rounded-full cursor-pointer p-2"
          onClick={() => scroll("right")}
        />
      </div>
    </section>
  );
}
