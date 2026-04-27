## Melhorias implementadas — Branch `teste-roberto`

Nesta branch foram realizadas melhorias funcionais e testes manuais no projeto FuelMap Manaus, com foco em usabilidade, navegação e validação de fluxos importantes da aplicação.

### Funcionalidades ajustadas

- Ajuste do fluxo de login social simulado com Google e Facebook.
- Correção do redirecionamento após autenticação OAuth.
- Atualização do estado do usuário após login para permitir acesso à interface principal do app.
- Integração do botão **"Como Chegar"** com o Google Maps.
- Melhoria na busca de postos por nome, bandeira, endereço e bairro.
- Ajuste no filtro de distância para não bloquear resultados durante uma pesquisa.

### Testes realizados

- Teste manual do login social simulado.
- Validação do callback OAuth e redirecionamento para a tela principal.
- Teste do botão **"Como Chegar"** abrindo rota no Google Maps.
- Teste da busca por bairros, ruas e bandeiras.
- Teste de regressão nos filtros de combustível e ordenação.

### Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- Git/GitHub
- Google Maps