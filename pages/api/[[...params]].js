// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const params = req.query.params;
  res.status(200).json(params);
}
