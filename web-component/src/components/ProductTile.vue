<template>
  <div class="product-tile">
    <div class="product-info">
      <h3 class="product-title">{{ title }}s</h3>
      <p class="product-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
.product-tile {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  background: #fff;
}
.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
}
.product-info {
  flex: 1;
}
.product-title {
  margin: 0 0 8px 0;
  font-size: 1.2em;
}
.product-description {
  margin: 0 0 8px 0;
  color: #666;
}
.product-price {
  font-weight: bold;
  color: #2c3e50;
}
</style>

