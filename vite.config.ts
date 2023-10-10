import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            name: "useStore"
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    myStore: 'myStore',
                },
            },
        }
    }
})