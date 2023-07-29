const articleModel = require('../models/article')

module.exports = {
  article: async (req, res) => {
    try {
      const articles = await articleModel.getAll(req.query.q, req.query.page)
      return res.status(200).json({
        success: 1,
        data: articles
      })
    } catch (err) {
      return res.status(500).json({
        success: 0,
        message: err
      })
    }
  }
}
