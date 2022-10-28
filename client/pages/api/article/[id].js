
const data = require('../../../mock_data/articles.json');
export default function handler(req, res) {
  let article = data.find(o => o.id === req.query.id);
    res.status(200).json({
      article,
    });
  }
  