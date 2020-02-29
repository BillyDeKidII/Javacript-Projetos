## Iniciando e Configurando ES6 (Node JS/Yarn)*
### ***Requisito Minimo**

 - [Node JS](https://nodejs.org/en/)
 - [Yarn](https://yarnpkg.com)
 
 ### **Comando Base** 
 - **Inicia aplicação**
	 - **`yarn dev`**
 - **Build bundle.js (Projeto Avançado)**
	 - **`yarn build`**

##  Projeto Básico
**Ambiente com babel para tradução do ES6 para o JS padrão dos navegadores.**
 - **Comandos do Terminal**
	 - **`yarn init`**
	 - **`yarn add @babel/cli -D`**
	 - **`yarn add @babel/preset-env -D`**
	 - **`yarn add @babel/core -D`**
	 - **`yarn add @babel/plugin-proposal-object-rest-spread -D`**
 - **Criação e alteração de arquivos**
	 - Novo arquivo `.gitignore` e adicione :
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
## Projeto Intermediário
**Ambiente igual ao anterior com adição de recursos de** *live-reload e ultilização de multiplos arquivos js*
 - **Comandos do terminal**
	 - **`yarn add webpack-cli -D`**
	 - **`yarn add babel-loader@8.0.0-beta.0`**
 - **Criação e alteração de arquivos**
	 - Alterar arquivo *package.json* e atualize o valor "dev" dentro de "scripts":
		 - ```"dev": "webpack --mode.development -w"```
	 - Novo arquivo `.webpack.config.js` e adicione:
```javascript 
module.exports = {
	entry:  './main.js',
	output: {
		path: __dirname,
		filename:  'bundle.js'
		},
	module: {
		rules: [{
			test:  /\.js$/,
			exclude:  /node_modules/,
			use: {
				loader:  'babel-loader',
			}
		}],
	},
};
```
## Projeto Avançado
**Ambiente igual aos anteriores com a adição de recursos de** *servidor local, async and await e axios para uso de promises.*
 - **Comandos do terminal**
	 - **`yarn add webpack-dev-server -D`**
	 - **`yarn add @babel/plugin-transform-async-to-generator -D`**
	 - **`yarn add @babel/polyfill -D`**
	 - **`yarn add axios`**
 - **Criando pastas**
	 - Pasta *src*:
		 - Arquivos .js
	 - Pasta *public*:
		 - Arquivos .html e .css
 - **Criação e alteração de arquivos**
	 - Atualizar valores dentro do *webpack.config.js*:
		 - ```entry: ['@babel/polyfill', './src/main.js']```
		 - ```path: __dirname +  '/public'```
	 - Novo valor dentro do *webpack.config.js*:
		 - ```devServer:{contentBase: __dirname +  '/public'}```
	 - Alterar arquivo *package.json* e atualize o valor "dev" dentro de "scripts":
		 - ```"dev": "webpack-dev-server --mode=development"```
	 -  Alterar arquivo *package.json* e crie o valor "build" dentro de "scripts":
		 - ```"build": "webpack --mode=production"```