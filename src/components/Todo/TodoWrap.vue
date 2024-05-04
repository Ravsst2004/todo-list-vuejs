<script setup></script>

<template>
  <div
    v-for="(list, index) in lists"
    :key="index"
    class="flex items-center justify-between mt-10 group cursor-pointer"
  >
    <div>
      <i
        v-if="list.status == 0"
        @click="checkTask(list.id, list)"
        class="fa-regular fa-square"
      ></i>
      <i
        v-else
        @click="checkTask(list.id, list)"
        class="fa-regular fa-square-check"
      ></i>
    </div>
    <p
      @click="detailTask(list.id)"
      class="px-6 text-justify group-hover:text-white"
      :class="{ 'line-through': list.status == 1 }"
    >
      {{ list.title }}
    </p>
    <i
      @click="deleteTask(list.id)"
      class="fa-solid fa-trash hover:text-red-600"
    ></i>
  </div>
</template>

<script>
export default {
  emits: ["reloadData"],
  props: {
    lists: Array,
  },
  methods: {
    detailTask(id) {
      this.$router.push({ path: `/detail/${id}` });
    },
    async checkTask(id, task) {
      const res = await this.axios.put(`http://localhost:8000/lists/${id}`, {
        title: task.title,
        created_at: task.created_at,
        status: task.status == 0 ? 1 : 0,
      });

      this.$emit("reloadData");
    },

    async deleteTask(id) {
      const res = await this.axios.delete(`http://localhost:8000/lists/${id}`);
      this.$emit("reloadData");
    },
  },
};
</script>

<style lang="scss" scoped></style>
