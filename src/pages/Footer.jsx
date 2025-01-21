import { Box, Typography, Link, Grid, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#1e1e1e',
                color: '#fff',
                py: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Company Info */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            KoinX
                        </Typography>
                        <Typography variant="body2">
                            Transforming the way you manage your finances with innovative solutions.
                        </Typography>
                    </Grid>

                    {/* Navigation Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="/" color="inherit" underline="hover" display="block">
                            Home
                        </Link>
                        <Link href="/about" color="inherit" underline="hover" display="block">
                            About Us
                        </Link>
                        <Link href="/services" color="inherit" underline="hover" display="block">
                            Services
                        </Link>
                        <Link href="/contact" color="inherit" underline="hover" display="block">
                            Contact
                        </Link>
                    </Grid>

                    {/* Contact Information */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">Email: support@koinx.com</Typography>
                        <Typography variant="body2">Phone: +1 234 567 890</Typography>
                    </Grid>

                    {/* Social Media */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton
                                href="https://facebook.com"
                                target="_blank"
                                color="inherit"
                                size="large"
                                sx={{ mr: 1 }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                href="https://twitter.com"
                                target="_blank"
                                color="inherit"
                                size="large"
                                sx={{ mr: 1 }}
                            >
                                <Twitter />
                            </IconButton>
                            <IconButton
                                href="https://linkedin.com"
                                target="_blank"
                                color="inherit"
                                size="large"
                                sx={{ mr: 1 }}
                            >
                                <LinkedIn />
                            </IconButton>
                            <IconButton
                                href="https://instagram.com"
                                target="_blank"
                                color="inherit"
                                size="large"
                            >
                                <Instagram />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Typography
                    variant="body2"
                    align="center"
                    sx={{ mt: 4, opacity: 0.7 }}
                >
                    © {new Date().getFullYear()} KoinX. All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
