<script setup lang="ts">
  const { themeVars, theme } = useManualTheme()
</script>

<template>
  <wd-config-provider :theme-vars="themeVars" :theme="theme" :custom-class="`page-wraper ${theme}`">
    <ku-root-view />
  </wd-config-provider>
</template>
