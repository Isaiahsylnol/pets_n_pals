import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTutorial, deleteTutorial } from "../slices/tutorials";
import PetService from "../services/pet.service";

const Dog = (props) => {
  const initialDogState = {
    id: null,
    name: "",
    age: "",
    breed:"",
    weight: null
  };
  const [currentPet, setCurrentPet] = useState(initialDogState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getPet = id => {
    PetService.get(id)
      .then(response => {
        setCurrentPet(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPet(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentPet({ ...currentTutorial, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentPet.id,
      title: currentPet.title,
      description: currentPet.description,
      published: status
    };

    dispatch(updateTutorial({ id: currentPet.id, data }))
      .unwrap()
      .then(response => {
        console.log(response);
        setCurrentPet({ ...currentPet, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateTutorial({ id: currentPet.id, data: currentPet }))
      .unwrap()
      .then(response => {
        console.log(response);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeDog = () => {
    dispatch(deleteTutorial({ id: currentPet.id }))
      .unwrap()
      .then(() => {
        props.history.push("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentPet ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentPet.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentPet.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentPet.published ? "Published" : "Pending"}
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={removeDog}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Pet...</p>
        </div>
      )}
    </div>
  );
};

export default Dog;
