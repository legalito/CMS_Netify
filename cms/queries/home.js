export default gql`
query home{
  home {
    imageDeFond {
      url
    }
    titreHero
    titreToutLesArticles
    listesDesArticles {
      id
      articleBody {
        articleTitre
        articleSlug
        paragraphe {
          value
          links
          blocks
        }
        _publishedAt
        auteur {
          _createdAt
          nomPrenom
          profileImage {
            url
          }
        }
        id
        image {
          url
        }
      }
    }
    paragraphe {
      blocks
      links
      value
    }
    sectionTextGauche {
      titreDeLaSection
      paragraphe {
        links
        blocks
        value
      }
      image {
        url
      }
    }
  }
}`;