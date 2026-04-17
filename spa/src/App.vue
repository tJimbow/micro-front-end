<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Micro Front-End Shop</v-toolbar-title>
      <v-spacer />
      <v-btn to="/" variant="text" router>Produits</v-btn>
      <v-btn to="/add" variant="text" router>Ajouter</v-btn>
      <v-btn to="/cart" variant="text" router>Panier</v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="py-6">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
