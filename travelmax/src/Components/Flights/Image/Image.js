import React from 'react';
// import Image from 'material-ui-image';
import CardMedia from '@material-ui/core/CardMedia';
import SearchBar from '../Search/Search';
import image from '../../../Assets/Images/home1.jpg';

const bkImage = (props) =>{
    return(
         <div style={{zIndex:200}}>
             <CardMedia
                  title=""
                  src={image}
                  style={{marginTop:'30', zIndex:200}}
                  >
                  
            <SearchBar />
            
            </CardMedia>
            <main>
                    {props.children}
            </main>
         </div>
        );
};

export default bkImage;



