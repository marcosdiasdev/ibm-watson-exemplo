# ibm-watson-exemplo

Este repositório apresenta um exemplo de uso da API de Reconhecimento de Linguagem Natural do IBM Watson.

## Configuração

**É necessário possuir o NodeJS instalado**.

Após realizar um cadastro no site IBM Cloud, vá até a opção **Criar recurso** e, na categoria **IA**, selecione **Natural Language Understanding**. Na página seguinte, confira os dados de localização e confirme a criação do recurso. Na página seguinte, acesse a opção **Gerenciamento**, no menu à esquerda e guarde os valores dos campos **API Key** e **URL**. Estes valores serão usados no próximo passo.

No arquivo `index.js`, defina as constantes entre as linhas 3 e 8.

- `chaveDaAPI` - chave (API Key) gerada na área de gerenciamento da API de reconhecimento de linguagem Natural no site IBM Cloud.
- `urlDaAPI` - URL da API gerada na área de gerenciamento da API de reconhecimento de linguagem Natural no site IBM Cloud.
- `versaoDaAPI` - a versão da API que você utilizará. Recomenda-se mantê-la atualizada. Neste exemplo fixamos a última disponível.
- `urlDaPagina` - endereço da página que será analisada.
- `limiteDeCategorias` - número máximo de categorias que serão atribuidas na análise.
- `descreverCategorias` - se `true`, as categorias serão descritas. Só funciona com conteúdos em língua inglesa.

Em um terminal, navegue até a pasta do projeto e execute:

```sh
node install
```

## Execução

Ainda na pasta do projeto, execute:

```sh
node index.js
```

O resultado será impresso no terminal atual.