// components/CategoriesComponent.js

import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../Backend/Categories';
import "./Category.css"

const CategoriesComponent = () => {
  // Get unique categories from the updated categories data
  const uniqueCategories = Array.from(new Set(categories.map((category) => category.category)));

  return (
    <div>
      <h1 className='heading'>Categories</h1>
      <div className="card-container">
        {uniqueCategories.map((category) => (
          <Link to={`/videos/${encodeURIComponent(category)}`} key={category}>
            <div className="card">
              {/* Display the thumbnail for the first video of the category */}
              <img src={categories.find((item) => item.category === category)?.thumbnail} alt={category} />
              <h3>{category}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesComponent;
