import { getPagenatedPosts } from "lib/api";

export default async (req, res) => {
  console.log("==========", Math.random());

  const page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);

  const posts = await getPagenatedPosts(page, limit);

  res.status(200).json(posts);
};
