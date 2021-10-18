const path = require('path');
module.exports = {
	entry: "./script.js",
	output:{ 
		path: path.resolve(__dirname, './dist'), // путь к каталогу выходных файлов
		filename: "bundle.js"  // название создаваемого файла 
	}, 
	module: {
	  rules: [
		//   // изображения
		// {
		// 	test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
		// 	type: 'asset/resource',
	  	// },
		{
			test: /\.s[ac]ss$/i,
			use: [
				 // Creates `style` nodes from JS strings
				 "style-loader",
				 // Translates CSS into CommonJS
				 "css-loader",
				 // Compiles Sass to CSS
				 "sass-loader",
			],
		},
	  ]
	}
 }