import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Select, TextInput } from "flowbite-react";
import PostCard from "../components/PostCard";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "all",
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTermFromUrl = searchParams.get("searchTerm");
    const sortFromUrl = searchParams.get("sort");
    const categoryFromUrl = searchParams.get("category");

    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const searchQuery = searchParams.toString();
        const res = await fetch(`/api/post/getposts?${searchQuery}`);

        if (!res.ok) {
          console.log(data.message);
        } else {
          const data = await res.json();
          setPosts(data.posts);

          if (data.posts.length === 9) {
            setShowMore(true);
          } else {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSidebarData({
        ...sidebarData,
        searchTerm: e.target.value,
      });
    }
    if (e.target.id === "sort") {
      setSidebarData({
        ...sidebarData,
        sort: e.target.value,
      });
    }
    if (e.target.id === "category") {
      const category = e.target.value === "all" ? "" : e.target.value;

      setSidebarData({
        ...sidebarData,
        category,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("searchTerm", sidebarData.searchTerm);
    searchParams.set("sort", sidebarData.sort);
    searchParams.set(
      "category",
      sidebarData.category === "all" ? "" : sidebarData.category
    );
    const searchQuery = searchParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("startIndex", startIndex);
    const searchQuery = searchParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    } else {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              검색할 내용:
            </label>
            <TextInput
              placeholder="검색..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">정렬:</label>
            <Select id="sort" value={sidebarData.sort} onChange={handleChange}>
              <option value="desc">최신순</option>
              <option value="asc">과거순</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">카테고리:</label>
            <Select
              id="category"
              value={sidebarData.category}
              onChange={handleChange}
            >
              <option value="all">모두</option>
              <option value="uncategorized">기타</option>
              <option value="javascript">JavaScript</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
            </Select>
          </div>
          <Button type="submit" outline gradientDuoTone="purpleToPink">
            필터 적용
          </Button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
          검색 결과:
        </h1>
        <div className="p-7 flex flex-wrap justify-center gap-4">
          {!loading && posts.length === 0 && (
            <h1 className="text-2xl font-semibold text-gray-500">
              해당하는 포스트가 없습니다.
            </h1>
          )}
          {loading && <p className="text-xl text-gray-500">로딩중...</p>}
          {!loading &&
            posts &&
            posts.length > 0 &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-7 w-full"
            >
              더보기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
