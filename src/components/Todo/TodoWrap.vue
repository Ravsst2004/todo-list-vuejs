<template>
  <div v-for="i in 5" class="flex items-center justify-between mt-6 group">
    <i class="fa-regular fa-square"></i>
    <p class="px-6 text-justify group-hover:text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
      repellat.
    </p>
    <i class="fa-solid fa-trash cursor-pointer hover:text-red-600"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
