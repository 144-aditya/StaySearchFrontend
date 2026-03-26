import React from 'react';
import { Link } from 'react-router-dom';


function ViewDetails({ property }) {
  // Safety checks
  if (!property) return <div className="loading">Loading property details...</div>;

  const { 
    name, 
    branches = [], 
    roomTypes = [], 
    details = {}, 
    facilities = [], 
    id 
  } = property;

  return (
    <div className="view-details">
      <h1>{name}</h1>
      
      {/* All sections in one common container */}
      <div className="property-details-container">
        
        {/* Branches Section */}
        {branches.length > 0 && (
          <div className="property-section">
            <h3>
              <i className="fas fa-building"></i>
              Branches
            </h3>
            <div className="section-content">
              <div className="branch-images">
                {branches.map((branch, index) => (
                  <img
                    key={index}
                    src={branch}
                    alt={`Branch ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Room Types Section */}
        {roomTypes.length > 0 && (
          <div className="property-section">
            <h3>
              <i className="fas fa-bed"></i>
              Room Types
            </h3>
            <div className="section-content">
              <div className="room-type-images">
                {roomTypes.map((room, index) => (
                  <div key={index} className="room-type-card">
                    <img
                      src={room.image}
                      alt={room.type}
                    />
                    <div className="room-type-info">
                      <p className="room-type-name">{room.type}</p>
                      {room.price && (
                        <p className="room-type-price">{room.price}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Room Details Section */}
        {details && Object.keys(details).length > 0 && (
          <div className="property-section">
            <h3>
              <i className="fas fa-info-circle"></i>
              Room Details
            </h3>
            <div className="section-content">
              <div className="room-details-info">
                {details.type && details.price ? (
                  <p>
                    <i className="fas fa-tag"></i>
                    {details.type} - {details.price}
                  </p>
                ) : details.type ? (
                  <p>
                    <i className="fas fa-home"></i>
                    Type: {details.type}
                  </p>
                ) : details.price ? (
                  <p>
                    <i className="fas fa-rupee-sign"></i>
                    Price: {details.price}
                  </p>
                ) : null}
                
                {details.description && (
                  <p>
                    <i className="fas fa-file-alt"></i>
                    {details.description}
                  </p>
                )}
                
                {details.area && (
                  <p>
                    <i className="fas fa-ruler-combined"></i>
                    Area: {details.area}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Facilities Section */}
        {facilities.length > 0 && (
          <div className="property-section">
            <h3>
              <i className="fas fa-wifi"></i>
              Facilities
            </h3>
            <div className="section-content">
              <ul className="facilities-list">
                {facilities.map((facility, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Book Now Section */}
        <div className="property-section book-now-section">
          <h3>
            <i className="fas fa-calendar-check"></i>
            Ready to Book?
          </h3>
          <div className="section-content">
            <div className="book-now-container">
              <p>Book your stay now and get the best experience!</p>
              <Link to={`/booking?propertyId=${id}`}>
                <button className="book-now-btn">
                  <i className="fas fa-bookmark"></i>
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ViewDetails;