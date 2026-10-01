# Desafio QA - Kaffa Tech Travel

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte do desafio técnico de QA da Kaffa Tech Travel.

O objetivo foi explorar a aplicação, identificar possíveis problemas e registrar os resultados dos testes, além de desenvolver testes automatizados utilizando Cypress.

---

## 🔎 Estratégia de Teste Exploratório

Para a execução deste desafio, realizei testes exploratórios na aplicação, buscando investigar os principais fluxos e identificar comportamentos inesperados, inconsistências e possíveis falhas.

Como base para a exploração, utilizei heurísticas de teste apresentadas no Test Heuristic Cheat Sheet, da Test Obsessed, juntamente com os conhecimentos e a abordagem de testes exploratórios aprendidos durante minha mentoria em QA com Júlio de Lima.

A partir dessa abordagem, explorei diferentes comportamentos da aplicação, incluindo:

- Cenários positivos e negativos;
- Entradas inválidas;
- Valores-limite;
- Navegação;
- Validações;
- Usabilidade;
- Responsividade;
- Conteúdo;
- Elementos visuais.

---

## 🐞 Bugs Identificados

Durante os testes exploratórios, foram identificados os seguintes problemas:

### BUG-001 - Botão "Voltar ao Topo" não retorna a página ao início

O botão é apresentado na página, porém ao ser acionado não realiza o retorno ao início da página.

**Severidade:** Baixa  
**Prioridade:** Média

### BUG-002 - Ícone "Voltar ao Topo" desalinhado

O ícone apresentado dentro do botão "Voltar ao Topo" não está visualmente alinhado.

**Severidade:** Baixa  
**Prioridade:** Baixa

### BUG-003 - Menu de navegação duplicado na aba "Sobre Nós"

Ao acessar a página "Sobre Nós", o menu de navegação é apresentado novamente, gerando duplicidade dos itens.

**Severidade:** Média  
**Prioridade:** Alta

### BUG-004 - Erros de ortografia na página "Sobre Nós"

Foram identificados erros de ortografia no conteúdo da página.

**Severidade:** Baixa  
**Prioridade:** Média

### BUG-005 - Links das redes sociais direcionam para páginas incorretas ou indisponíveis

Os links das redes sociais apresentam destinos incorretos ou páginas indisponíveis.

**Severidade:** Baixa  
**Prioridade:** Média

### BUG-006 - Link "Veja nossa página de notícias" direciona para endereço diferente do configurado

O link apresentado na aplicação direciona para um endereço diferente do configurado na aplicação.

**Severidade:** Média  
**Prioridade:** Média

### BUG-007 - Validação de e-mail permite endereço sem ponto no domínio

O campo de e-mail do formulário de contato permite o preenchimento de endereços que possuem o caractere `@`, mas não possuem um ponto (`.`) no domínio, como `111@111`.

**Severidade:** Alta  
**Prioridade:** Alta

### BUG-008 - Calculadora permite caracteres não numéricos no campo "Valor da passagem"

O campo permite a inserção de caracteres não numéricos e, posteriormente, apresenta um resultado inválido.

**Severidade:** Média  
**Prioridade:** Média

### BUG-009 - Menu de navegação não se adapta corretamente à resolução mobile

Ao acessar a aplicação em resolução mobile, o menu de navegação apresenta problemas de adaptação.

**Severidade:** Média  
**Prioridade:** Média

### BUG-010 - Calculadora permite valores negativos

Os campos "Número de pessoas" e "Dias de hospedagem" permitem a inserção de valores negativos.

**Severidade:** Média  
**Prioridade:** Alta

### BUG-011 - Sistema permite orçamento para usuário que ainda não completou 18 anos

A calculadora permite realizar o orçamento para uma pessoa que ainda não completou 18 anos.

**Severidade:** Média  
**Prioridade:** Alta

### BUG-012 - Formulário informa envio realizado, mas a mensagem não é enviada por e-mail

Após o preenchimento do formulário de contato, a aplicação apresenta a mensagem de sucesso, porém a mensagem não é recebida por e-mail.

**Severidade:** Média  
**Prioridade:** Alta

### BUG-013 - Imagem quebrada no banner da página inicial

A imagem utilizada no banner da página inicial não é carregada corretamente.

**Severidade:** Baixa  
**Prioridade:** Média

### BUG-014 - Campo de telefone permite o preenchimento com letras

O campo de telefone do formulário de envio de mensagem permite a inserção de letras, embora seja destinado ao preenchimento de um número de telefone.

**Severidade:** Baixa  
**Prioridade:** Média

### BUG-015 - Campos da calculadora permitem a inserção de letras

Os campos "Número de pessoas", "Valor da passagem" e "Dias de hospedagem" permitem a inserção de caracteres alfabéticos, embora sejam destinados ao preenchimento de valores numéricos.

**Severidade:** Média  
**Prioridade:** Alta

### BUG-016 - Formulário de contato aceita e-mail em formato inválido

O formulário de envio de mensagem permite realizar o envio mesmo quando o campo de e-mail é preenchido com um formato inválido, como `123@2com`, exibindo a mensagem "Enviada com sucesso".

**Severidade:** Média  
**Prioridade:** Alta

---

## 💡 Melhorias Identificadas

### Melhoria I - Identificação visual dos campos obrigatórios no formulário de contato

Sugestão de melhoria para identificar visualmente quais campos são obrigatórios antes do preenchimento.

### Melhoria II - Identificação visual dos campos obrigatórios na calculadora

Sugestão de melhoria para facilitar a identificação dos campos obrigatórios na calculadora de orçamento.

### Melhoria III - Aplicar máscara de moeda em Real (R$) no campo "Valor da passagem"

Foi identificado que o campo "Valor da passagem", presente na Calculadora de Orçamento, não aplica máscara de moeda durante o preenchimento do valor. Como o campo indica "(R$)", a aplicação de uma máscara no padrão brasileiro poderia facilitar a visualização e interpretação do valor informado.

**Severidade:** Baixa  
**Prioridade:** Baixa

---

## 🤖 Testes Automatizados com Cypress

Foram criados dois testes automatizados para a calculadora de orçamento:

- **Teste positivo:** verifica se o cálculo do orçamento é realizado corretamente com dados válidos.
- **Teste negativo:** verifica o bloqueio de orçamento para usuário menor de 18 anos.

Um dos testes foi mantido propositalmente como falha para demonstrar a identificação de um comportamento incorreto da aplicação.

---

## ▶️ Como executar os testes

Instale as dependências do projeto:

```bash
npm install