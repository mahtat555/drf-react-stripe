import Axios from "axios";
import { getTokens, isAuthenticated } from "./authUtils";


Axios.defaults.xsrfHeaderName = "X-CSRFToken";
Axios.defaults.xsrfCookieName = "csrftoken";


const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
});

const authRequestInterceptor = (config) => {
  if (config.headers) {
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }
    // config.headers["Timezone-Val"] = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const { access, refresh, expiry } = getTokens();
    if (isAuthenticated({ access, refresh, expiry })) {
      config.headers["authorization"] = `Bearer ${access}`;
      // config.withCredentials = true;
    }
  }
  return config;
};

axios.interceptors.request.use(authRequestInterceptor);

export default axios
