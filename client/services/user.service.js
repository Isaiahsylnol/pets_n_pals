// Data service

import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/pets/";

const createPet = (userId, name, age, breed, weight) => {
  return axios.post(API_URL + 'add-pet', {
    userId, 
    name,
    age, 
    breed, 
    weight
  });
};

const getPublicContent = () => {
  return axios.get(API_URL + "all");
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
  createPet
};
export default userService