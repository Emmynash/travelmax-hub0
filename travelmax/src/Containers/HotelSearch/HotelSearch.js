import React from 'react';
import image from '../../Assets/Images/home4.jpg';

const HotelSearch = (props) => (
    
    <div style={{marginTop: '25px', backgroundImage: `url(${image})`, padding: '50px', width: '100%'}}>
    <iframe scrolling="yes" 
        title="flights_Search" 
        width="100%" 
        height="600px" 
        frameBorder="0" 
        src="//www.travelpayouts.com/widgets/0634d95710ca734cd07698c44bbb9df6.html?v=1627">
     </iframe>
    </div>
    
    );
    
export default HotelSearch;