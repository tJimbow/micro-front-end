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
        <n-space align="center" justify="center">
            <product-list @add-to-cart="(x) => addProductToCard(x)" @tile-click="onTileClick" />
        </n-space>
    </n-space>
</template>
<script setup>
import {NButton, NSpace, NH1 } from 'naive-ui'
import {useProductStore} from "../store.js";
import {useRouter} from "vue-router";

const router = useRouter();
const store = useProductStore();

const onTileClick = (product) => {
    store.addExistingProduct(product.detail[0]);

    router.push(`/product/${product.detail[0].id}`);
}

const addProductToCard = (product) => {
    // On récupère bien un évènement côté web component, par contre l'objet passé en paramètre se retrouve dans le detail,
    // on récupère un objet de type évènement
    // alors que côté web component on passe directement le produit
    if (product) store.addToCart(product.detail[0]);
}
</script>
