<template>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
  <button @click="goToHome">GO to Home Page</button>
</template>

<script>
  export default {
    name: "JobResultsView",
    methods: {
      goToHome() {
        this.$router.push({ name: "Home" });
      },
    },
  };
</script>
