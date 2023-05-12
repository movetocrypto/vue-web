import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import Inspect from "vite-plugin-inspect";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	console.log("mode:", mode);
	const nowEnv = loadEnv(mode, __dirname);
	const isDev = nowEnv.VITE_APP_ENV !== "prod";
	return {
		plugins: [
			vue(),
			eslintPlugin({
				include: ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"],
			}),
			Inspect(),
		],
		server: {
			open: false, // 自动打开浏览器
			port: 3001,
			proxy: {
				"/api": {
					target: "http://admin01.test/api",
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, "")
				}
			},
			cors: true
		},
		resolve: {
			// 配置路径别名
			alias: {
				"@": resolve(__dirname, "./src"),
			},
		},
		envDir: "./src/env", // env目录
		envPrefix: ["VITE_"], // env变量前缀 默认是VITE_
		build: {
			outDir: "dist",
			// assetsDir: "assets",
			sourcemap: isDev,
			manifest: true,
			chunkSizeWarningLimit: 10000,
			terserOptions: {
				compress: {
					drop_console: !isDev,
					drop_debugger: !isDev
				}
			},
			minify: "terser",
		},
	};
});
