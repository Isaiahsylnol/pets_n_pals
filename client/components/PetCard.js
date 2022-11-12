import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { editPet } from "../slices/auth";
import EditPetForm from "./Modal/Form";
import PetService from "../services/pet.service";
import { useFormik } from "formik";

function PetCard({ image, data }) {
  const [dict] = useState([]);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { name, age, breed, weight } = data;

  // Population of the pet breed select tag's options
  useEffect(() => {
    PetService.getDogBreeds().then((response) =>
      response.data.forEach((element) => {
        dict.push({
          value: element.name,
          label: element.name,
        });
      })
    );
  }, []);

  const editToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const validate = (values) => {
    const errors = {};
    // Name validation
    if (!values.name) {
      errors.name = "Please enter a valid name.";
    } else if (values.name.length < 3) {
      errors.name = "Name must be more than 2 characters.";
    } else if (values.name.length > 20) {
      errors.name = "Name must be less than 20 characters.";
    }
    // Age validation
    if (!values.age) {
      errors.age = "Please enter a valid age.";
    } else if (values.age > 30) {
      errors.age = "Age must be less than 30.";
    }
    // Weight validation
    if (!values.weight) {
      errors.weight = "Please enter a valid weight.";
    } else if (values.weight > 230) {
      errors.weight = "Weight must be less than 230lb.";
    }
    // Breed validation
    if (!values.breed) {
      errors.breed = "Please enter a valid breed.";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name,
      age,
      weight,
      breed,
    },
    validate,
    onSubmit: (values) => {
      const { name, age, breed, weight } = values;
      let target = data.name;
      let username = JSON.parse(localStorage.getItem("user")).username;
      let id = JSON.parse(localStorage.getItem("user")).id;

      dispatch(
        editPet({
          name,
          weight,
          age,
          breed,
          target,
          username,
          id,
        })
      );
      editToggle();
    },
  });

  return (
    <div className="rounded-xl bg-slate-500 text-white p-6">
      {toggle ? (
        <div className="float-right p-3 text-white rounded bg-zinc-800">
          <button onClick={editToggle}>Cancel</button>
        </div>
      ) : (
        <div className="float-right p-3">
          <button onClick={editToggle}>Edit</button>
        </div>
      )}
      <div className="p-4 flex">
        <Image src={image} alt="Pet thumbnail" width={72} height={76} />
      </div>

      {toggle ? (
        <div className="m-4">
          <EditPetForm
            formik={formik}
            breeds={dict}
            onSubmit={formik.handleSubmit}
            submitBtnTitle="SAVE"
          />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 justify-center p-5 rounded-xl">
            <div>
              <h2 className="font-semibold text-xl">{name}</h2>
              <h4 className="text-xl">{breed}</h4>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default PetCard;