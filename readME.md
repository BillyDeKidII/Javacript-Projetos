## Iniciando e Configurando ES6 (Node JS/Yarn)*
***Requisito Minimo**

 - [Node JS](https://nodejs.org/en/)
 - [Yarn](https://yarnpkg.com)
##  Projeto Básico
**Ambiente com babel para tradução do ES6 para o JS padrão dos navegadores.**
 - **Comandos do Terminal**
	 - **`yarn init`**
	 - **`yarn add @babel/cli -D`**
	 - **`yarn add @babel/preset-env -D`**
	 - **`yarn add @babel/core -D`**
	 - **`yarn add @babel/plugin-proposal-object-rest-spread -D`**
 - **Criação e alteração de arquivos**
	 - Novo arquivo *.gitignore* e adicione :
		 - node_modules/
	 - Novo arquivo `.babelrc` e adicione:
		 - ``` {"presets": ["@babel/preset-env"],"plugins": ["@babel/plugin-proposal-object-rest-spread"]} ```
	 - Alterar arquivo *package.json* e adicione dentro de "scripts":
		 - ```"dev": "babel ./main.js -o ./bundle.js -w"```
	 - Novos arquivos `index.html & main.js`
		 - Index.html adicionar:
```html
<html>
<head>
<title>TITULO</title>
</head>
<body>
<script src="./bundle.js"></script>
</body>
</html>
```