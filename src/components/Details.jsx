import React from "react";
import LinkMenu from "../LinkMenu";
import SimpleSlider from "./SimpleSlider";
import MenuTabs from "../MenuTabs";
import OrderContainer from "./OrderContainer";

function Details() {
    return(
      <div>
          
<ul>
<li><LinkMenu /> </li> 

<li id="imagebox">
    <SimpleSlider />
</li>

<li id="orderbox">
    <OrderContainer />
</li>

</ul>

{/* 메뉴바(상세정보, 후기 등) */}
<div>     
    <MenuTabs />
</div>

</div> 

    )
}
export default Details;