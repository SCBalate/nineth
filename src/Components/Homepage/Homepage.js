import React from "react";
import "./Homepage.css";

import Categories from "../Categories/Categories";


function Homepage() {
  return (
    <div className="homepage">
    
      <div className="homepage__timeline">
        <Categories />
      </div>
    </div>
  );
}



export default Homepage;