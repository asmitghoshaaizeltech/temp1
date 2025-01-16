import { useEffect } from "react";
import { APIClient, setAuthorization } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("authUser");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

if (localStorage.getItem("token")) {
  const users = localStorage.getItem("token");
  setAuthorization(users);
}

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// ----- Login page redirect-----
const token = localStorage.getItem("token");
  if (token == "null") {
    localStorage.clear();
    window.location.pathname = "/login";
  }
// ----- Login page redirect-----

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data).catch((err) => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case 500:
          message =
            "Sorry! something went wrong, please contact our support team";
          break;
        case 401:
          window.location.pathname = "/login";
          message = "Invalid credentials";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};

// User Api
export const UserlistApi = (requserdata) => api.get(url.GET_USER_LIST, requserdata);
export const UserlistViewApi = (requserdata) => api.get(url.GET_USER_VIEW, requserdata);
export const AddUserlistApi = async (requserdata) => await api.create(url.ADD_USER_LIST, requserdata);
export const DelUserlistApi = async (requserdata) => await api.get(url.DELETE_USER_LIST, requserdata);
export const UpdateUserdatalistApi = async (requserdata) => await api.create(url.UPDATE_USER_DATA_LIST, requserdata);
