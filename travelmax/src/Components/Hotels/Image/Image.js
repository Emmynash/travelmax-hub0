import React from 'react';
// import Image from 'material-ui-image';
import CardMedia from '@material-ui/core/CardMedia';
import SearchBar from '../Search/Search';

const bkImage = (props) =>{
    return(
         <div style={{zIndex:200}}>
             <CardMedia
                  src=''
                  title=""
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



