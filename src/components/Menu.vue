<template>
  <div>
    We just ordered {{$route.params.id}}
    <img :src="'http://lorempixel.com/200/200/food/' + $route.params.id">
  </div>
</template>

<script>
export default {
  name: 'menu',
}
</script>