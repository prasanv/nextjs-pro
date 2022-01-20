import Link from "next/link";
import React, { useEffect, useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState(null);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [comments]);

  const postComments = async (e) => {
    // e.preventDefault();
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, comment }),
    });
    const data = await res.json();
    console.log({ data });
  };

  const onClickDelete = (id) => {
    fetch(`/api/comments/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>CommentsPage</h2>
      <div>
        <form>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Comments: </label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></input>
          <button type="submit" onClick={postComments}>
            submit
          </button>
        </form>
      </div>
      <div>
        {comments?.map((item) => (
          <div key={item.id}>
            <Link href={`/4-api-examples/comments/${item.id}`}>
              <a>
                <h4>{item.name}</h4>
                <p>{item.comment}</p>
              </a>
            </Link>
            <button type="button" onClick={() => onClickDelete(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsPage;
