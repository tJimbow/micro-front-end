import { defineCustomElement } from 'vue'
import ProductTile from './components/ProductTile.vue'

const ProductTileElement = defineCustomElement(ProductTile)

customElements.define('product-tile', ProductTileElement)
