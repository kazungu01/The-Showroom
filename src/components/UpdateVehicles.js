import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import Footer from './Footer';

function UpdateVehicles() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [brand_id, setBrand_id] = useState("")
    
    const {vehicleId} = useParams()
    // const navigate = useNavigate()

   useEffect(() => {
    fetch(`http://localhost:9292/vehicles/${vehicleId}`)
    .then((response) => response.json())
    .then((vehicle) => {
        setTitle(vehicle.title)
        setDescription(vehicle.description)
        setImage(vehicle.image)
        setBrand_id(vehicle.brand_id)
      })
   }, [])

   function update(event){
    event.preventDefault();
    fetch(`http://localhost:9292/vehicles/${vehicleId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title:title, description:description, image:image, brand_id:brand_id })
    })
      .then((response) => response.json())
      .then((newPost) => {
        //   navigate("/");
        });
        event.target.reset()
        alert("Vehicle updated!");

   }
  return (
   
    <div>
         <h1 className='signup'>Update the details of your vehicle here:</h1>
        <form className="form" onSubmit={update}>
        <label for="fname">Name of vehicle:</label>
        <input className="inputs" value={title} type="text" placeholder="name of your vehicle" onChange={function(event){setTitle(event.target.value)}}/> <br></br>
        <label for="fname">Image Url:</label>
        <input className="inputs" value={image} type="text" placeholder="input vehicle image url" onChange={function(event){setImage(event.target.value)}}/><br></br>
        <label for="fname">Vehicle Description:</label>
        <input className="inputs" value={description} type="text" placeholder="describe your vehicle" onChange={function(event){setDescription(event.target.value)}}/><br></br>
        <label for="fname">Vehicle Id:</label>
        <input className="inputs" value={brand_id} type="text" placeholder="input the brand id " onChange={function(event){setBrand_id(event.target.value)}}/>
        <div className="d-grid gap-2">
          <button className="butt" >SEND</button>
      </div>  
      </form>
      <Footer />
    </div>
  )
}

export default UpdateVehicles
