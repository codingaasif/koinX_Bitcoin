import {
    Card,
    CardContent,
    Typography,
    Box,
    Grid,
    LinearProgress,
    CircularProgress,
    useTheme,
    useMediaQuery,
} from "@mui/material";

const SentimentCard = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Card
            sx={{
                borderRadius: 4,
                boxShadow: 2,
                width: "100%"
            }}
        >
            <CardContent>
                {/* Heading */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Sentiment
                </Typography>

                {/* Key Events Section */}
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Key Events
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                backgroundColor: "#E8F0FE",
                                padding: 2,
                                borderRadius: 2,
                            }}
                        >
                            <Typography variant="body2" fontWeight="bold" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                            <Typography variant="body2">
                                Duis vel quis dignissim mattis enim tincidunt. Ac phasellus risus
                                est faucibus metus quis del.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                backgroundColor: "#E6F8EB",
                                padding: 2,
                                borderRadius: 2,
                            }}
                        >
                            <Typography variant="body2" fontWeight="bold" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                            <Typography variant="body2">
                                Ac consectetur et pretium in a bibendum in. Sed vitae est nisi
                                viverra.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Analyst Estimates Section */}
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                    mt={3}
                >
                    Analyst Estimates
                </Typography>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    direction={isSmallScreen ? "column" : "row"}
                >
                    {/* Circular Progress */}
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        display="flex"
                        justifyContent={isSmallScreen ? "center" : "flex-start"}
                    >
                        <Box sx={{ position: "relative", display: "inline-flex" }}>
                            <CircularProgress
                                variant="determinate"
                                value={76}
                                size={60}
                                thickness={4}
                                sx={{ color: "#6FCF97" }}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" color="#6FCF97">
                                    76%
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Progress Bars */}
                    <Grid item xs={12} sm={9}>
                        <Box mb={2}>
                            <Typography variant="body2" fontWeight="bold" gutterBottom>
                                Buy
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={76}
                                sx={{
                                    height: 8,
                                    width: { xs: "150px", md: "100%", lg: "100%" },
                                    borderRadius: 5,
                                    backgroundColor: "#E8F0FE",
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: "#6FCF97",
                                    },
                                }}
                            />
                        </Box>
                        <Box mb={2}>
                            <Typography variant="body2" fontWeight="bold" gutterBottom>
                                Hold
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={8}
                                sx={{
                                    height: 8,
                                    borderRadius: 5,
                                    backgroundColor: "#E8F0FE",
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: "#FFC107",
                                    },
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography variant="body2" fontWeight="bold" gutterBottom>
                                Sell
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={16}
                                sx={{
                                    height: 8,
                                    borderRadius: 5,
                                    backgroundColor: "#E8F0FE",
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: "#EB5757",
                                    },
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SentimentCard;
