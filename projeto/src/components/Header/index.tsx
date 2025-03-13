"use client"
import Image from "next/image";
import "./styles.css";


export default function Header(){

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDarkMode = html.classList.contains("dark");

    if (isDarkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return <header className="header">
    <Image src={`/ej.png`} alt="EJ Turing" width={127} height={100} />
    <nav className="nav-menu">
      <a href="#sobre">SOBRE NÓS</a>
      <a href="#servicos">SERVIÇOS</a>
      <a href="#contato">CONTATO</a>
      <button id="toggle-theme" onClick={toggleTheme}></button> 
    </nav>
  </header>
}