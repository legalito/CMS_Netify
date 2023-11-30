export default gql`
  query Category {
    allCategories {
      nom
    }
    allArticles {
      id
      author {
        nomPrenom
        profileImage {
          url
        }
      }
      catGorie {
        nom
      }
      slug
      titre
      image {
        url
      }
      paragraphe {
        blocks
        links
        value
      }
      seoMetadata {
        twitterCard
        title
        description
        image {
          url
        }
      }
    }
  }
`;
