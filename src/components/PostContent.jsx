import React from "react";

const PostContent = ({ content }) => {
  console.log("PostContent");
  return (
    <div>
      {content ? (
        <>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </>
      ) : (
        <>
          <h2>Select a post</h2>
        </>
      )}
    </div>
  );
};

export default React.memo(PostContent);
