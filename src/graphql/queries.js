import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query {
    authors {
      name
      avatar {
        url
      }
      slug
      id
    }
  }
`;

export const GET_POSTS = gql`
  query {
    posts {
      id
      slug
      author {
        name
        avatar {
          url
        }
      }
      title
      cover {
        url
      }
    }
  }
`;
