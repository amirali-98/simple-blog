import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";

import { GET_POSTS } from "../graphql/queries";

function PostsList() {
  const { data, loading, error } = useQuery(GET_POSTS);
  return (
    <>
      {!loading ? (
        <div className="md:grid md:gap-2 md:grid-cols-2 lg:grid-cols-3">
          {data?.posts.map(post => (
            <div
              className="p-3 bg-white rounded shadow not-last:mb-3 md:not-last:mb-0"
              key={post.id}
            >
              <img
                className="w-full rounded mb-3"
                src={post.cover.url}
                alt={post.title}
              />
              <h4 className="font-bold text-lg mb-3">{post.title}</h4>
              <Link
                className="block text-center font-bold rounded-xl border-2 border-indigo-500 text-indigo-500 transition-colors hover:text-white hover:bg-indigo-500"
                to={`posts/${post.slug}`}
              >
                مطالعه
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <MoonLoader color="#615FFF" cssOverride={{ margin: "auto" }} />
      )}
    </>
  );
}

export default PostsList;
