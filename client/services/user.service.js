// Data service

import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/user/test/";

const createPet = (userId, name, age, breed, weight) => {
  return axios.post("http://localhost:8080/api/pets/add-pet", {
    userId, 
    name,
    age, 
    breed, 
    weight
  });
};

const editPet = async (username, name, target, id) => {
  return await axios.put(API_URL +  id, {
    target, 
    name,
    username
  })};

const getPublicContent = () => {
  return axios.get(API_URL + "public");
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  createPet,
  editPet
};
export default userService