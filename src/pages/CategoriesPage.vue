<template>
  <div>
    <div v-for="c in categories" :key="c.id" class="category-box">
      ID : {{c.id}} <br>
      Name : {{c.name}} <br>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'

  export default {
    data () {
      return {
        categories: []
      }
    },
    created () {
      axios.get('/api/categories')
        .then(res => { this.categories = res.data })
    }
  }
</script>

<style>
  .category-box{
    display: inline-block;
    width: 150px;
    height: 200px;
    margin: 10px;
    padding: 25px;
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
  }
</style>
