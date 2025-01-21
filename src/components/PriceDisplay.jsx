import { Box, Typography, CircularProgress, Paper, Grid } from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from 'react-redux';

const PriceDisplay = () => {
    const priceData = useSelector((state) => state?.koinX?.bitcoinPrice)


    if (!priceData) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ px: 2, py: 3 }}>
            <Paper
                sx={{
                    padding: 3,
                    backgroundColor: '#f9f9f9',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Grid container spacing={2} alignItems="center">
                    {/* Bitcoin Icon and Title */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CurrencyBitcoinIcon
                                sx={{
                                    fontSize: '40px',
                                    backgroundColor: '#ffbe0b',
                                    color: '#fff',
                                    borderRadius: '50%',
                                    rotate: '8deg',
                                    padding: '5px',
                                }}
                            />
                            <Typography variant="h5" fontWeight="bold">
                                Bitcoin
                            </Typography>
                        </Box>
                    </Grid>

                    {/* USD and INR Prices */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            USD: ${priceData.usd.toLocaleString()}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: '15px', fontWeight: '500' }}>
                            INR: ₹{priceData.inr.toLocaleString()}
                        </Typography>
                    </Grid>

                    {/* 24H Change */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                padding: 1,
                                borderRadius: 2,
                                backgroundColor:
                                    priceData.usd_24h_change >= 0 ? '#90ee9057' : '#ff5b6157',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ fontSize: '15px', display: 'flex', alignItems: 'center' }}
                                color={priceData.usd_24h_change >= 0 ? 'green' : 'red'}
                            >
                                {priceData.usd_24h_change >= 0 ? (
                                    <ArrowDropUpIcon sx={{ fontSize: '25px' }} />
                                ) : (
                                    <ArrowDropDownIcon sx={{ fontSize: '25px' }} />
                                )}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 'bold', fontSize: '15px' }}
                                color={priceData.usd_24h_change >= 0 ? 'green' : 'red'}
                            >
                                {priceData.usd_24h_change.toFixed(2)} %
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ fontSize: '13px', marginLeft: 'auto' }}
                                color="text.secondary"
                            >
                                (24H)
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default PriceDisplay;
