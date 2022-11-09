import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { editPet } from '../slices/auth';

function PetCard({ userId, image, name, description }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log({ [name]: value });
  };

  const editToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const saveEdit = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target.elements.name.value);
    console.log(event.target.name.value);
    let target = name;
    let new_name = event.target.name.value;
    let username = JSON.parse(localStorage.getItem("user")).username 
    let id = JSON.parse(localStorage.getItem("user")).id
    console.log("username: ", userId)
    dispatch(editPet({new_name, target, username, id})) 
    editToggle()
  };

  return (
    <div className="rounded-xl border-2 border-gray-300 bg-gray-100 p-6">
     {toggle ? <div className="float-right p-3 text-white rounded bg-red-500"><button onClick={editToggle}>Cancel</button></div> : <div className="float-right p-3"><button onClick={editToggle}>Edit</button></div>}
     <div className="p-4 flex"><Image src={image} alt="Pet thumbnail" width={72} height={76} /></div>
      
      {toggle ? (
        <div className="m-4">
          <form onSubmit={handleSubmit}>
           <div className="p-4 flex">
           <label className="p-4">
              Name:
              <input type="text" name="name" placeholder={name}/>
            </label>
           </div>
            <button className="mt-4 p-3 bg-cyan-500" type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <> 
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 justify-center p-5 rounded-xl">
            <div>
              

              <h2 className="font-semibold text-xl">{name}</h2>

              <h4 className="text-xl">{description}</h4>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default PetCard;

// <button onClick={EditPet}>Edit</button>
//             {toggle? <button onClick={saveEdit}>Save</button>: null}
