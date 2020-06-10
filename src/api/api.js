import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "fa01b3e6-c170-42b4-beac-630ea913c9b4" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },

  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};

setUser(userId) {
  return instance.get(`profile/` + userId)
  .then((response) => {
    this.props.setUserProfile(response.data);
  });
}

