import React from 'react';

function RoomDetails({ details }) {
  return (
    <div className="room-details">
      <h3>Room Details</h3>
      <p>{details.type} - {details.price}</p>
    </div>
  );
}

export default RoomDetails;