const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  asteroidId: { type: String, required: true }, 
  asteroidName: String,
  closeApproachDate: Date,
  riskScore: Number,
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const WatchlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  asteroidId: { type: String, required: true },
  customThreshold: { type: Number, default: 50 } 
});

const Alert = mongoose.model('Alert', AlertSchema);
const Watchlist = mongoose.model('Watchlist', WatchlistSchema);