import Image from "next/image";
import "./styles.css";

export default function Footer(){
  return <footer className="footer">
    <Image src="/ej_longa.png" alt="Empresa junior" width={225.06} height={64} />
    <p>Todos os direitos reservados © 2025</p>
    <Image src="/if.png" alt="Instituto Federal" width={100} height={100} />
    <Image src="/eng.png" alt="Engenharia logo" width={100} height={100} />
  </footer>
}