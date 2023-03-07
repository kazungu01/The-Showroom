import React from 'react'
import { Link } from 'react-router-dom';
import "./VehicleCard.css";


function VehicleCard({vehicle, setVehicles, vehicles}) {

 const handleDelete = () => {
   fetch(`http://localhost:9292/vehicles/${vehicle.id}`,
   {
    method: 'DELETE',
   })
   .then((response) => response.json())
  .then((newPost) => {
        setVehicles(vehicles.filter((array) => {
          return array.id !== vehicle.id;

        }))
      });
      alert("Vehicle deleted!");
}

// console.log(vehicle);
  return (
          <li>
    <div key={vehicle.id} className="veCard">
        <div>
            <img alt="oh no!" src={vehicle.image} className='images'/>
        </div>
        <div className='content'>
            <div className='header'>
                {vehicle.title}
                <br></br>
                <div className='brand'>
                  {/* trial */}
                Vehicle Brand - {vehicle.brand.name}
                </div>
            </div>
            <div className='desc'>
                {vehicle.description}
            </div>
            
        </div>
        <span>
            <div className="ui center aligned segment basic">
              <button
                className="delete-button"
                onClick={handleDelete}>Remove Vehicle
              </button>
              <button
                className="update-button"
                >
                  <Link to={`/update/${vehicle.id}`}>Update
                  </Link>
              </button>
            </div>
          </span>
    </div>
    </li>
  )
}

export default VehicleCard
