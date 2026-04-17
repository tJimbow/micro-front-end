<template>
  <n-config-provider :theme="lightTheme">
    <n-layout content-style="padding: 1rem;">
      <n-layout-header bordered>
        <n-space align="center" justify="space-between" style="width: 100%; max-width: 1200px; margin: 0 auto; height: 64px;">
          <span class="app-title">Micro Front-End Shop</span>
          <n-space>
            <router-link to="/">
              <n-button quaternary strong>Produits</n-button>
            </router-link>
            <router-link to="/add">
              <n-button quaternary strong>Ajouter</n-button>
            </router-link>
            <router-link to="/cart">
              <n-button quaternary strong>Panier</n-button>
            </router-link>
          </n-space>
        </n-space>
      </n-layout-header>
      <n-divider style="margin:0" />
      <n-layout-content content-style="padding: 40px 0; min-height: 80vh; display: flex; justify-content: center;">
        <div style="width: 100%; max-width: 1200px;">
          <router-view />
        </div>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { NLayout, NLayoutHeader, NLayoutContent, NButton, NConfigProvider, NDivider, NSpace, lightTheme } from 'naive-ui';
</script>
