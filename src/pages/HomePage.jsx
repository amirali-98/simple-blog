import AuthorsList from "../components/AuthorsList";
import PostsList from "../components/PostsList";

function HomePage() {
  return (
    <div className="md:flex md:gap-4">
      <div className="mb-6 md:mb-0 md:w-[30%]">
        <h3 className="font-bold text-xl mb-2">نویسنده‌ها</h3>
        <AuthorsList />
      </div>
      <div className="md:w-[69%]">
        <h3 className="font-bold text-xl mb-2">مقالات</h3>
        <PostsList />
      </div>
    </div>
  );
}

export default HomePage;
