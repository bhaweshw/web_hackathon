const cron = require('node-cron');
const { checkAndGenerateAlerts } = require("./alert");

cron.schedule('0 */6 * * *', () => {
  console.log('Running Interstellar Risk Check...');
  checkAndGenerateAlerts();
});