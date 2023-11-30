export default gql`
query home{
  home {
    imageDeFond {
      url
    }
    seo {
      description
      title
    }
    listesDesArticles {
      slug
      titre
      id
      author {
        nomPrenom
        profileImage {
          url
        }
      }
      image {
        url
      }
      paragraphe {
        value
        links
        blocks
      }
      seoMetadata {
        description
        title
        twitterCard
        image {
          url
        }
      }
    }
    titreHero
    titreToutLesArticles
    paragraphe {
      blocks
      links
      value
    }
    sectionTextGauche {
      titreDeLaSection
      image {
        url
      }
      paragraphe {
        value
        links
        blocks
      }
    }
  }
}`;