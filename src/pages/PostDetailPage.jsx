import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import dompurify from "dompurify";
import { IoArrowBackOutline } from "react-icons/io5";

import { GET_POST_BY_SLUG } from "../graphql/queries";

function PostDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  return (
    <div className="mx-auto lg:w-[70%]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{data?.post.title}</h2>
        <button onClick={() => navigate(-1)}>
          <IoArrowBackOutline className="text-indigo-500 text-xl" />
        </button>
      </div>
      <img
        className="rounded w-full mb-12"
        src={data?.post.cover.url}
        alt={data?.post.title}
      />
      <Link to={`authors/${data?.post.author.slug}`}>
        <div className="flex items-center gap-2 mb-6 pb-2 border-b-1 border-gray-200">
          <img
            className="w-10 h-10 rounded-full"
            src={data?.post.author.avatar.url}
            alt={data?.post.author.name}
          />
          <p>{data?.post.author.name}</p>
        </div>
        <div
          className="post-body px-2"
          dangerouslySetInnerHTML={{
            __html: dompurify.sanitize(data?.post.body.html),
          }}
        />
      </Link>
    </div>
  );
}

export default PostDetailPage;
