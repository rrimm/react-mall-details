import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    
  
    return (
      <div>
        {/* <Header /> */}
       
        
          <div>
          <Link to="/products">Products</Link>
          </div>
       
        {/* <Footer /> */}
      </div>
    );
  }
  
  export default Home;