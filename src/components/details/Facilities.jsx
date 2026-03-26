import React from 'react';

function Facilities({ facilities }) {
  return (
    <div className="facilities">
      <h3>Facilities</h3>
      <ul>
        {facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
    </div>
  );
}

export default Facilities;