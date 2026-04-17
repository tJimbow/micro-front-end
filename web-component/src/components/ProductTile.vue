<template>
  <n-card class="product-tile" :title="title" size="large">
    {{ description }}
  </n-card>
</template>

<script setup>
import { NCard } from 'naive-ui'
defineProps({
  title: String,
  description: String
})
</script>