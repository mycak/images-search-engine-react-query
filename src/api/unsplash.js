import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID a6d2e7fc89cbac9585e60c7c64d220bcbb9d6124a41f153f7343f1717a719f80'
    }
})