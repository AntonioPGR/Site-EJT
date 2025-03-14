# EJ Turing - Landing Page

## 📌 Sobre o Projeto
Esta é a landing page oficial da **EJ Turing**, a empresa júnior do IFSULDEMINAS - Campus Poços de Caldas. O site apresenta informações institucionais, serviços prestados, uma galeria de fotos e formas de contato. Além disso, faz parte de um dos passos do processo seletivo da empresa.

## 🚀 Tecnologias Utilizadas
- [Next.js](https://nextjs.org/) - Framework React para aplicações web modernas
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones para React

## 📂 Estrutura do Projeto
```
📦 SITE-EJT
└── 📂 projeto
    ├── 📜                            #Arquivos de configuração do projeto
    ├── 📂 public                     #Imagens e arquivos estáticos
    └── 📂 src                        # Pasta com o código da aplicação
        ├── 📂 components             # Componentes individuais por seção
        │   ├── 📂 Contato            # Seção "Contato"
        │   ├── 📂 Footer             # Seção de Rodapé
        │   ├── 📂 Galeria            # Seção "Galeria de Fotos"
        │   ├── 📂 Header             # Seção de Cabeçalho
        │   ├── 📂 ServiçosOferecidos # Seção "Serviços Prestados"
        │   └── 📂 SobreNos           # Seção "Sobre Nós"
        └── 📂 app                    #Rotas do Next
            ├── favicon.ico           # Icone da página
            ├── globals.css           #Setup do tailwind e suas variaveis
            ├── layout.tsx            #Setup do NextJs e estrutura HTML
            └── page.tsx              #Importação dos componentes da página
```

## 📢 Funcionalidades
- **Apresentação Institucional**: Informações sobre a EJ Turing.
- **Galeria de Fotos**: Exibição de imagens de projetos e eventos.
- **Serviços**: Lista dos serviços prestados.
- **Contato**: Informações para comunicação e formulário de contato.

## 🛠 Melhorias Futuras
- Criar uma biblioteca de componentes reutilizáveis (botões, cards, etc.).
- Estruturar um backend para fornecer os dados
- Adicionar variáveis de ambiente para configurações futuras, se necessário.

## 📦 Como Rodar o Projeto
### Pré-requisitos
Certifique-se de ter instalado:
- Node.js (versão 16 ou superior)
- Gerenciador de pacotes (npm ou yarn)

### Passos para execução
```sh
# Clone o repositório
git clone https://github.com/AntonioPGR/Site-EJT.git

# Acesse a pasta do projeto
cd /Site-EJT/projeto/

# Instale as dependências
npm install  # ou yarn install

# Rode o servidor de desenvolvimento
npm run dev  # ou yarn dev
```
O site estará disponível em `http://localhost:3000/`.

## 🤝 Contribuintes
- **Antonio Pacheco** - [antoniopgr06@gmail.com](mailto:antoniopgr06@gmail.com) ou @AntonioPGR
- **Vinicius** - [vinilecrofi@gmail.com](mailto:vinilecrofi@gmail.com) ou @Vinicius-Domiingues
- **Samuel** - [samuelcagnani@gmail.com](mailto:samuelcagnani@gmail.com) ou @SamuelCagnani