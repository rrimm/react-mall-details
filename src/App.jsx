import React from "react";
import { Route, Routes } from "react-router-dom";
import SimpleSlider from "./components/SimpleSlider";
import NotFound from "./components/NotFound";
//import Details from "./components/Details";
import MenuTabs from "./components/MenuTabs";
 import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderContainer from "./components/OrderContainer";
import TestMenu from './components/TestMenu';
import Container from './components/Container';
import LinkMenu from './components/LinkMenu';
import Content from './components/Content';
// import * as S from "./index.styled";

// pages-details의 index.jsx가 될 것
function App() {
  return (
    <div>
      {/* <TestMenu /> */}
      <hr />
      <Routes>
      <Route path="/check" element={<Content />} />
      <Route path="/details" element={<OrderContainer />} /> 
      <Route path="/menu" element={<LinkMenu />} /> 
      <Route path="/carousel" element={<SimpleSlider />} /> 
      <Route path="/" element={<Container />} /> 
      
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    
      /* <Route path="/" element={<Header />} /> */
      
      /* <Route path="/" element={<Footer />} /> */
      
    
  );
}

export default App;
