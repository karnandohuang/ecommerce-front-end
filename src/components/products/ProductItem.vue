<template>
  <div class="product-box">
    <h1>{{product.name}}</h1> <br>
    ID : {{product.id}} <br>
    Price : {{product.price}} <br>
    Category : {{product.categoryId}} <br>
    <router-link :to="'/products/' + product.id">detail</router-link>
    <router-link :to="'/products/' + product.id + '/edit'">edit</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product']
}
</script>
