export default gql`
query Article($slug: String!) {
  article(filter: {slug: {eq: $slug}}) {
    author {
      nomPrenom
      profileImage {
        url
      }
    }
    id
    slug
    titre
    image {
      url
    }
    paragraphe {
      value
      links
      blocks
    }
  }
}`;
