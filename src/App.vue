<template>
  {{ msg }}
  <Hello />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello Webpack!!',
    }
  },
}
</script>

<style scoped></style>
