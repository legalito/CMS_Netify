export default gql`
query Articles{
    
    allArticles {
      id
      title
      _status
      _firstPublishedAt
    }
    _allArticlesMeta {
      count
    }
    article {
      title
      content
    }
  }`;
