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

export const GET_POST_BY_SLUG = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      title
      cover {
        url
      }
      body {
        html
      }
      author {
        name
        avatar {
          url
        }
        slug
      }
    }
  }
`;
