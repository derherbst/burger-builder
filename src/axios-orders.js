import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-4f17a.firebaseio.com/',
});

export default instance;