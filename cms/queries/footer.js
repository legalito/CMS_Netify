export default gql`
query footerMenu {
    footerMenu {
      mapWebsite {
        ... on HomeRecord {
          id
          titreHero
        }
        ... on ToutLesArticleRecord {
          id
        }
      }
      logoFooter {
        url
      }
      listesDesArticles {
        articleBody {
          articleTitre
          id
        }
      }
    }
  }
`;