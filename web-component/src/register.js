import { defineCustomElement } from 'vue'
import ProductList from './components/ProductList.vue'

const ProductListElement = defineCustomElement(ProductList)

customElements.define('product-list', ProductListElement)
