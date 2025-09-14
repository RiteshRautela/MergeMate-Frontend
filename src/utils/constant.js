// used in production
// export const Base_Url = "/api"

//  used for local dev 

export const Base_Url = location.hostname === "localhost" ? "http://localhost:7777" : "/api";