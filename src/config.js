const env = process.env || {};

export default {
  apiUrl: getApiUrl(),
};

function getApiUrl() {
  return env.REACT_APP_API_URL || 'https://pedidopago-api-dev.herokuapp.com';
}
