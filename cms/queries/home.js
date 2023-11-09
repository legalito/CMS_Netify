export default gql`
query Home{
    allHomes {
      id
      paragrapheSectionTextGauche
      titre
      titreSectionTextGauche
      titreToutLesArticles
      imageDeFond {
        title
        url
      }
      imageDroite {
        url
        title
      }
      listesDesArticles {
        corpsDeLArticle
        titreArticle
        id
        imageArticle {
          url
          title
        }
      }
      paragraphe {
        value
      }
    }
  }`;