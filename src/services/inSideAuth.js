import axiosObj from "./axiosConfig";
import { API } from "../constants/apiConstant";
import { apiEncryptionData } from "../utils";
import ReduxStore from "../store";

const InsideAuthApi = () => {
  // const defaultHeaders = {
  //     "Content-Type": "application/json",
  //     "Authorization": "Bearer " + authStore.access_token
  // };
  // const formDataHeaders = {
  //     "Content-Type": "multipart/form-data",
  //     "Authorization": "Bearer " + authStore.access_token
  // };
  return {
    async userListApi() {
      const token = ReduxStore.getState().auth.data.token.access_token;
      const defaultHeaders = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      return axiosObj({
        url: API.authUrls.allUser,
        method: "GET",
        headers: { ...defaultHeaders },
      });
    },
    async fetchAvatarApi(data) {
      const token = ReduxStore.getState().auth.data.token.access_token;
      const defaultHeaders = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      return axiosObj({
        url: API.authUrls.fetchAvatar + data,
        method: "GET",
        headers: { ...defaultHeaders },
      });
    },
    async logout() {
      const token = ReduxStore.getState().auth.data.token.access_token;
      const defaultHeaders = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      return axiosObj({
        url: API.authUrls.logout,
        method: "POST",
        headers: { ...defaultHeaders },
      });
    },
  };
};

export default InsideAuthApi;
