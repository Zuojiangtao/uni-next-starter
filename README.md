<h1 align="center">uni-next-starter</h1>

## Introduction

一款基于 uni-app 和 uni-helper 工具套组的跨端开发启动模板，使用 wot-design-uni 作为UI库，vite作为编译工具。下一代跨端开发快速启动模板。

> node >= 20 | node 22+

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm run lint
```

## Guide

### 1. UI

<details>
<summary>Wot UI</summary>

[Wot UI](https://wot-ui.cn/) 是一个高颜值、轻量化的uni-app组件库，它基于Vue3+TS开发，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。

** SASS **
Wot UI 依赖 sass ，因此在使用之前需要确认项目中是否已经安装了 sass。

> Dart Sass 3.0.0 废弃了一批 API，而组件库目前还未兼容，因此请确保你的sass版本为1.78.0及之前的版本。参见参见常见问题。

</details>

### 2. 类vue-router路由

uni-app 页面路由为框架统一管理，开发者需要在 pages.json 里配置每个路由页面的路径及页面样式。类似小程序在 app.json 中配置页面路由一样。所以 uni-app 的路由用法与 Vue Router 不同，不过我们可以引入类似插件实现类似 Vue Router 的开发体验。

[uni-mini-router](https://moonofweisheng.github.io/uni-mini-router/) 是一个基于vue3和Typescript的轻量级uni-app路由库，它提供了类似Vue Router的API和功能，可以帮助开发者实现在uni-app中进行路由跳转、传参、拦截等常用操作。

### 3. 网络请求

<details>
<summary>1). uni-app内置方法</summary>

uni-app 提供了 uni.request、uni.uploadFile、uni.downloadFile、WebSocket 等支持。一般情况下，你可以直接使用它们。

</details>

<details>
<summary>2). axios</summary>

如果你更喜欢 axios 及其相关生态，你可以使用 @uni-helper/axios-adapter。

</details>

<details>
<summary>3). @uni-helper/uni-network</summary>

@uni-helper/uni-network 是一个为 uni-app 打造的基于 Promise 的 HTTP 客户端，灵感和代码绝大部分源于 axios@0.27.2。@uni-helper/uni-network 在底层做了 uni-app 适配，体积更小，TypeScript 类型更贴近 uni-app。

</details>

<details>
<summary>4). alova</summary>

[Alova](https://alova.js.org/zh-CN/) 是一个极致高效的请求工具集，本项目已集成此方案，无需额外安装。可参考 `/api/foo.ts`,`utils/httpRequest.ts`。

</details>

### 4. Icon

一般情况下，可以直接使用 UI 组件库内置的图标，也可以使用更加灵活的 Iconify 图标集。

<details>
<summary>1).最简单的图标使用方式是使用 WotUI 的内置图标。</summary>

```vue
<!-- 基础用法 -->
<wd-icon name="star" size="20px" color="#f59e0b" />

<!-- 在按钮中使用 -->
<wd-button icon="add" type="primary">添加</wd-button>

<!-- 主题色适配 -->
<wd-icon name="home" size="24px" color="var(--wot-color-theme)" />
```
</details>

<details>
<summary>2). 如果你需要更多图标选择，可以使用 Iconify 图标集配合 UnoCSS 使用</summary>

```vue
<!-- 基础用法 -->
<text class="i-carbon:star text-xl text-yellow-500"></text>

<!-- 响应式大小 -->
<text class="i-carbon:home text-sm md:text-lg lg:text-xl"></text>

<!-- 暗黑模式适配 -->
<text class="i-carbon:favorite text-gray-600 dark:text-white"></text>
```
</details>

### 5. UnoCSS原子化方案

UnoCSS 是即时原子 CSS 引擎，旨在灵活和可扩展。核心是不带偏见的，所有的 CSS 工具类都是通过预设提供的。

[UnoCSS](https://unocss.net/) 可通过官网自行了解。

### 6. 全局状态pinia及持久化

[pinia](https://pinia.vuejs.org/zh/) 是一个拥有组合式 API 的 Vue 状态管理库。配合 [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/) 插件实现全局属性的数据持久化。

> 注意的是 uni-app 的 storage 与传统web并非一致，所以需要手动配置该插件使用uni-app 的 storage。可参考 `store/index.ts` Line8-Line9。

### 7. 全局组件使用

可在 `src/components` 下开发全局组件，在此目录下的组件视为全局组件，在 `App.ku.vue` 注册到全局。之后可在任何页面组件使用。
推荐在 `src/hooks` 下同步hooks方法并且其属性托管到全局store，这样通过hooks调用更改全局store属性，可实现全局组件的控制。

### 8. 自动导入依赖组件和类型定义

[Auto-Import](https://github.com/antfu/unplugin-auto-import) 是一个自动导入api的vite/webpack插件。这样我们在组件开发可直接使用方法和组件，不需要再一个一个导入。

### 9. 其他

1) 多平台发布：[uni-mini-ci](https://github.com/Moonofweisheng/uni-mini-ci);
2) uni-ku/root: [@uni-ku/root](https://uni-ku.js.org/projects/root/introduction);
3) 构建编译依赖CDN: [vite-plugin-external-cdn](https://github.com/Zuojiangtao/vite-plugin-external-cdn);
4) 代码压缩: [vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression);
5) 图片压缩: [vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer);
6) html全局title: [vite-plugin-html](https://github.com/anncwb/vite-plugin-html);
7) 全局多代理配置: `/build/proxy.ts`;
