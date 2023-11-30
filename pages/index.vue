<script setup>
import Home from "@/cms/queries/home";
const { data: home, error: errors } = await useLazyAsyncQuery(Home);
console.log(home);
const getShortenedContent = (content) => {
  const maxLength = 150; // Adjust the maximum length as needed
  return content.length > maxLength ? `${content.slice(0, maxLength)}...` : content;
};
const formatDate = (isoDateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(isoDateString);
  return date.toLocaleDateString(undefined, options);
};
</script>

<template>
  <div class="section-container">
    <div
      :style="{ backgroundImage: 'url(' + home.home.imageDeFond.url + ')' }"
      class="section-background"
    >
      <h2 class="section-text">{{ home.home.titreHero }}</h2>
    </div>
  </div>
  <div class="section-textLeft">
    <div class="text-content">
      <h2>{{ home.home.sectionTextGauche[0].titreDeLaSection }}</h2>
      <div v-if="home.home.paragraphe && home.home.paragraphe.value">
        <div
          v-for="(paragraph, index) in home.home.paragraphe.value.document
            .children"
          :key="index"
        >
          <p v-if="paragraph.type === 'paragraph'">
            {{ paragraph.children[0].value }}
          </p>
          <code v-if="paragraph.type === 'code'">{{ paragraph.code }}</code>
        </div>
      </div> 
    </div>
    <div class="image-content">
      <img
        :src="home.home.sectionTextGauche[0].image.url"
        alt="imageSectionTextGauche"
      />
    </div>
  </div>
  <div>
    <h2>{{ home.home.titreToutLesArticles }}</h2>
    <div class="section-AllArticles-articles">
      <div class="section-AllArticles-articles-article" v-for="article in home.home.listesDesArticles" :key="article.id">
        <img :src="article.image.url" alt="imageArticle" />
        <div class="article-author">
          <img :src="article.author[0].profileImage.url" alt="imageAuteur" class="roundImageAuthor" />
          <p>{{ article.author[0].nomPrenom }}</p>
        </div>
        <h3>{{ article.titre }}</h3>
        <div v-if="article.paragraphe && article.paragraphe.value">
          <div v-for="(paragraph, index) in article.paragraphe.value.document.children" :key="index">
            <p v-if="paragraph.type === 'paragraph'">
              {{ getShortenedContent(paragraph.children[0].value) }}
            </p>
            <code v-if="paragraph.type === 'code'">{{ paragraph.code }}</code>
          </div>
        </div> 
        <a :href="`/article/${article.slug}`">Lire la suite</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style de la section avec l'image en arrière-plan */
.section-container {
  position: relative;
  width: 100%;
  height: 750px; /* Ajustez la hauteur selon vos besoins */
  overflow: hidden;
}

/* Image en arrière-plan avec un voile gris semi-transparent */
.section-background {
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
}

.section-background::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5); /* Voile gris semi-transparent */
}

/* Style du texte en blanc centré */
.section-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 3em; /* Ajustez la taille de la police selon vos besoins */
}
/* Style de la section avec texte à gauche et image à droite */
.section-textLeft {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px; /* Ajustez le rembourrage selon vos besoins */
}

.text-content {
  flex: 1;
  padding-right: 20px; /* Espace entre le texte et l'image, ajustez selon vos besoins */
}

h2,
p {
  color: #333; /* Couleur du texte, ajustez selon vos besoins */
}

.image-content img {
  max-width: 100%; /* Pour que l'image ne dépasse pas la largeur du conteneur */
  height: auto;
}

/* Style for the section containing all articles */
.section-AllArticles {
  padding: 20px; /* Adjust padding as needed */
}

/* Style for the title of the section */
.section-AllArticles h2 {
  color: #333; /* Adjust text color as needed */
}

/* Style for the container of all articles */
.section-AllArticles-articles {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust the gap between articles as needed */
}

/* Style for each individual article card */
.section-AllArticles-articles-article {
  border: 1px solid #ddd; /* Border color, adjust as needed */
  border-radius: 8px; /* Adjust border radius as needed */
  overflow: hidden;
  width: calc(
    33.333% - 20px
  ); /* Adjust width and margin as needed for a 3-column layout */
  margin-bottom: 20px; /* Adjust margin as needed */
}

/* Style for the title of each article card */
.section-AllArticles-articles-article h3 {
  margin: 0;
  padding: 10px; /* Adjust padding as needed */
  background-color: #f5f5f5; /* Background color, adjust as needed */
}

/* Style for the content of each article card */
.section-AllArticles-articles-article p {
  padding: 10px; /* Adjust padding as needed */
}

/* Style for the image in each article card */
.section-AllArticles-articles-article img:not(.roundImageAuthor) {
  width: 100%;
  height: auto;
  display: block;
}
.roundImageAuthor{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.article-author{
  display: flex;
  align-items: center;
  margin: 10px;
}
</style>
