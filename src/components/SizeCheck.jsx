import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
//import styled from "@emotion/styled";

const ButtonStyle = {
  backgroundColor: 'white',
  borderColor: 'black',
  color: 'black',
  borderRadius: '0',
  margin: '15px 15px',
  width: '40px'
};

const SelectedButtonStyle = {
  backgroundColor: 'black',
  color: 'white',
  borderColor: 'black',
  borderRadius: '0',
  margin: '15px 15px',
  width: '40px'
};

function SizeCheck() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'S', value: '1' },
    { name: 'M', value: '2' },
    { name: 'L', value: '3' },
  ];

  return (
    <>
      
      
      
      
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            style={radioValue === radio.value ? SelectedButtonStyle : ButtonStyle}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default SizeCheck;


// function SizeCheck() {

//   const [value, setValue] = useState([]);


//   const handleChange = (val) => {
//       setValue(val);
    
//   }

//   const ButtonStyle = {
//     backgroundColor: 'white',
//     borderColor: 'black',
//     color: 'black',
//     borderRadius: '0',
//     margin: '15px 15px',
//     width: '40px'
//   };

//   const SelectedButtonStyle = {
//     backgroundColor: 'black',
//     color: 'white',
//     borderColor: 'black',
//     borderRadius: '0',
//     margin: '15px 15px',
//     width: '40px'
//   };

//   return (
//     <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
//       <ToggleButton id="tbg-btn-1" value={1} style={value.includes(1) ? SelectedButtonStyle : ButtonStyle}>
//       S
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-2" value={2} style={value.includes(2) ? SelectedButtonStyle : ButtonStyle}>
//         M
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-3" value={3} style={value.includes(3) ? SelectedButtonStyle : ButtonStyle}>
//         L
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );


// }
// export default SizeCheck;


// function SizeCheck() {
//   const [value, setValue] = useState(1);

//   const handleChange = (val) => {
//     setValue(val);
//   }

//   const ButtonStyle = {
//     backgroundColor: 'white',
//     borderColor: 'black',
//     color: 'black',
//     borderRadius: '0',
//     margin: '15px 15px',
//     width: '40px'
//   };

//   const SelectedButtonStyle = {
//     backgroundColor: 'black',
//     color: 'white',
//     borderColor: 'black',
//     borderRadius: '0',
//     margin: '15px 15px',
//     width: '40px'
//   };

//   return (
//     <ToggleButtonGroup type="radio" value={value} onChange={handleChange}>
//       <ToggleButton id="tbg-btn-1" value={1} style={value === 1 ? SelectedButtonStyle : ButtonStyle}>
//         S
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-2" value={2} style={value === 2 ? SelectedButtonStyle : ButtonStyle}>
//         M
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-3" value={3} style={value === 3 ? SelectedButtonStyle : ButtonStyle}>
//         L
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

// export default SizeCheck;







