<template>
  <div class="py-6">
    <h4 class="text-center text-white font-normal">
      {{ lists > 0 ? lists : "0" }} {{ text == "Done" ? "Done" : "Available" }} Task
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    lists: Number,
    text: String
  }
};
</script>

<style lang="scss" scoped></style>
