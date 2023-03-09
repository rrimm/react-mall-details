import React from "react";
// const SizeTable = {
//     width: '25%', 
//     textAlign: 'center'
//   };
  
function SizeTable({ sizeTableRef, relatedProductRef }) {
    return (
        <table border="1" width="800px" height="300px">
            <tr  style={{ SizeTable }}>
                <td >사이즈</td>
                <td >S</td>
                <td >M</td>
                <td >L</td>
            </tr>
            <tr style={{ SizeTable }}>
                <td>가슴둘레</td>
                <td>102</td>
                <td>106</td>
                <td>111</td>
                
            </tr>
            <tr style={{ SizeTable }}>
                <td>밑단둘레</td>
                <td>107</td>
                <td>111</td>
                <td>116</td>
                
            </tr>
            <tr>
                <td>소매길이</td>
                <td>53</td>
                <td>55</td>
                <td>56</td>
                
            </tr>
            <tr>
                <td>소매통너비</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
            </tr>
            <tr>
                <td>소맷부리너비</td>
                <td>18</td>
                <td>18.5</td>
                <td>19</td>
            </tr>
            <tr>
                <td>어깨너비</td>
                <td>51</td>
                <td>52</td>
                <td>53</td>
            </tr>
            <tr>
                <td>총 기장</td>
                <td>106</td>
                <td>109</td>
                <td>112</td>
            </tr>
          </table>
           );
        }

        export default SizeTable;