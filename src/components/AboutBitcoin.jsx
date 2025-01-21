import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AboutBitcoin = () => {
    const [coin, setCoin] = useState()

    const priceData = useSelector((state) => state?.koinX?.bitcoinPrice)
    const coins = useSelector((state) => state?.koinX.trendingCoins);

    useEffect(() => {
        coins.forEach((coin) => {
            setCoin(coin)
        })
    }, [coins])

    return (
        <Card
            sx={{
                borderRadius: 4,
                boxShadow: 2,
                width: "100%",
                margin: "auto 0",
                backgroundColor: "#f9fafe",
            }}
        >
            <CardContent>
                {/* Title */}
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                >
                    About Bitcoin
                </Typography>

                {/* What is Bitcoin Section */}
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                        >
                            What is Bitcoin?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                lineHeight: { xs: 1.5, sm: 1.75 },
                                textAlign: "justify"
                            }}
                        >
                            Bitcoin&apos;s price today is
                            ${priceData?.usd.toLocaleString()} with a 24-hour trading
                            volume of {coin?.item?.data?.total_volume}. BTC is {priceData?.usd_24h_change.toFixed(4)} in the last 24 hours. It is
                            currently ~-7.70% from its 7-day all-time high of $18,366.66, and
                            3.40% from its 7-day all-time low of $16,394.75. BTC has a
                            circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Lorem Ipsum Section */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                        >
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                lineHeight: { xs: 1.5, sm: 1.75 },
                                textAlign: "justify"
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                            lobortis tristique pharetra. Diam id et lectus urna et tellus
                            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
                            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
                            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                            rhoncus.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                lineHeight: { xs: 1.5, sm: 1.75 },
                                textAlign: "justify"
                            }}
                        >
                            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                            adipiscing cursus felis pellentesque interdum. Odio cursus
                            phasellus velit in senectus enim dui. Turpis tristique placerat
                            interdum sed volutpat. Id imperdiet magna eget eros donec cursus
                            nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
                            Integer dignissim augue viverra nulla et quis lobortis phasellus.
                            Integer pellentesque enim convallis ultricies at.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                lineHeight: { xs: 1.5, sm: 1.75 },
                                textAlign: "justify"
                            }}
                        >
                            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
                            massa vel convallis duis ac. Mi adipiscing semper scelerisque
                            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
                            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
                            eget. Ullamcorper dui
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AboutBitcoin;
