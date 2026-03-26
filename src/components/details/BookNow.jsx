import React from 'react';
import { Link } from 'react-router-dom';

function BookNow({ propertyId }) {
  return (
    <div className="book-now">
      <Link 
        to={`/booking?propertyId=${propertyId}`} 
        state={{ from: '/booking' }}
      >
        <button>Book Now</button>
      </Link>
    </div>
  );
}

export default BookNow;