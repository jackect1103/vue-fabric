
export function build(env) {
  return {
    sourcemap: env.VITE_BUILD_SOURCEMAP,
    terserOptions: {
      // 生产环境打包配置
      // 去除 console debugger
      compress: {
        drop_console: env.VITE_DROP_CONSOLE,
      },
    },
  }
}
