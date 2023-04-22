export function createServer(env) {
  return {
    port: 3000,
    // open: true, // 生产环境不要设置打开浏览器，测试环境可以
    cors: true,
    proxy: {
      '/api': {
        target: env.VITE_CLOUD_BASE_URL,
        changeOrigin: env.VITE_OPEN_PROXY,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  }
}
