<script setup></script>

<template>
  <div
    v-for="(list, index) in lists"
    :key="index"
    class="flex items-center justify-between mt-10 group cursor-pointer"
  >
    <div>
      <i v-if="list.status == 0" class="fa-regular fa-square"></i>
      <i v-else class="fa-regular fa-square-check"></i>
    </div>
    <p
      @click="detailTask(list.id)"
      class="px-6 text-justify group-hover:text-white"
      :class="{ 'line-through': list.status == 1 }"
    >
      {{ list.title }}
    </p>
    <i class="fa-solid fa-trash hover:text-red-600"></i>
  </div>
</template>

<script>
export default {
  props: {
    lists: Array,
  },
  methods: {
    detailTask(id) {
      this.$router.push({ path: `/detail/${id}` });
    },
  },
};
</script>

<style lang="scss" scoped></style>
