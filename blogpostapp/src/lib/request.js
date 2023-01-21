import Axios from "axios";
const API_HOST = "http://localhost:5000";
const getUrl = (endpoint) => {
  return API_HOST + endpoint;
};

/**
 * @description POST method to call post api (without token)
 * @author Satyam_kushwaha
 * @date 2023-01-21
 * @param endpoint endpoint for api
 * @param data payload data
 */
export const Post = async (endpoint, data) => {
  return Axios.post(
    getUrl(endpoint),
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

/**
 * @description GET method to call get api (without token)
 * @author Satyam_kushwaha
 * @date 2023-01-21
 * @param endpoint: String - endpoint for api
 * @param extraHeaders: Object - extra headers
 */
export const Get = async (endpoint, data) => {
  return Axios.get(
    getUrl(endpoint),
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};



// -----hendling the axios-----
Axios.interceptors.request.use(
  (request) => {
    request.headers["Content-Type"] = "application/json";
    return request;
  },
  function (error) {
    return Promise.reject(error);
  },
  { synchronous: true }
);

Axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  function (error) {
    if (!error || !error.response) {
      return Promise.reject(error);
    }
    if (error?.response?.status === 401) {
      alert("something went wrong");
    }
    return Promise.reject(error);
  }
);
