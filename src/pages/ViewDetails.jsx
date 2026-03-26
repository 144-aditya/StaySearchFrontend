import React from 'react';
import { useParams } from 'react-router-dom';

import BranchSection from '../components/details/BranchSection.jsx';
import RoomTypeSection from '../components/details/RoomTypeSection.jsx';
import RoomDetails from '../components/details/RoomDetails.jsx';
import Facilities from '../components/details/Facilities.jsx';
import BookNow from '../components/details/BookNow.jsx';

import pgData from '../data/pgData.js';
import hostelData from '../data/hostelData.js';
import lodgeData from '../data/lodgeData.js';

import '../styles/details.css';

function ViewDetails() {
  const { category, id } = useParams();

 
  const propertyId = Number(id);

  // Dataset mapping 
  const dataMap = {
    pg: pgData,
    hostel: hostelData,
    lodge: lodgeData
  };

  const dataSet = dataMap[category] || [];

  // Find property
  const property = dataSet.find((item) => item.id === propertyId);

  // If property not found
  if (!property) {
    return (
      <div className="view-details">
        <h2>Property not found</h2>
      </div>
    );
  }

  return (
    <div className="view-details">
      <h1>{property.name}</h1>

      <BranchSection branches={property.branches} />
      <RoomTypeSection roomTypes={property.roomTypes} />
      <RoomDetails details={property.details} />
      <Facilities facilities={property.facilities} />
      <BookNow propertyId={property.id} />
    </div>
  );
}

export default ViewDetails;