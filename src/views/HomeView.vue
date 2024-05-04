<script setup>
import TodoWrap from "@/components/Todo/TodoWrap.vue";
import Form from "@/components/Form.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="bg-blue-400 mt-4 px-6">
    <Form @reloadData="getData" />
    <TodoWrap :lists="lists" @reloadData="getData" />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const res = await this.axios.get("http://localhost:8000/lists");
        this.lists = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
