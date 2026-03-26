import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property, category }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <h3>{property.name}</h3>
      <p>Price: {property.price}</p>
      {/* Pass category in route */}
      <Link to={`/details/${category.toLowerCase()}/${property.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default PropertyCard;
