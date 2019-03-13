<template>
  <div>
    New Product
    Name : <input v-model="product.name"><br>
    Price : <input v-model="product.price"> <br>
    Category : <input v-model="product.categoryId"> <br>
    <button @click="save">Save</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        product: {
          name: '',
          price: '',
          categoryId: ''
        }
      }
    },
    methods: {
      save () {
        alert("Send " + JSON.stringify(this.product))
      }
    }
  }
</script>
