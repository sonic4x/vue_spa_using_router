<template>
  <div id="app">
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li>
        <router-link
          tag="li" to="/bar"
          :event="[ 'mousedown' , 'touchstart' ] "
          >
          <a>Bar</a>
        </router-link>
      </li>

      <!--Fetching data before switching route-->
      <li><router-link to="/aboutme">About Me</router-link></li>

      <!--Use named dynamic routes-->
      <li v-for="i in 3">
        <router-link :to="{ name:'menu', params:{ id: i } }">
          Menu {{i}}
        </router-link>
      </li>

      <!--
      <router-link to="/menu/4/">Menu 4</router-link>    // {{$route.params.id}} is 4
      -->
    </ul>

    <!--Adding transitions between routes-->
    <transition mode="out-in">
      <router-view/>
      <router-view name = "view1"></router-view>
    </transition>
    <div class="toast" v-show="showError">
      There was an error
    </div>
    
  </div>
</template>

<script>
const vapp= {
  name: 'app',
  data: function () {
    return {
      showError: false
    }
  }
};
export default vapp
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

/* Why we need 2 versions of css: 
-------------------------------------
  <li><router-link to="/" exact>Home</router-link></li>
will be translated in the following DOM portion:
  <li><a href="#/" class="router-link-active">Home</a></li>

While:
  <router-link tag="li" to="/" exact>Home</router-link>
Becomes:
  <li class="router-link-active">Home</li>
*/
a.router-link-active, li.router-link-active>a {
  background-color: gainsboro;
}

.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-active {
  opacity: 0
}

div.toast {
  width: 15em;
  height: 1em;
  position: fixed;
  bottom: 1em;
  background-color: red;
  color: white;
  padding: 1em;
  text-align: center;
}

</style>
