"use client"
import Image from "next/image";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const links = [
  { href: "#sobre", label: "SOBRE NÓS" },
  { href: "#servicos", label: "SERVIÇOS" },
  { href: "#contato", label: "CONTATO" },
]

export default function Header(){
  const [theme, setTheme] = useState(document.documentElement.classList.contains("dark") ? "dark" : "light");

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDarkMode = html.classList.contains("dark");

    if (isDarkMode) {
      setTheme("light");
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return <header 
    className="
      flex
      justify-between
      items-center
      py-3
      px-10
      dark:bg-azul
    "
  >
    {
      theme === "dark" ? 
      <Image 
        src={`/logo_curta/branca.png`} 
        alt="EJ Turing" 
        width={100} 
        height={100} 
        className="
          w-[100px]
          aspect-[127/100.00]
        "
      />
      :
      <Image 
        src={`/logo_curta/normal.png`} 
        alt="EJ Turing" 
        width={100} 
        height={100} 
        className="
          w-[100px]
          aspect-[127/100.00]
        "
      />
    }
    <nav className="
      flex
      items-center
      gap-5
      
    "> 
      {
        links.map((link, index) => <a 
          key={index} 
          href={link.href}
          className="
            text-azul
            dark:text-branco
            hover:underline
            text-2xl
          "
          >{link.label}</a>)
      }
      {
        theme === "dark" ?
        <MdLightMode
          onClick={toggleTheme}
          className="
            w-10
            h-10
            text-branco
          "
        />
        :
        <MdDarkMode 
          onClick={toggleTheme} 
          className="
            w-10
            h-10
            text-azul
          "
        />
      }
    </nav>
  </header>
}