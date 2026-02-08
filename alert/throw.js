const express = require('express');
const router = express.Router();


router.get('/my-alerts', async (req, res) => {
  try {
    const alerts = await Alert.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching alerts" });
  }
});

router.patch('/read/:id', async (req, res) => {
  await Alert.findByIdAndUpdate(req.params.id, { isRead: true });
  res.sendStatus(200);
});

module.exports = router;