import React from 'react';
import '../../App.css';
import { useState } from 'react';
import VehicleCard from '../VehicleCard';
import Footer from '../Footer';
export default function Enlist(){

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    brand_id: ""
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:9292/vehicles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)})
    .then((response) => response.json())
    .then((newPost) => {
        setFormData(newPost)
      });
      event.target.reset()
      alert("Vehicle added!");
  }

  return (
    <div >
      <div className='div-text'>
         <h1 className='sign-up'>Below is a snippet from our Showroom.</h1>
      </div>
     
      <div className='iframe'>
        <iframe width="420" height="315"
             src="https://www.youtube.com/embed/VWrJkx6O0L8">
        </iframe>
      </div>
      <h1 className='signup'>If you'd like your vehicle to be submitted to our Showroom,<br></br> kindly fill the form below to send details. </h1>
      <form className="form" onSubmit={handleSubmit} >
        <label htmlFor="fname">name of vehicle:</label>
        <input className="inputs" id='title' onChange={handleChange} type="text" placeholder="name of your vehicle" /> <br></br>
        <label htmlFor="fname">image url:</label>
        <input className="inputs" id='image' onChange={handleChange}  type="text" placeholder="input vehicle image url" /><br></br>
        <label htmlFor="fname">vehicle description:</label>
        <input className="inputs" id='description' onChange={handleChange} type="text" placeholder="describe your vehicle"/><br></br>
        <label for="fname"> Vehicle Brand Id:</label>
        <input className="inputs" id='brand_id' onChange={handleChange} type="text" placeholder="input the brand id" />
        <div className="d-grid gap-2">
          <button className="butt" >SEND</button>
          
      </div>  
       
       
      </form>
      <Footer />
    </div>

    
  

  )
}


