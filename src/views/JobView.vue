<template>
  <div>Job Page for job {{ currentJobID }}</div>
</template>

<script>
  export default {
    name: "JobView",
    computed: {
      currentJobID() {
        return this.$route.params.id;
      },
    },
  };
</script>
