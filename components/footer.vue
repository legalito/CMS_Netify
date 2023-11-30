<script setup>
  import FooterMenu from "@/cms/queries/footer";
  const { data: footerMenu, error: footerError } = await useLazyAsyncQuery(FooterMenu);
</script>
<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <img :src="footerMenu.footerMenu.logoFooter.url" alt="Logo" />
      </div>
      <div class="footer-links">
        <h4>Liens Utiles</h4>
        <ul>
          <li v-for="link in footerMenu.footerMenu.mapWebsite" :key="link.id">
            <a :href="`/${link.slug}`">{{ link.titreHero || 'Accueil' }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-articles">
        <h4>Derniers Articles</h4>
        <ul>
          <li v-for="article in footerMenu.footerMenu.listesDesArticles" :key="article.id">
            <a :href="`/article/${article.slug}`">{{ article.titre }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-logo img {
    max-width: 100px;
  }
  
  .footer-links ul,
  .footer-articles ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li,
  .footer-articles li {
    margin: 10px 0;
  }
  
  .footer-links a,
  .footer-articles a {
    color: #fff;
    text-decoration: none;
  }
  </style>
 
  