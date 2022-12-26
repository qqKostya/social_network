import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "40aef231-21d5-4575-a9dd-3fdaf97a7991",
  },
});

const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  unfollow(userId) {
    return instance
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance
      .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then((response) => response.data);
  },
};

export default userAPI;
