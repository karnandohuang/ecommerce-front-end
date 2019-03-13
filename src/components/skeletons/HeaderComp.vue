<template>
  <div class="navbar">
    <router-link to="/home" class="navbar-link">
      <img src="~assets/blibli-logo.png">
    </router-link>
    <router-link to="/" class="navbar-link">{{$t('app.header.menus.contactUs')}}</router-link>
    <router-link to="/products" class="navbar-link">{{$t('app.header.menus.products')}}</router-link>
    <router-link to="/categories" class="navbar-link">{{$t('app.header.menus.categories')}}</router-link>
    <router-link to="/members" class="navbar-link">{{$t('app.header.menus.members')}}</router-link>
    [ <span
    class="navbar-link"
    v-for="i in LANGS"
    :key="i + 'lang'"
    @click="changeLang(i)"
    :class="{active: isActiveLang(i)}">
      {{i.toUpperCase()}} |
    </span> ]
  </div>
</template>

<script>
  // const LANGS = ['en', 'id']
  export default {
    data () {
      return {
        LANGS : ['en', 'id']
      }
    },
    methods: {
      changeLang (id) {
        this.$i18n.locale = id
      },
      isActiveLang (id) {
        return id === this.$i18n.locale
      }
    }
  }
</script>

<style>
  .navbar {
    z-index: 1;
    background-color: ghostwhite;
    height: 75px;
    border-radius: 0 0 30px 30px;
    box-shadow: 0px 5px 35px 0px rgba(130, 130, 130, 0.5);
    margin-bottom: 25px;
  }

  img {
    vertical-align: center;
    width: 150px;
  }

  .navbar-link {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    color: steelblue;
    font-size: 20px;
    padding: 10px 20px 20px 10px;

  }

  .navbar-link:hover {
    color: lightskyblue;
  }

  .navbar-link:active {
    color: lightsteelblue;
  }

</style>
