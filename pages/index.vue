<script setup>
import Articles from "@/cms/queries/articles";
// const { data, pending, error, refresh } = await useFetch(
//   "https://api.nuxtjs.dev/mountains"
// );
//const {data:articles, pending:pend, error:error} = await useLazyAsyncQuery(Articles);
</script>
<template>
<Nav />
  <!-- <div v-for="(item, index) in data" :key="index">
    <div >
      <h3>{{ item.title }}</h3>
      <img :src="item.image" />
    </div> -->
  <!-- </div> -->
  <!-- <div v-if="pend">Loading...</div>
  <div v-if="error">Error: {{ error }}</div> -->
</template>
