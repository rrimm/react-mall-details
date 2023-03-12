import React from "react";
import SimpleSlider from "./SimpleSlider";
import OrderContainer from "./OrderContainer";
import styled from "@emotion/styled";
import MenuTabs from "./MenuTabs";
import LinkMenu from "./LinkMenu";
import Content from "./Content";
import { useRef } from 'react';
// import Header from "./Header";
// import Footer from "./Footer";
import { useParams } from 'react-router-dom';

const FlexStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkStyle = styled.div`

  margin-top: 100px;
  padding-left: 50px;
`;

const Slider = styled.div`
  width: 500px;
  height: 800px;
`;

const OrderStyle = styled.div`
  width: 500px;
  height: 800px;
  margin-inline: 200px;
  margin-top: 30px;
`;

function Details() {
    const { productId } = useParams(); 
  
    const sizeTableRef = useRef(null);
    const relatedProductRef = useRef(null);
  
    const handleSizeTabClick = () => {
      sizeTableRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  
    const handleReletedTabClick = () => {
      relatedProductRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div>
        {/* <Header /> */}
        <br />
        <LinkStyle>
          <div>
            <LinkMenu />
          </div>
        </LinkStyle>
  
        <FlexStyle>
          <Slider>
            <div id="slider">
              <SimpleSlider />
            </div>
          </Slider>
          <OrderStyle>
            <div>
              <OrderContainer />
            </div>
          </OrderStyle>
        </FlexStyle>
  
        <br />
        <br />
        <MenuTabs onSizeTabClick={handleSizeTabClick} onReletedTabClick={handleReletedTabClick} />
        <div>
          <h1>Product ID: {productId}</h1> {/* TODO: 상품구별용 */}
          <Content sizeTableRef={sizeTableRef} relatedProductRef={relatedProductRef} />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
  
  export default Details;

