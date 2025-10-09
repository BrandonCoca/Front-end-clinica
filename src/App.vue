createApp(App).use(router).use(veutify).mount('#app')
---
<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>;