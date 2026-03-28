const LOCAL_API_BASE_URL = "http://localhost:7777"
const PRODUCTION_API_BASE_URL = "https://mergemate-backend.onrender.com"

export const Base_Url =
  window.location.hostname === "localhost"
    ? LOCAL_API_BASE_URL
    : PRODUCTION_API_BASE_URL
