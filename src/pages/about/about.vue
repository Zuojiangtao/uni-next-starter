<script setup lang="ts">
  definePage({
    name: 'about',
    layout: 'tabbar',
    style: {
      navigationBarTitleText: '关于',
    },
  })
</script>

<template>
  <view class="min-h-screen bg-gray-100 py-3 dark:bg-[var(--wot-dark-background)]">
    <!-- 头部介绍 -->
    <view class="mx-3 mb-3 flex flex-col gap-2">
      <text class="text-6 text-gray-800 font-bold dark:text-[var(--wot-dark-color)]">
        关于我们
      </text>
      <text class="text-3.5 text-gray-600 leading-snug dark:text-[var(--wot-dark-color2)]">
        我正在致力于开发轻量、高效的uni-app快速开发模板。基于uni-helper工具套件组和wotUI组件库，内置常用的方法和功能，提供现代化vue3开发体验。
      </text>
    </view>

    <!-- 关于 uni-helper -->
    <demo-block title="关于 uni-helper 团队" transparent>
      <view class="rounded-3 bg-white p-5 dark:bg-[var(--wot-dark-background2)]">
        <text class="mb-3 block text-3.5 text-gray-600 leading-relaxed dark:text-[var(--wot-dark-color2)]">
          <text class="text-blue-600" @click="openUrl('https://uni-helper.cn/')">
            uni-helper
          </text>
          是一个旨在增强 uni-app 系列产品的开发体验为爱发电的非官方组织。作为靠爱发电的非官方项目，uni-helper 提供了打包工具插件支持、编辑器扩展支持、NPM 包等并尽力维护它们。
        </text>
      </view>
    </demo-block>
  </view>
</template>
