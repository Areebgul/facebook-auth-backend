const User = require('../models/User')
const Facebook = require('../config/facebook')
const axios = require('axios');

exports.generateToken = async (req, res) => {
  try {
    const { shortLivedToken, facebookId } = req.body;

    const response = await axios.get(
      `https://graph.facebook.com/v12.0/oauth/access_token?` +
      `grant_type=fb_exchange_token&` +
      `client_id=${Facebook.appID}&` +
      `client_secret=${Facebook.appSecret}&` +
      `fb_exchange_token=${shortLivedToken}`
    );

    const longLivedToken = response.data.access_token;
    // Store the long-lived token into the database
    const user = await User.findOneAndUpdate(
      { facebookId }, // The query to find the document
      { longLivedToken }, // The update operation
      { new: true, upsert: true } // Use upsert to create a new user if not found
    );

    if (user) {
      res.json({ message: 'Token stored successfully', longLivedToken });
    } else {
      res.status(500).json({ message: 'Token storage failed' });
    }
  } catch (error) {
    console.log({ error });
    console.error('Token exchange error:', error);
    res.status(500).json({ message: 'Token exchange failed' });
  }
};

exports.retrieveInsights = (req, res) => {
  // Retrieve and return insights data
  res.json({ insights: 'your-insights-data' });
};
