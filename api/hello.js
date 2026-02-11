export default function handler(req, res) {
  res.status(200).json({
    message: "Hello from Vercel FaaS!",
    method: req.method,
    time: new Date()
  });
}
