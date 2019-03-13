<template>
  <div>
    Product Detail {{$route.params.id}}
    <span v-if="isNew" class="new">NEW!!!</span><br>
    Name : <input v-model="product.name"><br>
    Price : <input v-model="product.price"> <br>
    Category : <input v-model="product.categoryId"> <br>
    <button @click="save">Save</button>
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
        newName: ''      }
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
    methods : {
      save() {
        alert('data saved ' + JSON.stringify(product))
      }
    },
    created () {
      this.$store.dispatch(
        'getProductDetail',
        {
          id: this.id
        }
      )
    },
    watch: {
      productDetail(v) {
        this.product = {...v}
      }
    }
  }
</script>

<style>
  .new {
    color: red;
  }
</style>
