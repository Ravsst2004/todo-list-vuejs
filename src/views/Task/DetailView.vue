<template>
  <div class="bg-blue-400 mt-4 px-6">
    <div class="pt-6">
      <h1 class="text-white text-3xl font-bold">Title</h1>
      <p class="text-white text-xl">{{ list.title }}</p>
    </div>
    <div class="pt-6">
      <h1 class="text-white text-3xl font-bold">Created At</h1>
      <p class="text-white text-xl">{{ list.created_at }}</p>
    </div>
    <div class="pt-6">
      <h1 class="text-white text-3xl font-bold">Status</h1>
      <p class="text-white text-xl">
        {{ list.status == 1 ? "Done" : "Available" }}
      </p>
    </div>
    <button
      @click="goBack()"
      class="my-6 border-2 px-2 rounded-md bg-white hover:bg-blue-400"
    >
      Back
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getData(this.$route.params.id);
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async getData(id) {
      try {
        const res = await this.axios.get(`http://localhost:8000/lists/${id}`);
        this.list = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
