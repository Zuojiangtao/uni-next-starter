import { fileURLToPath, URL } from 'node:url';

import type { UserConfig, ConfigEnv } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Uni from '@uni-helper/plugin-uni'
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
// 需要与 @uni-helper/vite-plugin-uni-pages 插件一起使用
import UniHelperPlatform from '@uni-helper/vite-plugin-uni-platform'
import UniHelperPolyfill from 'vite-plugin-uni-polyfill'
import UnoCSS from 'unocss/vite'
import UniKuRoot from '@uni-ku/root'

import { vitePluginConfig } from './build';
import { transformEnvConfType } from './build/utils';
import { createProxy } from './build/proxy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const viteEnv = transformEnvConfType(loadEnv(mode, root));

  const { VITE_DROP_CONSOLE, VITE_PORT, VITE_PROXY } = viteEnv;

  return {
    plugins: [
      vueJsx(),
      /** uni-app plugin */
      UniHelperLayouts(),
      UniHelperPlatform(),
      UniHelperManifest(),
      UniHelperPages({
        exclude: ['**/components/**/**.*'],
        // pages 目录为 src/pages，分包目录不能配置在pages目录下！！
        // 是个数组，可以配置多个，但是不能为pages里面的目录！！
        subPackages: [],
        dts: 'types/uni-pages.d.ts',
      }),
      // Components 需要在 Uni 之前引入
      UniHelperComponents({
        extensions: ['vue', 'jsx', 'tsx'],
        deep: true, // 是否递归扫描子目录，
        directoryAsNamespace: false, // 是否把目录名作为命名空间前缀，true 时组件名为 目录名+组件名，
        dts: 'types/components.d.ts', // 自动生成的组件类型声明文件路径（用于 TypeScript 支持）
        resolvers: [WotResolver()],
      }),
      UniKuRoot(),
      Uni(),
      UnoCSS(),
      UniHelperPolyfill(),
      /** ext vite plugin */
      vitePluginConfig(viteEnv),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url)),
      },
    },
    server: {
      // https: false,
      // Listening on all local IPs
      host: true,
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY),
    },
    esbuild: {
      // 移除日志打印及debugger
      drop: VITE_DROP_CONSOLE ? ['console', 'debugger'] : [],
    },
    css: {
      preprocessorOptions: {
        // less: {
        //   javascriptEnabled: true,
        // },
      },
    },
    // 依赖优化 - 预构建
    optimizeDeps: {
      exclude: mode === 'development' ? ['vue', 'pinia', 'vue-router'] : [],
      include: ['@vueuse/core'],
    },
  };
});
