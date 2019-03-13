<template>
  <div>
    <div v-for="m in members" :key="m.id" class="category-box">
      <h1>{{m.name}}</h1> <br>
      ID : {{m.id}} <br>
      Address : {{m.address}} <br>
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
        .then(res => { this.members = res.data })
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
