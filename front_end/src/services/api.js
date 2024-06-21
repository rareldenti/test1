import http from "./http";
export const register = (credentials) => {
  return http.post("/admin/auth/register", credentials);
};
