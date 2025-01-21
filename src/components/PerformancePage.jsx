/* eslint-disable no-unused-vars */
import {
    Box,
    Typography,
    Divider,
    Grid,
    Paper,
    // useTheme,
    // useMediaQuery,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PerformancePage = () => {
    const [market, setMarket] = useState();
    // const theme = useTheme();
    // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const coins = useSelector((state) => state?.koinX.trendingCoins);
    const priceData = useSelector((state) => state?.koinX?.bitcoinPrice);

    useEffect(() => {
        coins.forEach((coin) => {
            const { name, symbol, market_cap, total_volume, large } = coin.item;
            setMarket(coin.item);
        });
    }, [coins]);

    return (
        <Box
            sx={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                width: "100%",
                boxShadow: 2,
                marginTop: 2,
                margin: "auto"
            }}
        >
            {/* Performance Section */}
            <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginTop: "15px" }}>
                Performance
            </Typography>

            {/* Today's Performance */}
            <Paper
                elevation={1}
                sx={{
                    padding: "16px",
                    borderRadius: "8px",
                    margin: "15px 15px"
                }}
            >
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography
                            sx={{
                                color: `${priceData?.usd_24h_change >= 0 ? "red" : null}`,
                                fontWeight: "bold", fontSize: "16px"
                            }}
                        >
                            Today&apos;s Low
                        </Typography>
                        <Typography
                            color={priceData?.usd_24h_change >= 0 ? "red" : null}
                            sx={{ fontSize: "18px", fontWeight: "600" }}
                        >
                            {priceData?.usd_24h_change?.toFixed(2)} %
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} textAlign="center">
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "16px",
                                color: "green",
                            }}
                        >
                            ${priceData?.usd?.toLocaleString()}
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={70}
                            sx={{
                                height: "10px",
                                borderRadius: "8px",
                                backgroundColor: "#e0e0e0",
                                "& .MuiLinearProgress-bar": {
                                    backgroundColor: "#0072ff",
                                },
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        textAlign={{ xs: "left", md: "right" }}
                    >
                        <Typography
                            sx={{
                                color: `${priceData?.usd_24h_change >= 0 ? "green" : "red"}`,
                                fontWeight: "bold", fontSize: "16px"
                            }}
                        >
                            Today&apos;s High
                        </Typography>
                        <Typography
                            color={priceData?.usd_24h_change >= 0 ? "green" : "red"}
                            sx={{ fontSize: "18px", fontWeight: "600" }}
                        >
                            {priceData?.usd_24h_change?.toFixed(2)} %
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Divider sx={{ marginBottom: "24px" }} />

            {/* Fundamentals Section */}
            <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Fundamentals
            </Typography>

            <Grid
                container
                spacing={3}
                justifyContent="center"
            >
                {/* Column 1 */}
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={1}
                        sx={{
                            padding: "16px",
                            borderRadius: "8px",
                            margin: "15px"

                        }}
                    >
                        <Typography sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                            Bitcoin Price
                        </Typography>
                        <Typography>${priceData?.usd?.toLocaleString()}</Typography>

                        <Typography sx={{ fontWeight: "bold", marginTop: "16px" }}>
                            24h Low / 24h High
                        </Typography>
                        <Typography
                            color={priceData?.usd_24h_change >= 0 ? "green" : "red"}
                        >
                            ${priceData?.usd_24h_change?.toFixed(4)} /{" "}
                            ${priceData?.usd_24h_change?.toFixed(4)}
                        </Typography>

                        <Typography sx={{ fontWeight: "bold", marginTop: "16px" }}>
                            Total Price
                        </Typography>
                        <Typography>${market?.data?.price?.toFixed(4)}</Typography>

                        <Typography sx={{ fontWeight: "bold", marginTop: "16px" }}>
                            Trading Volume
                        </Typography>
                        <Typography>$23,249,202,782</Typography>

                        <Typography sx={{ fontWeight: "bold", marginTop: "16px" }}>
                            Market Cap Rank
                        </Typography>
                        <Typography>{market?.market_cap_rank}</Typography>
                    </Paper>
                </Grid>

                {/* Column 2 */}
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={1}
                        sx={{
                            padding: "16px",
                            borderRadius: "8px",
                            margin: "15px"
                        }}
                    >
                        <Typography sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                            Market Cap
                        </Typography>
                        <Typography>{market?.data?.market_cap}</Typography>

                        <Typography sx={{ fontWeight: "bold", marginTop: "16px" }}>
                            Market Cap Dominance
                        </Typography>
                        <Typography>
                            ${market?.data?.market_cap_btc
                                ? parseFloat(market.data.market_cap_btc).toFixed(4)
                                : "0.000"}
                        </Typography>

                        <Typography sx={{ fontWeight: "bold", marginTop: "16px" }}>
                            Total Volume
                        </Typography>
                        <Typography>{market?.data?.total_volume}</Typography>

                        <Typography sx={{ fontWeight: "bold", marginTop: "16px" }}>
                            All-Time High
                        </Typography>
                        <Typography>
                            $69,044.77 <span style={{ color: "red" }}>-75.6%</span> (Nov 10,
                            2021)
                        </Typography>

                        <Typography sx={{ fontWeight: "bold", marginTop: "16px" }}>
                            All-Time Low
                        </Typography>
                        <Typography>
                            $67.81 <span style={{ color: "green" }}>+247210.1%</span> (Jul 06,
                            2013)
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
};

export default PerformancePage;
