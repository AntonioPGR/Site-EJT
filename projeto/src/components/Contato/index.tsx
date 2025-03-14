import './styles.css';

export default function Contato() {
  return <div className="flex w-screen h-[75vh] items-center">
    <div className="entrar_contato">
      <div className="titulo">ENTRE EM CONTATO</div>
      <div className="linha"></div>
      <p className="frase_contato">Precisando dos nossos serviços? Entre em contato e agende uma reunião!</p>
      <input type="text" className="input" placeholder="Nome e sobrenome" />
      <input type="email" className="input" placeholder="E-mail" />
      <input type="text" className="input" placeholder="Mensagem" />
      <button className="btn-enviar">ENVIAR</button>
    </div>
    <div className="direita">
      <div className="onde_estamos">
        <div className="titulo">ONDE ESTAMOS</div>
        <div className="linha"></div>
        <p className="frase_contato">Av. Dirce Pereira Rosa, 300 - Jardim Esperança, Poços de Caldas - MG, 37713-100</p>
        <button className="btn-enviar">
          <i className="fas fa-map-marker-alt"></i> Veja no Maps
        </button>                
      </div>
      <div className="redes_sociais">
        <div className="titulo">REDES SOCIAIS</div>
        <div className="linha"></div>
        <p className="frase_contato">Nos siga nas redes sociais para ficar por dentro das novidades!</p>
        <div className="redes-sociais-icones">
          <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/" target="_blank"><i className="fab fa-github"></i></a>
          <a href="mailto:seuemail@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>
  </div>
}