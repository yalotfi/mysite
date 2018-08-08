const path = require('path');

const excludeList = [
	/node_modules/,
	/\.git/,
	/\.gitignore/,
	/\.dockerignore/,
	/Dockerfile/
]

module.exports = {
	mode: 'production',
	target: 'node',
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'public', 'javascripts'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: excludeList,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.(s*)css$/,
				exclude: excludeList,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
};