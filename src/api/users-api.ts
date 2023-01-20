import {instance} from './api'
import {profileAPI} from './profile-api'

const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId: number) {
    console.warn("Obsolete method. Please profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export default userAPI