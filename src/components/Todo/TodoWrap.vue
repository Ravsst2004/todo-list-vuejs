<script setup></script>

<template>
  <div
    v-for="(list, index) in lists"
    :key="index"
    class="flex items-center justify-between mt-10 group"
  >
    <div>
      <i v-if="list.status == 0" class="fa-regular fa-square"></i>
      <i
        v-else
        class="fa-regular fa-square-check"
        :class="{ 'line-through': list.status == 1 }"
      ></i>
    </div>
    <p class="px-6 text-justify group-hover:text-white">
      {{ list.title }}
    </p>
    <i class="fa-solid fa-trash cursor-pointer hover:text-red-600"></i>
  </div>
</template>

<script>
export default {
  props: {
    lists: Array,
  },
};
</script>

<style lang="scss" scoped></style>
