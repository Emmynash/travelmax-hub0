import React from 'react';
// import Image from 'material-ui-image';
// import CardMedia from '@material-ui/core/CardMedia';
import SearchBar from '../Search/Search';

const bkImage = (props) =>{
    return(
         <div style={{zIndex:200, marginTop:'30'}}>
              
            <SearchBar />
           
            <main>
                    {props.children}
            </main>
         </div>
        );
};

export default bkImage;



