/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    Avatar,
    IconButton,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from 'react-redux';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const CryptoCoinsDisplay = () => {
    const coinsDataFromRedux = useSelector((state) => state?.koinX?.trendingCoins);

    // Transform Redux data to match expected structure
    const transformCoinData = (coin) => {
        const currentPrice = parseFloat(coin?.item?.data?.market_cap_btc || 0);
        const priceChangePercentage = parseFloat(coin?.item?.data?.price_change_percentage_24h?.idr || 0);

        return {
            name: coin?.item?.symbol || "Unknown",
            price: `$${currentPrice.toFixed(3)}`,
            change: `${priceChangePercentage.toFixed(3)}%`,
            trend: priceChangePercentage > 0 ? 'up' : 'down',
            icon: coin?.item?.large || 'https://via.placeholder.com/40',
            chartData: generateChartData(currentPrice, priceChangePercentage)
        };
    };

    const generateChartData = (currentPrice, priceChangePercentage) => {
        const dataPoints = 7; // Number of points in the chart

        // If price change percentage is missing, return placeholder data
        if (!currentPrice || isNaN(priceChangePercentage)) {
            return Array(dataPoints).fill(currentPrice);
        }

        // Simulating price changes based on percentage change
        const chartData = [];
        const changeFactor = (priceChangePercentage / 100) * currentPrice;

        // Calculate price points over the last 24 hours
        for (let i = 0; i < dataPoints; i++) {
            // Simulate a variation in price based on the percentage change
            const variation = (Math.random() * 2 - 1) * changeFactor; // Random fluctuation
            const pricePoint = currentPrice + variation; // New price point
            chartData.push(parseFloat(pricePoint.toFixed(2))); // Push to chart data with 2 decimal precision
        }

        return chartData;
    };



    const transformedCoins = coinsDataFromRedux?.map(transformCoinData) || [];

    const CoinCard = ({ name, price, change, trend, icon, chartData }) => {
        const chartOptions = {
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
            },
            scales: {
                x: { display: false },
                y: { display: false },
            },
        };

        const chartDataset = {
            labels: chartData?.map((_, index) => index),
            datasets: [
                {
                    data: chartData,
                    borderColor: trend === 'up' ? 'green' : 'red',
                    backgroundColor: trend === 'up' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                },
            ],
        };

        const [liked, setLiked] = useState(false);

        return (
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2,
                    boxShadow: 2,
                }}
            >
                <Avatar src={icon} alt={name} sx={{ width: 40, height: 40, mb: 1 }} />
                <Typography variant="body1" fontWeight="bold">
                    {name}
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="text.secondary">
                    {price}
                </Typography>
                <Typography
                    variant="caption"
                    sx={{ color: trend === 'up' ? 'green' : 'red', fontWeight: 'bold' }}
                >
                    {change}
                </Typography>
                <Box sx={{ width: '100%', height: 50, mt: 1 }}>
                    <Line data={chartDataset} options={chartOptions} />
                </Box>
                <IconButton
                    onClick={() => setLiked(!liked)}
                    sx={{ mt: 1 }}
                    color={liked ? 'error' : 'default'}
                >
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </Card>
        );
    };

    const CoinsSection = ({ title, coins }) => (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={2}>
                {coins?.map((coin, index) => (
                    <Grid item xs={12} sm={6} md={2.4} key={index}>
                        <CoinCard {...coin} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

    return (
        <Box sx={{ px: 2, textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: "bold", marginBottom: "15px" }}>
                Trending Coins (24h)
            </Typography>
            <CoinsSection coins={transformedCoins} />
        </Box>
    );
};

export default CryptoCoinsDisplay;
