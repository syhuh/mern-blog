import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const response = await fetch("/api/post/getposts");
        const data = await response.json();
        setPosts(data.posts);
      };
      fetchPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 py-28 px-3">
        <h1 className="text-3xl font-bold lg:text-6xl">방문을 환영합니다!</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          이 블로그에서 웹개발, 소프트웨어공학, 프로그래밍언어, AI 등의 주제에
          대해 다양한 포스팅과 튜토리얼을 볼 수 있습니다.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          모든 포스팅 보기
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center ">최근 포스팅</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-center text-teal-500 hover:underline"
            >
              모든 포스팅 보기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
