const path = require('path');

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
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	}
};