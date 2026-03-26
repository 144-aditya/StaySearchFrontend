import React from 'react';

function BranchSection({ branches }) {
  if (!branches || branches.length === 0) return null; // Safety check

  return (
    <div className="branch-section">
      <h3>Branches</h3>
      <div className="branch-images" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {branches.map((branch, index) => (
          <img
            key={index}
            src={branch}
            alt={`Branch ${index + 1}`}
            style={{ width: '250px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default BranchSection;
