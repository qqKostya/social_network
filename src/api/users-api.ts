import {GetItemsType, instance, ResponseType} from './api'
import {profileAPI} from './profile-api'

const userAPI = {
  getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
    return instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
      .then((response) => response.data);
  },

  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`).then((response) => response.data);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>;
  },

  getProfile(userId: number) {
    console.warn("Obsolete method. Please profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export default userAPI