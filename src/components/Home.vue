<template>
    <div>
        <h1>East or west, Home is the best. Yo, {{ guy }} </h1>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        guy: "",
      }
    },
    created() {
      this.guy = "Smint"
    },
  }
</script>