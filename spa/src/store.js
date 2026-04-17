import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProductStore = defineStore('product', () => {
  const products = ref([]);
      async function fetchProducts() {
        try {
          const res = await fetch('http://localhost:3001/products');
          const data = await res.json();
          products.value = data;
        } catch (e) {
          console.error('Erreur lors du chargement des produits', e);
        }
      }
  const cart = ref([]);

  function addProduct(product) {
    products.value.push({ ...product, id: Date.now(), versions: [] });
  }

  function addExistingProduct(product) {
    products.value.push(product);
  }

  function addVersion(productId, version) {
    const prod = products.value.find(p => p.id === productId);
    if (prod) prod.versions.push(version);
  }

  function addToCart(product) {
    cart.value.push(product);
  }

  function removeFromCart(productId) {
    cart.value = cart.value.filter(p => p.id !== productId);
  }

  function clearCart() {
    cart.value = [];
  }

  return { products, cart, addProduct, addVersion, addToCart, removeFromCart, clearCart, fetchProducts, addExistingProduct };
});

