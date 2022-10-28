import axios from 'axios';
import dogHealth from '../mock_data/articles.json';
const API_URL = 'https://api.thedogapi.com/v1/breeds';
const getDogBreeds = async () => {
  return await axios.get(API_URL);
};

const curatedPetFeed = (pets) => {
  let result;
  if (pets) {
    result = dogHealth.filter((o1) =>
      pets?.some((o2) => o1.breed === o2.breed || o1.breed === "Any")
    );
  } else {
    result = dogHealth.filter((o1) => o1.breed === "Any");
  }
  return result;
};

const deletePet = async (props) => {
  return await axios.delete(`http://localhost:8080/api/pets/${props.id}`, {
    data: props,
  });
};

const PetService = {
  getDogBreeds,
  curatedPetFeed,
  deletePet,
};

export default PetService;
