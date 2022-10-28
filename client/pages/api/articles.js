
const data = require('../../mock_data/articles.json');
export default function handler(req, res) {
    res.status(200).json({ data })
  }
  