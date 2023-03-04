import axiosObj from './axiosConfig';
import {API} from '../constants/apiConstant';
import {apiEncryptionData} from '../utils';

const OutsideAuthApi = () => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  const formDataHeaders = {
    'Content-Type': 'multipart/form-data',
  };
  return {
    userDetailsApi(param) {
      return axiosObj({
        url: API.noAuthUrls.userDetails + param,
        method: 'GET',
        headers: {...defaultHeaders},
      });
    },
    loginApi(data) {
      const varData = apiEncryptionData(data);
      return axiosObj({
        url: API.noAuthUrls.login,
        method: 'POST',
        headers: {...defaultHeaders},
        data: varData,
      });
    },
    verifyOtp(data) {
      const varData = apiEncryptionData(data);
      return axiosObj({
        url: API.noAuthUrls.otpVerify,
        method: 'POST',
        headers: {...defaultHeaders},
        data: varData,
      });
    },
    requestForChangePassword(data) {
      const varData = apiEncryptionData(data);
      return axiosObj({
        url: API.noAuthUrls.requestForChangePassword,
        method: 'POST',
        headers: {...defaultHeaders},
        data: varData,
      });
    },
    registerUserApi(data) {
      const varData = apiEncryptionData(data);
      return axiosObj({
        url: API.noAuthUrls.registerUser,
        method: 'POST',
        headers: {...defaultHeaders},
        data: varData,
      });
    },
    changePasswordApi(data) {
      const varData = apiEncryptionData(data);
      return axiosObj({
        url: API.noAuthUrls.changePassword,
        method: 'POST',
        headers: {...defaultHeaders},
        data: varData,
      });
    },
    userIdCheckApi(data) {
      const varData = apiEncryptionData(data);
      return axiosObj({
        url: API.noAuthUrls.userIdCheck,
        method: 'POST',
        headers: {...defaultHeaders},
        data: varData,
      });
    },
  };
};

export default OutsideAuthApi;
