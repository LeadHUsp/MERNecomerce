import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const AuthApi = {
  logIn({ email, password }) {
    const body = JSON.stringify({ email, password });
    return instance.post("/api/user/login", body);
  },
  register({ name, email, password }) {
    const body = JSON.stringify({ name, email, password });
    return instance.post("/api/user/register", body);
  },
  getUserData(token) {
    const config = {
      headers: { "x-auth-token": token },
    };
    return instance.get("/api/user", config);
  },
};
