import React from 'react';
import PropertyCard from './PropertyCard.jsx';

function CategorySection({ title, properties }) {
  return (
    <section className="category-section">
      <h2>{title}</h2>
      <div className="properties-grid">
        {properties.map(property => (
          <PropertyCard 
            key={property.id} 
            property={property} 
            category={title} // Pass category to PropertyCard
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
