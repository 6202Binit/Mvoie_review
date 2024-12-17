import axios from 'axios';

export default axios.create({
    // baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    baseURL:'http://localhost:8080/',
    headers: {"ngrok-skip-browser-warning": "true"}
});


export const getWatchlistMovies = async () => {
    try {
        const response = await api.get('/watchlist');
        return response.data;
    } catch (error) {
        console.error('Error fetching watchlist:', error);
        throw error;
    }
}