import axios from 'axios';
const API_URL = 'https://api.thedogapi.com/v1/breeds';
const getDogBreeds = async () => {
    return await axios.get(API_URL)
};

const deletePet = async (name) => {
    return await axios.delete(`http://localhost:8080/api/pets/62cf23619797694d94e4f943`, { data: name })
};

const petService = {
    getDogBreeds,
    deletePet
}

export default petService;