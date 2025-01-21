import { useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ChartComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            new window.TradingView.widget({
                container_id: 'tradingview_btc_chart',
                width: '100%',
                height: 400,
                symbol: 'BITSTAMP:BTCUSD',
                interval: 'D',
                timezone: 'Etc/UTC',
                theme: 'light',
                style: '1',
                locale: 'en',
                toolbar_bg: '#f1f3f6',
                enable_publishing: false,
                withdateranges: true,
                hide_side_toolbar: false,
                allow_symbol_change: true,
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <Paper sx={{ padding: "0 20px" }}>
            <Typography variant="h5" gutterBottom>
                Bitcoin Price Chart (USD)
            </Typography>
            <Box id="tradingview_btc_chart" sx={{ height: '400px' }} />
        </Paper>
    );
};

export default ChartComponent;
