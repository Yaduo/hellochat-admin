const getConfig = (key) =>
  (window as any)._env_ && (window as any)._env_[key]
    ? (window as any)._env_[key]
    : process.env[key];

const configs = {
  DEBUG: getConfig("REACT_APP_DEBUG"),
  DEV_MODE: getConfig("REACT_APP_DEV_MODE"),
  BASE_API_URL: getConfig("REACT_APP_BASE_API_URL"),
  TEMP_TOKEN: getConfig("REACT_APP_TEMP_TOKEN"),
  HELLOCHAT_BASE_API_URL: getConfig("REACT_APP_HELLOCHAT_BASE_API_URL"),
  KPI_USERNAME: getConfig("REACT_APP_KPI_USERNAME"),
  KPI_PASSWORD: getConfig("REACT_APP_KPI_PASSWORD"),
};

export default configs;
