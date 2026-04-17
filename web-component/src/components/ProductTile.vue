<template>
    <n-space justify="center">
      <n-card style="max-width: 500px; width: 100%;">
          <template #header>
              <n-h3>{{ title }}</n-h3>
          </template>
          <div>{{ description }}</div>
      </n-card>
    </n-space>
</template>

<script setup>
import { NCard, NH3, NSpace } from 'naive-ui'
defineProps({
  title: String,
  description: String
})
</script>