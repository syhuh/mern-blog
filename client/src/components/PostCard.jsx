import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full h-[340px] overflow-hidden border rounded-lg sm:w-[360px] border-teal-500">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="h-[240px] w-full object-cover group-hover:h-[180px] transition-all duration-300"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-md font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-center py-2 rounded-md rounded-tl-none m-2 transition-all duration-300"
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
