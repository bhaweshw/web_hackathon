const cron = require('node-cron');

cron.schedule('0 */6 * * *', () => {
  console.log('Running Interstellar Risk Check...');
  checkAndGenerateAlerts();
});