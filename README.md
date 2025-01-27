# **Task Manager - Frontend**

Este repositório contém o código do frontend do sistema **Task Manager**, desenvolvido com **Next.js** e estilizado com **Tailwind CSS** e **ShadCN**.

---

## **Tecnologias Utilizadas**
- **Next.js**: Framework para renderização no lado do servidor e aplicações React.
- **React Query**: Gerenciamento de estado e cache de dados.
- **Tailwind CSS**: Estilização responsiva e utilitária.
- **ShadCN**: Componentes estilizados e configuráveis.
- **TypeScript**: Tipagem estática para maior segurança no código.

---

## **Pré-requisitos**
- **Node.js** (>= 18.18.0 ou superior).
- **Yarn** ou **npm** para gerenciar pacotes.
- Backend em execução para conectar o frontend.

---

## **Instalação e Configuração**
### 1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/task-manager-frontend.git
   cd task-manager-frontend
  ```

Instale as dependências:
````
npm install
````

Configure a variável de ambiente para apontar para o backend. Crie um arquivo .env.local na raiz do projeto:
````
NEXT_PUBLIC_API_URL=http://localhost:3000
````

Inicie o servidor de desenvolvimento:
````
npm run dev
````

O frontend estará disponível em http://localhost:3001.

Estrutura do Projeto
````
src/
├── components/           # Componentes reutilizáveis
├── pages/                # Páginas e rotas do Next.js
│   ├── index.tsx         # Página inicial
├── styles/               # Arquivos de estilo
│   └── globals.css       # Estilização global com Tailwind CSS
└── utils/                # Utilitários e helpers
````
# Funcionalidades
- Integração com o backend para gerenciamento de tarefas.
- Interface responsiva e moderna.
- Suporte a cache e sincronização de dados com React Query.
  
# Como Contribuir
Faça um fork do repositório.

Crie uma branch para sua feature:

````
git checkout -b feature/nova-feature
````

Faça o commit das alterações:
````
git commit -m "Adicionada nova feature"
````

Envie para o repositório remoto:
````
git push origin feature/nova-feature
````

Abra um Pull Request.

# Licença
Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais informações.


