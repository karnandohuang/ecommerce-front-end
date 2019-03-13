<template>
  <div>
    Product Detail {{$route.params.id}}
    <h1>{{productDetail.name}}</h1> <br>
    <span v-if="isNew" class="new">NEW!!!</span>
    ID : {{productDetail.id}} <br>
    Price : {{productDetail.price}} <br>
    Category : {{productDetail.categoryId}} <br>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ProductDetailPage',
  data () {
    return {
      product: {
        name: '',
        price: '',
        category: ''
      },
      newName: ''
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    isNew () {
      return this.$route.query.newProduct === 'true'
    },
    ...mapGetters([
      'productDetail'
    ])
  },
  created () {
    this.$store.dispatch(
      'getProductDetail',
      {
        id: this.id
      }
    )
  }
}
</script>

<style>
  .new {
    color: red;
  }
</style>
