# OptiRota - Gerenciamento e Otimização de Rotas Técnicas

## Descrição
O OptiRota é um sistema web desenvolvido para otimizar e gerenciar rotas de técnicos de campo, melhorando a eficiência operacional e reduzindo custos de deslocamento.

## Tecnologias Utilizadas
- React.js
- TypeScript
- Tailwind CSS
- Vite
- Supabase
- Python (Algoritmos de Otimização)

## Configuração do Ambiente

### Pré-requisitos
- Node.js (v18 ou superior)
- npm ou pnpm
- Python 3.8+

### Instalação
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`
4. Inicie o servidor de desenvolvimento: `npm run dev`

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

## Estrutura do Projeto
```
src/
  ├── components/     # Componentes React reutilizáveis
  ├── contexts/       # Contextos React (auth, theme, etc)
  ├── pages/          # Páginas da aplicação
  ├── lib/            # Utilitários e configurações
  ├── routes/         # Configuração de rotas
  └── styles/         # Estilos globais e temas
```

## Scripts Disponíveis
- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção localmente
- `npm test`: Executa os testes

## Funcionalidades Principais

### Autenticação e Autorização
- Login com email/senha
- Recuperação de senha
- Níveis de acesso (Admin, Gerente, Técnico)

### Dashboard do Gerente
- Visualização de todas as rotas
- Atribuição de tarefas
- Relatórios de performance

### Dashboard do Técnico
- Visualização de rotas designadas
- Atualização de status de tarefas
- Registro de atividades

### Otimização de Rotas
- Algoritmo de otimização de percurso
- Consideração de prioridades
- Balanceamento de carga de trabalho

## Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato
Ezequias Pereira - ezequiaspereira@example.com

Link do Projeto: [https://github.com/ezequiasss2/opitrotas](https://github.com/ezequiasss2/opitrotas)
