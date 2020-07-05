const getApiUrl = () =>
  process.env.NODE_ENV === "production"
    ? "http://dservice.mkatanski.com/api"
    : "http://localhost:8080";

export default {
  FULL_PUBLIC_API_URL: getApiUrl()
};
