<template>
  <n-space justify="center">
    <n-card style="max-width: 600px; width: 100%;">
      <template #header>
        Ajouter un produit
      </template>
      <n-form @submit.prevent="submit">
        <n-form-item label="Nom du produit" required>
          <n-input v-model:value="name" placeholder="Nom du produit" class="mb-3" />
        </n-form-item>
        <n-form-item label="Description" required>
          <n-input v-model:value="description" type="textarea" placeholder="Description" class="mb-3" />
        </n-form-item>
        <n-form-item label="Image">
          <input type="file" @change="onFileChange" accept="image/*" class="mb-3" />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" attr-type="submit">Ajouter</n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </n-space>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '../store';
import { NCard, NForm, NFormItem, NInput, NButton, NSpace } from 'naive-ui';

const store = useProductStore();
const name = ref('');
const description = ref('');
const image = ref('');
function onFileChange(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => { image.value = ev.target.result; };
    reader.readAsDataURL(file);
  }
}
function submit() {
  store.addProduct({ name: name.value, description: description.value, image: image.value });
  name.value = '';
  description.value = '';
  image.value = '';
}
</script>
