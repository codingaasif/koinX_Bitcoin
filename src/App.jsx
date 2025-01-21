import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBitcoinPrice, fetchTrendingCoins } from './redux-toolkit/slice';

import KoinXRouter from './router/koinXRouter';
import { RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();


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
