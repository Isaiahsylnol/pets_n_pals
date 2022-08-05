import axios from "axios";
const API_URL = 'https://api.thedogapi.com/v1/breeds';
const getDogBreeds = async () => {
    return await axios.get(API_URL)
};

const petService = {
    getDogBreeds
}

export default petService;