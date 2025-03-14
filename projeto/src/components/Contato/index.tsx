import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contato() {
  return (
    <div id='contato' className="flex py-25 bg-white dark:bg-azul">
      <div className="bg-white dark:bg-azul w-1/2 flex flex-col justify-center items-center gap-5 ml-[150px]">
        <div className="text-azul dark:text-white text-3xl font-bold uppercase text-center">ENTRE EM CONTATO</div>
        <div className="w-[450px] h-[5px] bg-amarelo dark:bg-amarelo backdrop-blur-[2px]"></div>
        <p className="text-azul dark:text-white text-lg text-center w-[450px]">Precisando dos nossos serviços? Entre em contato e agende uma reunião!</p>
        <input type="text" className="border border-azul dark:border-gray-400 bg-white dark:bg-white w-[450px] h-[50px] p-2 text-lg outline-none placeholder:text-azul dark:placeholder:text-azul placeholder placeholder:text-lg" placeholder="Nome e sobrenome" />
        <input type="email" className="border border-azul dark:border-gray-400 bg-white dark:bg-white w-[450px] h-[50px] p-2 text-lg outline-none placeholder:text-azul dark:placeholder:text-azul placeholder placeholder:text-lg" placeholder="E-mail" />
        <textarea 
          className="border border-azul dark:border-gray-400 bg-white dark:bg-white w-[450px] min-h-[150px] p-2 text-lg outline-none placeholder:text-azul dark:placeholder:text-azul placeholder placeholder:text-lg" placeholder="Mensagem" />
        <button className="border border-azul dark:border-gray-400 bg-white dark:bg-white w-[340px] h-[50px] text-lg font-bold text-azul dark:text-azul uppercase flex justify-center items-center transition duration-300 hover:bg-amarelo">ENVIAR</button>
      </div>
      <div className="flex flex-col gap-[50px] w-1/2">
        <div className="bg-white dark:bg-azul flex flex-col justify-center items-center text-center gap-4 w-[450px]">
          <div className="text-azul dark:text-white text-3xl font-bold uppercase">ONDE ESTAMOS</div>
          <div className="w-[450px] h-[5px] bg-amarelo dark:bg-amarelo backdrop-blur-[2px]"></div>
          <p className="text-azul dark:text-white text-lg">Av. Dirce Pereira Rosa, 300 - Jardim Esperança, Poços de Caldas - MG, 37713-100</p>
          <button className="border border-azul dark:border-gray-400 bg-white  w-[340px] h-[50px] text-lg font-bold text-azul dark:text-azul uppercase flex justify-center items-center transition duration-300 hover:bg-amarelo">
            <FaMapMarkerAlt className="mr-[30px] text-xl" /> Veja no Maps
          </button>
        </div>
        <div className="bg-white dark:bg-azul flex flex-col justify-center items-center text-center gap-4 w-[450px]">
          <div className="text-azul dark:text-white text-3xl font-bold uppercase">REDES SOCIAIS</div>
          <div className="w-[450px] h-[5px] bg-amarelo backdrop-blur-[2px]"></div>
          <p className="text-azul dark:text-white text-lg">Nos siga nas redes sociais para ficar por dentro das novidades!</p>
          <div className="flex gap-5 justify-center mt-2">
            <a href="https://www.instagram.com/" target="_blank" className="text-4xl text-azul dark:text-white transition duration-300 hover:text-black dark:hover:text-gray-400"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" target="_blank" className="text-4xl text-azul dark:text-white transition duration-300 hover:text-black dark:hover:text-gray-400"><FaLinkedin /></a>
            <a href="https://github.com/" target="_blank" className="text-4xl text-azul dark:text-white transition duration-300 hover:text-black dark:hover:text-gray-400"><FaGithub /></a>
            <a href="mailto:seuemail@gmail.com" className="text-4xl text-azul dark:text-white transition duration-300 hover:text-black dark:hover:text-gray-400"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
