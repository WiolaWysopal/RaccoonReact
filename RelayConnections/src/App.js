import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_POSTS = gql`
  query GetPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          title
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

function App() {
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: 10, after: null },
    notifyOnNetworkStatusChange: true,
  });

  if (loading && !data) return <p>Loading...</p>;
  if (error) return <p>Error 😢</p>;

  const { edges, pageInfo } = data.posts;

  const loadMore = () => {
    fetchMore({
      variables: {
        first: 10,
        after: pageInfo.endCursor,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return {
          posts: {
            edges: [...prevResult.posts.edges, ...fetchMoreResult.posts.edges],
            pageInfo: fetchMoreResult.posts.pageInfo,
          },
        };
      },
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Posts</h1>
      <ul>
        {edges.map(({ node }) => (
          <li key={node.id}>{node.title}</li>
        ))}
      </ul>
      {pageInfo.hasNextPage && (
        <button onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}

export default App;
