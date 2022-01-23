import { comments } from "data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const newComment = {
      id: Date.now().toString(),
      ...req.body,
    };
    comments.push(newComment);
    res.status(200).json(newComment);
  }
}
