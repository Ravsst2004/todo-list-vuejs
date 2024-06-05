<template>
  <div class="pt-6">
    <form @submit.prevent="submitTask" action="" class="flex gap-x-2">
      <input
        v-model="title"
        type="text"
        name="title"
        class="w-full rounded-md px-2"
        required
      />
      <button class="border-2 px-2 rounded-md bg-white hover:bg-blue-400">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    async submitTask() {
      const res = await this.axios.post("http://localhost:8000/lists", {
        title: this.title,
        created_at: this.$dayjs().format("YYYY-MM-DD"),
        status: 0,
      });
      this.$emit("reloadData");
      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
