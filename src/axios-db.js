import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-makingpizza.firebaseio.com/'
})

export default instance;