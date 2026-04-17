<template>
    <n-space vertical size="large">
        <n-space align="center" justify="center">
            <n-h1>Liste des produits</n-h1>
        </n-space>
        <n-space align="center" justify="center">
            <router-link to="/add">
                <n-button type="primary" size="large">Ajouter un produit</n-button>
            </router-link>
        </n-space>
        <n-grid cols="1 s:2 m:3" x-gap="32" y-gap="32">
            <n-grid-item v-for="product in store.products" :key="product.id">
                <router-link :to="`/product/${product.id}`">
                    <product-tile
                        :title="product.name"
                        :description="product.description"
                    />
                </router-link>
            </n-grid-item>
        </n-grid>
    </n-space>
</template>
<script setup>
import {onMounted} from 'vue';
import {useProductStore} from '../store';
import {NGrid, NGridItem, NButton, NSpace, NH1, NH3, NCard} from 'naive-ui';

const store = useProductStore();

onMounted(() => {
    store.fetchProducts();
});
</script>
