import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { MoonLoader } from "react-spinners";

import { GET_AUTHORS } from "../graphql/queries";

function AuthorsList() {
  const { data, loading, error } = useQuery(GET_AUTHORS);

  return (
    <>
      {!loading ? (
        <ul className="flex flex-col bg-white shadow rounded">
          {data?.authors.map(author => (
            <li
              className="not-last:border-b-1 border-gray-200 p-2"
              key={author.id}
            >
              <Link
                className="flex items-center gap-2"
                to={`authors/${author.slug}`}
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={author.avatar.url}
                  alt={author.name}
                />
                <p>{author.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <MoonLoader color="#615FFF" cssOverride={{ margin: "auto" }} />
      )}
    </>
  );
}

export default AuthorsList;
