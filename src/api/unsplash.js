import axios from 'axios';
import doteenv from 'dotenv';
doteenv.config({ path: '/.env' });

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
    }
})