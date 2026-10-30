<script setup lang="ts">
// The default home layout renders inside a <div>; wrap it so landing pages expose a main landmark.
import VPHome from 'vitepress/dist/client/theme-default/components/VPHome.vue'
</script>

<template>
  <main>
    <VPHome>
      <template v-for="(_, name) in $slots" #[name]>
        <slot :name="name" />
      </template>
    </VPHome>
  </main>
</template>
