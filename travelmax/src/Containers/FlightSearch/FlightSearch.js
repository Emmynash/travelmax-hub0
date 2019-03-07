import React, {Component} from 'react';
import $ from "jquery";
// import { withAuthorization } from '../../Components/Sessions';
import image from '../../Assets/Images/home4.jpg';

class Search extends Component{
    
    componentDidMount(){
    console.log(this.props);
   var addScript = document.createElement('script');
    addScript.setAttribute('src', 'https://www.travelstart.com.ng/resources/js/vendor/jquery.browser-0.0.8.min.js?');
    document.body.appendChild(addScript);
    
    var addJQuery = document.createElement('script');
    addJQuery.setAttribute('src', 'https://www.travelstart.com.ng/resources/js/jquery.ba-postmessage.min.js?');
    document.body.appendChild(addJQuery);
    
    
   // these variables can be configured 
	var travelstartIframeId = 'travelstartIframe-696bf24d-0ca0-44a1-ac46-887d8fa645e5'; 
	var iframeUrl = 'https://www.travelstart.com.ng'; 
	var logMessages = false; 
	var showBanners = false; 
	var affId = '213501'; 
	var affCampaign = ''; 
	var affCurrency = 'Default'; // ZAR / USD / NAD / ... 
	var height = '0px'; 
	var width = '100%'; 
	var language = ''; // ar / en / leave empty for user preference
 
	// do not change these 
	var iframe = $('#' + travelstartIframeId); 
	var iframeVersion = '11'; 
	var autoSearch = false; 
	var affiliateIdExist = false;
	var urlParams = {}; 
	var alreadyExist = []; 
	var iframeParams = []; 
	var cpySource = ''; 
	var match,
		pl = /\+/g,  
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query  = window.location.search.substring(1);
	while (match = search.exec(query)){ 
		urlParams[decode(match[1])] = decode(match[2]); 
	}				 
	for (var key in urlParams){ 
		if (urlParams.hasOwnProperty(key)){ 
			if (key === 'search' && urlParams[key] === 'true'){ 
				autoSearch = true; 
			} 
			if(	key === 'affId' || key === 'affid' || key === 'aff_id'){ 
				affiliateIdExist = true ; 
			} 
			iframeParams.push(key + '=' + urlParams[key]); 
			alreadyExist.push(key); 
		}	 
	}		 
  	if(!('show_banners' in alreadyExist)){ 
		iframeParams.push('show_banners=' + showBanners); 
	}		 
	if(!('log' in alreadyExist)){ 
		iframeParams.push('log='  + logMessages); 
	}		 
	if(! affiliateIdExist){ 
		iframeParams.push('affId='  + affId); 
	}		 
	if(! affiliateIdExist){ 
		iframeParams.push('language='  + language); 
	}		 
	if(!('affCampaign' in alreadyExist)){ 
		iframeParams.push('affCampaign='  + affCampaign); 
	}		 
	if(cpySource !== '' && !('cpySource' in alreadyExist)){ 
		iframeParams.push('cpy_source='  + cpySource); 
	}		 
	if(!('utm_source' in alreadyExist)){ 
		iframeParams.push('utm_source=affiliate'); 
	}		 
	if(!('utm_medium' in alreadyExist)){ 
		iframeParams.push('utm_medium='  + affId); 
	}		 
	if(!('isiframe' in alreadyExist)){ 
		iframeParams.push('isiframe=true'); 
	}		 
	if(!('landing_page' in alreadyExist)){ 
		iframeParams.push('landing_page=false'); 
	}		 
	if (affCurrency.length === 3){ 
		iframeParams.push('currency=' + affCurrency); 
	} 
	if(!('iframeVersion' in alreadyExist)){ 
   	iframeParams.push('iframeVersion='  + iframeVersion);
	}		 
	if(!('host' in alreadyExist)){ 
		iframeParams.push('host=' + window.location.href.split('?')[0]); 
	}		 
	var newIframeUrl = iframeUrl + (autoSearch ? '/search-on-index?search=true' : '/search-on-index?search=false') + '&' + iframeParams.join('&'); 
	iframe.attr('src', newIframeUrl); 
	function setIframeSize(newWidth, newHeight){ 
		iframe.css('width', newWidth); 
		iframe.width(newWidth); 
		iframe.css('height', newHeight); 
		iframe.height(newHeight); 
	} 
	setIframeSize(width, height); 
	
	window.addEventListener("message", receiveMessage, false);
    function receiveMessage(e, host) { 
    try { 
         if (typeof e.data !== 'undefined') { 
            var dataElements = e.data.split('&'); 
            if (dataElements) { 
                if (dataElements.length === 1) { 
                    //Resize 
                     setIframeSize(width, e.data + 'px'); 
                 } else { 
                     // Set iframe Size 
                     var height = dataElements[1].split('='); 
                     setIframeSize(width, height[1]+'px'); 
                     // Scroll to position 
                     if (dataElements.length > 2) { 
                         var scrollTo = dataElements[2].split('='); 
                         if (scrollTo[1] !== 'none') { 
                             var iframeTop = iframe.position().top; 
                             if (scrollTo[1] === 'to-top') { 
                                 window.scrollTo(0, iframeTop); 
                             } else { 
                                 window.scrollTo(0, iframeTop+parseInt(scrollTo[1])); 
                             } 
                         } 
                     } 
                 } 
             } 
         } 
     } catch (err) { 
         window.console && console.log(err); 
     } 
 }
 //iframeUrl;
 
//  new receiveMessage ();

}
   
    render(){
        return(
             <div style={{backgroundImage: `url(${image})`, padding: '50px', width: '100%'}}>
             
             <iframe id='travelstartIframe-696bf24d-0ca0-44a1-ac46-887d8fa645e5' 
                title="flights_Search"
                width="849" height="217" 
                frameBorder='0' 
                scrolling='no' 
                style={{margin: '0px', padding: '0px', border: '0px', height: '0px', backgroundColor: '#fafafa'}}>
            </iframe>
            
            </div>
            );
    }
}

// const condition = authUser => !!authUser;
 //withAuthorization(condition) (
export default Search;