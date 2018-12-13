import React from 'react';
import { withAuthorization } from '../../Components/Sessions';
import image from '../../Assets/Images/home4.jpg';

const Search = (props) => (
    
    <div style={{marginTop: '25px', backgroundImage: `url(${image})`, padding: '50px', width: '100%'}}>
     <iframe scrolling="yes" 
        title="flights_Search" 
        width="849" height="217" 
        frameBorder="0" 
        src="//www.travelpayouts.com/widgets/0634d95710ca734cd07698c44bbb9df6.html?v=1553">
     </iframe>
    </div>
    
    );

const condition = authUser => !!authUser;
export default withAuthorization(condition) (Search);