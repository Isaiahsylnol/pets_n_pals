import axios from 'axios';
import dogHealth from '../mock_data/dog_health.json'
const API_URL = 'https://api.thedogapi.com/v1/breeds';
const getDogBreeds = async () => {
    return await axios.get(API_URL)
};

const curatedPetFeed = (pets) => {
    let result = dogHealth.filter(o1 => pets?.some(o2 => o1.breed === o2.breed));
    return result;
};

const deletePet = async (name) => {
    return await axios.delete(`http://localhost:8080/api/pets/62cf23619797694d94e4f943`, { data: name })
};

const petService = {
    getDogBreeds,
    curatedPetFeed,
    deletePet
}

export default petService;