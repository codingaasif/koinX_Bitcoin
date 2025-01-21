// import { getTrendingCoins } from '../services/coingeckoAPI';
import { Box, Typography, CircularProgress, Grid, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

const TrendingCoins = () => {

    const trending = useSelector((state) => state?.koinX.trendingCoins)


    if (!trending.length) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Paper sx={{ padding: 3, margin: 2, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h5" gutterBottom>
                Trending Coins (24h)
            </Typography>
            <Grid container spacing={2}>
                {trending.map((coin) => (
                    <Grid item xs={12} sm={4} key={coin.item.id}>
                        <Box sx={{ border: '1px solid #ddd', padding: 2, borderRadius: 2, textAlign: 'center' }}>
                            <Typography variant="h6">{coin.item.name}</Typography>
                            <Typography variant="subtitle1">Symbol: {coin.item.symbol.toUpperCase()}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default TrendingCoins;
