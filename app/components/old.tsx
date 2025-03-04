"use client";
import { useEffect, useState } from "react";
import { Post } from "../types/post";

const Old = () => {
  const [posts, setPost] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  if (!posts.length) return <div>Loading...</div>;

  return (
    <div className="">
      <ul className="p-10">
        {posts.map((post) => (
          <li className="list-decimal" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Old;
