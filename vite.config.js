import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { build } from './vite/build'
import { createServer } from './vite/server'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend' // 组件名
import postCssPxToRem from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
  const env = loadEnv(mode, process.cwd()) // 当前环境变量
  return {
    plugins: [vue(),  VueSetupExtend()],
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 192, // 1rem，根据 设计稿宽度/10 进行设置
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          }),
        ],
      },
    },
    resolve: {
      // 设置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    // preview 状态下的端口相关设置 package.json配置这边 脚步指令 "preview": "vite preview"
    // 执行 npm run build指令后打包生成dist 然后运行 npm run preview 在本地起项目 查看打包后的效果 （把dist部署到 本地的服务器上）
    preview: {
      port: 3000,
      host: '0.0.0.0',
      strictPort: true,
    },
    server: createServer(env),
    build: build(env),
  }
})
