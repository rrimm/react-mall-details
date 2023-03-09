import React from "react";
import SizeButton from "./SizeButton";
import StockButton from "./StockButton";
import DeliveryButton from "./DeliveryButton";
import CartButton from "./CartButton";
import SizeCheck from "./SizeCheck";
import styled from "@emotion/styled";

const ListStyle = {
  listStyleType: "none"
};

const DeliveryLocation = {
  
  paddingLeft: "70px"
};

const OrderContainer = () => {

  return(
<div>
  
<ul>
 
  <div style={{
           borderBottomColor: '#807675',
           borderBottomWidth: '2px',
           borderBottomStyle: 'solid'
         }}>

<li style={ ListStyle }>
왁스드 코튼 트렌치 코트
</li>

<li style={ ListStyle }>
159,900 원
</li>
<br/>
<li style={ ListStyle }>
  <div>
    {/* 색상 및 제품코드 */}
  <span>색상 </span>|<span> 제품코드</span>
  </div>
</li>
<br/>
</div>

<br/>
<div>
    <div>
       배송방법
    </div>
    <div style={ DeliveryLocation }>
      <ul style={ ListStyle }>택배배송
        <li style={ ListStyle } >무료배송 / 18시 이전 주문 시 오늘 출고 예정</li>
      </ul>
      <ul style={ ListStyle }>매장픽업
        <li style={ ListStyle }>온라인 구매 후 지정 매장에서 수령</li>
      </ul>
    </div>
</div>
<br/>

<div>사이즈 선택</div>
<SizeCheck></SizeCheck>

</ul>
    
  <CartButton></CartButton>
  <br/>
  <SizeButton></SizeButton> 
  <StockButton></StockButton>
  <DeliveryButton></DeliveryButton>
  
</div>
    /* 사이즈 및 상품 선택 장바구니 버튼 모달 3개(사이즈 가이드, 재고 상태, 배송 기간) */
)

};

export default OrderContainer;