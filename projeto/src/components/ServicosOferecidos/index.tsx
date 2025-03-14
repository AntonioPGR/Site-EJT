"use client"

import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Servicos } from "./Servicos";
import Servico from "./Servico";

export default function ServicosOferecidos() {
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
    <section className="py-6 px-16 bg-cinza-claro flex flex-col gap-6">
      <div>
        <h2 className="text-azul dark:text-amarelo text-4xl font-bold uppercase border-b-4 border-amarelo">
          Serviços Oferecidos:
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
          {Servicos.map((servico, index) => (
            <Servico key={index} {...servico} />
          ))}
        </div>
        <IoIosArrowForward
          className="w-12 h-12 text-amarelo bg-azul rounded-full cursor-pointer p-2"
          onClick={() => scroll("right")}
        />
      </div>
      <style>
        {`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}
