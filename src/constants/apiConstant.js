export const API = {
  currentEnv: 'dev', 
  // currentEnv: 'qa',
  // currentEnv: "prod",
  baseUrls: {
    // dev: "http://192.168.0.108/api",
    dev: "http://65.2.142.134/api",
    qa: "https://yarifi-backend.herokuapp.com/api",
    uat: "",
    prod: "http://65.2.142.134/api",
  },
  noAuthUrls: {
    login: "/login",
    otpVerify: "/user_varification",
    requestForChangePassword: "/request_for_change_password",
    userIdCheck: "/user_id_check",
    registerUser: "/register_user",
    changePassword: "/change_password",
    userDetails: "/user_details",
  },
  authUrls: {
    allUser: "/all_user",
    logout: "/logout",
    fetchAvatar: "/fetch_avatar",
  },
};
