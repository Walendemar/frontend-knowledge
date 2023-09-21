const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction =
	process.argv.some((arg) => arg === "-p" || arg === "--production") ||
	process.env.NODE_ENV === "production";

const ROOT_DIR = path.resolve(__dirname, "..");

const PATHS = {
	app: path.resolve(ROOT_DIR, "src"),
	build: path.resolve(ROOT_DIR, "dist"),
};

console.log(path.resolve(ROOT_DIR, "template/template.html"));

module.exports = {
	mode: isProduction ? "production" : "development",
	devtool: isProduction ? "hidden-source-map" : "eval-cheap-module-source-map",
	entry: {
		app: PATHS.app,
	},
	output: {
		path: PATHS.build,
		filename: "app.js",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Knowledge",
			template: path.resolve(ROOT_DIR, "./template/template.html"),
			filename: "index.html",
		}),
	],
	resolve: {
		extensions: [".js", ".jsx"],
		modules: ["node_modules"],
		alias: {
			"@components": path.resolve(PATHS.app, "components"),
			"@utils": path.resolve(PATHS.app, "utils"),
		},
	},
	devServer: {
		static: {
			directory: PATHS.dist,
		},
		compress: true,
		port: "8070",
		historyApiFallback: {
			disableDotRule: true,
		},
		hot: true,
	},
};
