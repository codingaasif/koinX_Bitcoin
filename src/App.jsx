import { useEffect } from 'react';
// import PriceDisplay from './components/PriceDisplay';
// import ChartComponent from './components/ChartComponent';
// import TrendingCoins from './components/TrendingCoins';
// import YouMayAlsoLike from './pages/YouMayAlsoLike';
// import Navbar from './pages/Navbar';
// import SentimentCard from './components/SentimentCard';
// import AboutBitcoin from './components/AboutBitcoin';
// import Tokenomics from './components/Tokenomics ';
// import TeamSection from './components/TeamSection';
// import CryptoCoinsDisplay from './components/CryptoCoinsDisplay';
import { useDispatch } from 'react-redux';
import { fetchBitcoinPrice, fetchTrendingCoins } from './redux-toolkit/slice';
// import PerformancePage from './components/PerformancePage';
// import createBrowserRouter from "react-router-dom"
import KoinXRouter from './router/koinXRouter';
import { RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();
  // const coins = useSelector((state) => state?.koinX.trendingCoins)
  // console.log(coins, "coins")



  useEffect(() => {
    dispatch(fetchBitcoinPrice());
    dispatch(fetchTrendingCoins());
  }, [dispatch]);




  return (
    <Box sx={{ display: "flex", gap: "20px", flexDirection: "column", justifyContent: "center", marginTop: "60px" }}>
      <RouterProvider router={KoinXRouter} />
    </Box>
  );
};

export default App;
