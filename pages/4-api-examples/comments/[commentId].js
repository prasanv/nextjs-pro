import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function CommentById() {
  const router = useRouter();
  const [comment, setComment] = useState({});
  const commentId = router.query.commentId;

  useEffect(() => {
    fetch(`/api/comments/${commentId}`)
      .then((res) => res.json())
      .then((data) => setComment(data))
      .catch((err) => console.log(err));
  }, [commentId]);

  return (
    <div>
      <h2> Individual Comments </h2>
      {comment?.name}
    </div>
  );
}

export default CommentById;
