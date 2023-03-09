import React from 'react';
import { Link } from 'react-router-dom';
const TestMenu = () => {
  return (
    <ul>
      <li>
        <Link to="/details">Details</Link>
      </li>
      <li>
        <Link to="/menu">menu</Link>
      </li>
      <li>
        <Link to="/carousel">carousel</Link>
      </li>
      <li>
        <Link to="/check">check</Link>
      </li>
      
    </ul>
  );
};

export default TestMenu;