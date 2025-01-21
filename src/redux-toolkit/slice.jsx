import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Async thunks
export const fetchBitcoinPrice = createAsyncThunk(
    'koinx/fetchBitcoinPrice',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios?.get(`${API_BASE_URL}/simple/price`, {
                params: {
                    ids: 'bitcoin',
                    vs_currencies: 'usd,inr',
                    include_24hr_change: true,
                },
            });
            // console.log(response.data.bitcoin, "bitcoin")
            return response.data.bitcoin;
        } catch (error) {
            console.error('Error fetching Bitcoin price:', error);
            return rejectWithValue(error.response?.data || 'Failed to fetch Bitcoin price');
        }
    }
);

export const fetchTrendingCoins = createAsyncThunk(
    'koinx/fetchTrendingCoins',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios?.get(`${API_BASE_URL}/search/trending`);
            // console.log(response.data.coins, "slice")
            return response.data.coins;
        } catch (error) {
            console.error('Error fetching trending coins:', error);
            return rejectWithValue(error.response?.data || 'Failed to fetch trending coins');
        }
    }
);

// Initial state
const initialState = {
    bitcoinPrice: null,
    trendingCoins: [],
    loading: false,
    error: null,
};

// Slice
const koinxSlice = createSlice({
    name: 'koinX',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Bitcoin price fetch lifecycle
            .addCase(fetchBitcoinPrice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBitcoinPrice.fulfilled, (state, action) => {
                state.loading = false;
                state.bitcoinPrice = action.payload;
            })
            .addCase(fetchBitcoinPrice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Trending coins fetch lifecycle
            .addCase(fetchTrendingCoins.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTrendingCoins.fulfilled, (state, action) => {
                state.loading = false;
                state.trendingCoins = action.payload;
            })
            .addCase(fetchTrendingCoins.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default koinxSlice.reducer;
