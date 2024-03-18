import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DashCountCard from "./DashCountCard";
import DashTableCard from "./DashTableCard";
import {
  HiOutlineUserGroup,
  HiAnnotation,
  HiDocumentText,
} from "react-icons/hi";

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/user/getusers?limit=5");
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comment/getcomments?limit=5");
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts?limit=5");
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser.isAdmin) {
      fetchUsers();
      fetchComments();
      fetchPosts();
    }
  }, [currentUser]);

  const userColumnDefs = [{ header: "user image" }, { header: "user name" }];
  const userRows = users.map((user) => {
    const user_image = (
      <img
        src={user.profilePicture}
        alt="user"
        className="w-10 h-10 rounded-full bg-gray-500"
      />
    );
    const user_name = user.username;

    return [user_image, user_name];
  });

  const commentColumnDefs = [
    { header: "comment content", className: "w-96" },
    { header: "likes" },
  ];
  const commentRows = comments.map((comment) => {
    const comment_content = <p className="line-clamp-2">{comment.content}</p>;
    const likes = comment.numberOfLikes;

    return [comment_content, likes];
  });

  const postColumnDefs = [
    { header: "post image" },
    { header: "post title", className: "w-96" },
    { header: "category", className: "w-5" },
  ];
  const postRows = posts.map((post) => {
    const post_image = (
      <img
        src={post.image}
        alt="post"
        className="w-14 h-10 rounded-md bg-gray-500"
      />
    );
    const post_title = post.title;
    const category = post.category;

    return [post_image, post_title, category];
  });

  return (
    <div className="p-3 md:mx-auto">
      <div className="flex flex-wrap gap-4 justify-center">
        <DashCountCard
          title="total users"
          totalCounts={totalUsers}
          lastMonthCounts={lastMonthUsers}
          icon={
            <HiOutlineUserGroup className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          }
        />
        <DashCountCard
          title="total comments"
          totalCounts={totalComments}
          lastMonthCounts={lastMonthComments}
          icon={
            <HiAnnotation className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          }
        />
        <DashCountCard
          title="total posts"
          totalCounts={totalPosts}
          lastMonthCounts={lastMonthPosts}
          icon={
            <HiDocumentText className="bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          }
        />
      </div>
      <div className="flex flex-wrap gap-4 py-3 mx-auto justify-center">
        <DashTableCard
          title="Recent users"
          linkTo="/dashboard?tab=users"
          columnDefs={userColumnDefs}
          rows={userRows}
        />
        <DashTableCard
          title="Recent comments"
          linkTo="/dashboard?tab=comments"
          columnDefs={commentColumnDefs}
          rows={commentRows}
        />
        <DashTableCard
          title="Recent posts"
          linkTo="/dashboard?tab=posts"
          columnDefs={postColumnDefs}
          rows={postRows}
        />
      </div>
    </div>
  );
}
