import React from 'react';
import './CategoryPill.css';

function CategoryPill({name, title}) {
  return (
      <span className={`category category-${name}`}>{title}</span>
    );
}

export default CategoryPill;
