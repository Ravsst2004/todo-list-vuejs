<template>
  <nav
    class="flex justify-center items-center gap-x-6 p-4 bg-blue-400 text-white font-semibold"
  >
    <RouterLink
      to="/"
      :class="{ underline: $route.path === '/' }"
      class="hover:underline"
      >Todo</RouterLink
    >
    <RouterLink
      to="/done"
      :class="{ underline: $route.path === '/done' }"
      class="hover:underline"
      >Done Task</RouterLink
    >
    <RouterLink
      to="/available"
      :class="{ underline: $route.path === '/available' }"
      class="hover:underline"
      >Available Task</RouterLink
    >
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
