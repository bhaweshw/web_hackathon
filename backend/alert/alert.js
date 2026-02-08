const axios = require('axios');

async function checkAndGenerateAlerts() {
  const NASA_API_KEY = process.env.NASA_API_KEY;
  const today = new Date().toISOString().split('T')[0];

  const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&api_key=${NASA_API_KEY}`);
  const asteroids = response.data.near_earth_objects[today];

  for (const neo of asteroids) {
    const risk = calculateRiskScore(
      neo.close_approach_data[0].miss_distance.astronomical,
      neo.close_approach_data[0].relative_velocity.kilometers_per_second,
      neo.estimated_diameter.meters.estimated_diameter_max
    );

    const watchers = await Watchlist.find({ asteroidId: neo.id });

    for (const watch of watchers) {
      if (risk >= watch.customThreshold) {
        await Alert.create({
          userId: watch.userId,
          asteroidId: neo.id,
          asteroidName: neo.name,
          closeApproachDate: neo.close_approach_data[0].close_approach_date,
          riskScore: risk
        });
        
      }
    }
  }
}