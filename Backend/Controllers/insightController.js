import Insight from "../models/Insight.js";
const insightController = {
  async getAllInsights(req, res) {
    try {
      const insights = await Insight.find();
      res.json({ data: insights });
     
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default insightController;
