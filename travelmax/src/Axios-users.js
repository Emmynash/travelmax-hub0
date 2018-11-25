import Axios from 'Axios';

const instance = Axios.create({
    baseURL:  'https://travelmaxhub-c9bda.firebaseio.com/'
});

export default instance;