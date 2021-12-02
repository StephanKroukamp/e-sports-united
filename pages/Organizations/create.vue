<template>
  <div class="page-root">
    This is admin page! welcome!
  </div>
</template>

<script>
  export default {
    middleware: 'auth',
    data: () => ({})
  }
</script>