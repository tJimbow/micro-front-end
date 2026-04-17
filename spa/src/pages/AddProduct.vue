<template>
  <v-row justify="center">
    <v-col cols="12" md="8" lg="6">
      <v-card>
        <v-card-title>Ajouter un produit</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <v-text-field v-model="name" label="Nom du produit" required class="mb-3" />
            <v-textarea v-model="description" label="Description" required class="mb-3" />
            <v-file-input label="Image" @change="onFileChange" accept="image/*" class="mb-3" />
            <v-btn color="primary" type="submit">Ajouter</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '../store';
// Import des composants Vuetify pour la compilation
import { VRow, VCol, VCard, VCardTitle, VCardText, VForm, VTextField, VTextarea, VFileInput, VBtn } from 'vuetify/components';

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
