const getApiUrl = () =>
  process.env.NODE_ENV !== "development"
    ? "http://deployapi.mkatanski.com/api"
    : "http://localhost:8080/api";

export default {
  FULL_PUBLIC_API_URL: getApiUrl()
};
