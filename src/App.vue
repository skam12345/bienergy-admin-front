<template>
  <div id="app">
    <router-view></router-view>
    <HeaderVue v-if="$route.name !== 'Login'"></HeaderVue>
    <leftMenu v-if="$route.name !== 'Login'" />
  </div>
</template>

<script>
import leftMenu from "./components/leftMenu.vue";

export default {
  components: {
    leftMenu,
  },
  name: "App",
  head: {
    title: {
      inner: "bienergy-admin",
    },
    script: [
      {
        type: "text/javascript",
        src: "/js/common.js",
        async: true,
        body: true,
      },
    ],
  },
};
</script>
<style>
#app {
  height: 100%;
}
</style>
