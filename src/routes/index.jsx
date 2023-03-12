import Home from '../pages/Home';
import Products from '../pages/Products';
import Details from '../pages/Details';
import Review from '../pages/Review';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';

import { Route, Routes as BrowserRoutes } from "react-router-dom";

function Routes() {
  return (
  <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Details />} />
      <Route path="/products/:productId/reviews" element={<Review />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="products" element={<Products />}>
        <Route path=":productId" element={<Details />} /></Route> */}
      <Route path="*" element={<NotFound />} />
      </BrowserRoutes>
  
);
}

export default Routes;
