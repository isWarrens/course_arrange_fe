<template>
  <div ref="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clientHeight: '',
      name: 'dispacher'
    }
  },
  mounted () {
    this.clientHeight = document.documentElement.clientHeight
    this.$refs.container = this.$refs.container
  },
  watch: {
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    },
    deep: true
  },
  methods: {
    changeFixed (clientHeight) {
      //  console.log(clientHeight)
      this.clientHeight = document.documentElement.clientHeight +  'px'
      this.$refs.container.style.height = clientHeight
    }
  }
}
</script>
<style>
body {
  width: 100%;
}
</style>
