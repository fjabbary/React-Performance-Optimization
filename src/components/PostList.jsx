import React, { useMemo } from "react";

const PostList = ({ posts, selectedUserId, handlePostSelect }) => {
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      return post.userId === selectedUserId;
    });
  }, [selectedUserId, posts]);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div
          key={post.id}
          onClick={() => handlePostSelect(post)}
          style={{
            border: "1px solid",
            padding: "15px",
            margin: "15px",
            background: "rgb(245,245,245)",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
