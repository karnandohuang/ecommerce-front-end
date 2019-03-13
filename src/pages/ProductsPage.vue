<template>
  <div>
    <div>
      <router-link :to="'/products/new'">
        Add Product
      </router-link>
    </div>
    <ProductItem :product="p" v-for="p in products" :key="p.id" ></ProductItem>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import ProductItem from '@/components/products/ProductItem'
import productsApi from '@/api/products'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      // products: []
    }
  },
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters(['products'])
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>
  .product-box{
    display: inline-block;
    width: 150px;
    height: 200px;
    margin: 10px;
    padding: 25px;
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
  }
</style>
