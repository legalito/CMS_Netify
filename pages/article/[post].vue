<script setup>
import Article from "@/cms/queries/articles";
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.params);
const slug = route.params.post;
const { data: article, error: footerError } = await useLazyAsyncQuery(Article,{slug: slug});
console.log(footerError);
console.log(slug);
console.log(article);
</script>
<template>
  <div class="article-container">
    <header>
        {{ article.article.author[0].nomPrenom }}
      <h1>{{ article.article.titre }}</h1>
      <div class="author-info">
        <img :src="article.article.author[0].profileImage.url" alt="Author Image" class="roundImageAuthor" />
        <p>{{ article.article.author[0].nomPrenom }}</p>
      </div>
    </header>
    <img :src="article.article.image.url" alt="Article Image" class="article-image" />
    <div class="article-content">
      <div v-if="article.article.paragraphe && article.article.paragraphe.value">
        <div v-for="(paragraph, index) in article.article.paragraphe.value.document.children" :key="index">
          <p v-if="paragraph.type === 'paragraph'">
            {{ paragraph.children[0].value }}
          </p>
          <pre v-if="paragraph.type === 'code'">{{ paragraph.blocks[0].text }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* styles.css */
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
}

.author-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.roundImageAuthor {
  border-radius: 50%;
  margin-right: 10px;
}

.article-image {
  width: 100%;
  margin-top: 20px;
}

.article-content {
  margin-top: 20px;
}

/* Add more styling as needed */

</style>
