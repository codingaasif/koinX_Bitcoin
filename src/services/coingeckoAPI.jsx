// import axios from 'axios';

// const API_BASE_URL = 'https://api.coingecko.com/api/v3';



// export const getBitcoinPrice = async () => {
//     const response = await axios?.get(`${API_BASE_URL}/simple/price`, {
//         params: {
//             ids: 'bitcoin',
//             vs_currencies: 'usd,inr',
//             include_24hr_change: true,
//         },
//     });
//     return response.data.bitcoin;
// };

// export const getTrendingCoins = async () => {
//     const response = await axios.get(`${API_BASE_URL}/search/trending`);
//     console.log(response.data, "response")
//     return response.data.coins.slice(0, 3);
// };
