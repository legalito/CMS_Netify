export default gql`
query footerMenu {
  footerMenu {
    mapWebsite {
      ... on HomeRecord {
        id
        titreHero
        slug
        titreToutLesArticles
      }
      ... on ToutLesArticleRecord {
        id
        listeArticle {
          titre
          slug
        }
      }
    }
    logoFooter {
      url
    }
    listesDesArticles {
      titre
      slug
      id
    }
  }
}`;