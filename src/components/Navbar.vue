<template>
  <nav
    class="flex justify-center items-center gap-x-6 text-white font-semibold"
  >
    <RouterLink to="/" :class="{ 'hover:text-[#FF870C]': $route.path === '/' }"
      >Todo</RouterLink
    >
    <RouterLink to="/done" :class="{ 'hover:text-[#FF870C]': $route.path === '/done' }"
      >Done Task</RouterLink
    >
    <RouterLink
      to="/available"
      :class="{ 'hover:text-[#FF870C]': $route.path === '/available' }"
      >Available Task</RouterLink
    >
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
