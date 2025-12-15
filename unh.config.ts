import { defineConfig } from '@uni-helper/unh'

export default defineConfig({
  // 环境变量配置
  env: {
    dts: 'types/env.d.ts',
  }, // 启用环境变量配置
  // 平台配置
  platform: {
    // 默认平台，当不指定平台时使用此平台
    default: 'h5',
    // 平台别名，可以使用短名称代替完整平台名称
    alias: {
      'h5': ['w', 'h'],
      'mp-weixin': ['wx'],
    },
  },
  // 自动生成配置
  autoGenerate: {
    // 输出目录，默认为 'src'
    outDir: 'src',
    // 是否自动生成 pages.json
    pages: true,
    // 是否自动生成 manifest.json
    manifest: true,
  },
  // 小程序开发者工具配置
  devtools: {
    // 是否自动打开小程序开发者工具
    open: false,
    // 自定义各平台开发者工具路径
    // cliPath: {
    //   'mp-weixin': '/Applications/wechatwebdevtools.app/Contents/MacOS/cli',
    // },
  },
})
