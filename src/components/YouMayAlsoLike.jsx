/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import { Box, Typography, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '50%',
            left: '-10px',
            transform: 'translateY(-50%)',
            zIndex: 1,
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
                bgcolor: 'primary.dark',
            },
        }}
    >
        <ArrowBack />
    </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '50%',
            right: '-10px',
            transform: 'translateY(-50%)',
            zIndex: 1,
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
                bgcolor: 'primary.dark',
            },
        }}
    >
        <ArrowForward />
    </IconButton>
);

const YouMayAlsoLike = () => {
    const coins = useSelector((state) => state?.koinX.trendingCoins);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box
            sx={{
                width: '100%',
                overflow: 'hidden',
                px: { xs: 2, sm: 4, md: 6 },
                boxSizing: 'border-box',
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'primary.main',
                }}
            >
                You May Also Like
            </Typography>
            <Slider {...settings}>
                {coins && coins?.length > 0 ? (
                    coins?.map((coin) => (
                        <Box
                            key={coin?.item.id}
                            sx={{
                                textAlign: 'center',
                                p: 2,
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                boxShadow: 3,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <img
                                src={coin?.item.thumb}
                                alt={coin?.item.name}
                                style={{
                                    maxWidth: '80px',
                                    height: 'auto',
                                    borderRadius: '50%',
                                    marginBottom: '12px',
                                }}
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 1,
                                }}
                            >
                                {coin?.item.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                }}
                            >
                                Market Cap Rank: {coin?.item?.market_cap_rank || 'N/A'}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                }}
                            >
                                Market Cap: {coin?.item?.data?.market_cap || 'N/A'}
                            </Typography>
                        </Box>
                    ))
                ) : (
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            textAlign: 'center',
                            mt: 2,
                        }}
                    >
                        No data available.
                    </Typography>
                )}
            </Slider>
        </Box>
    );
};

export default YouMayAlsoLike;
