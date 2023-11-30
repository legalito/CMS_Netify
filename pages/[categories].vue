<script setup>
  import categoryQuery from "@/cms/queries/category";  

  const route = useRoute();
  const slug = route.params.categories;
  const { data: categoryData } = await useLazyAsyncQuery(categoryQuery);
  //console.log(categoryData.value.allArticles.filter((article) => article.catGorie.nom === slug));
    //  console.log(categoryData.value.allArticles.filter((article) => article.catGorie.nom === slug));
//   const getShortenedContent = (content) => {
//     const maxLength = 150; // Adjust the maximum length as needed
//     return content.length > maxLength ? `${content.slice(0, maxLength)}...` : content;
//   };
  </script>
<template  v-if="route ">
<!-- {{ categoryData.allArticles[0].catGorie.nom  }} -->

    <div>
      <!-- <h1>{{ category.nom }}</h1> -->
  
      <div class="article-list">
        <div v-for="article in categoryData.allArticles">
          <!-- <img :src="article.image.url" alt="Article Image" /> -->
          <!-- <div class="article-author">
            <img :src="article.author.profileImage.url" alt="Author Image" class="roundImageAuthor" />
            <p>{{ article.author.nomPrenom }}</p>
          </div>
          <h3>{{ article.titre }}</h3>
          <div v-if="article.paragraphe && article.paragraphe.value">
            <div v-for="(paragraph, index) in article.paragraphe.value.document.children" :key="index">
              <p v-if="paragraph.type === 'paragraph'">
                {{ getShortenedContent(paragraph.children[0].value) }}
              </p>
              <code v-if="paragraph.type === 'code'">{{ paragraph.blocks[0].text }}</code>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  
  
  