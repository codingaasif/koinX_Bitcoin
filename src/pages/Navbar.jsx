import { AppBar, Toolbar, Typography, Button, Box, Link, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "white",
                boxShadow: "none",
                borderBottom: "1px solid #e0e0e0",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* Replace with your logo */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#0072ff",
                            fontWeight: "bold",
                            fontSize: "25px",
                        }}
                    >
                        KoinX
                    </Typography>
                </Box>

                {/* Mobile Menu Toggle */}
                {isMobile ? (
                    <IconButton onClick={handleMenuToggle} edge="end">
                        <MenuIcon sx={{ color: "#333" }} />
                    </IconButton>
                ) : (
                    // Desktop Links
                    <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
                        <Typography
                            component={Link}
                            href="/crypto-taxes"
                            sx={{
                                color: "#333",
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "16px",
                                "&:hover": { color: "#0072ff" },
                            }}
                        >
                            Crypto Taxes
                        </Typography>
                        <Typography
                            component={Link}
                            href="/free-tools"
                            sx={{
                                color: "#333",
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "16px",
                                "&:hover": { color: "#0072ff" },
                            }}
                        >
                            Free Tools
                        </Typography>
                        <Typography
                            component={Link}
                            href="/resource-center"
                            sx={{
                                color: "#333",
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "16px",
                                "&:hover": { color: "#0072ff" },
                            }}
                        >
                            Resource Center
                        </Typography>
                    </Box>
                )}

                {/* Get Started Button */}
                {!isMobile && (
                    <Button
                        variant="contained"
                        href="/"
                        sx={{
                            backgroundColor: "#0072ff",
                            textTransform: "none",
                            fontWeight: "bold",
                            fontSize: "16px",
                            borderRadius: "8px",
                            padding: "8px 16px",
                            "&:hover": {
                                backgroundColor: "#005ce6",
                            },
                        }}
                    >
                        Get Started
                    </Button>
                )}
            </Toolbar>

            {/* Mobile Menu */}
            {isMobile && mobileMenuOpen && (
                <Box
                    sx={{
                        backgroundColor: "white",
                        position: "absolute",
                        top: "55px",
                        left: "0",
                        width: "100%",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        // padding: "16px",
                        zIndex: "1"
                    }}
                >
                    <Typography
                        component={Link}
                        href="/crypto-taxes"
                        sx={{
                            display: "block",
                            color: "#333",
                            textDecoration: "none",
                            fontWeight: "500",
                            fontSize: "16px",
                            margin: "15px",
                            "&:hover": { color: "#0072ff" },
                        }}
                    >
                        Crypto Taxes
                    </Typography>
                    <Typography
                        component={Link}
                        href="/free-tools"
                        sx={{
                            display: "block",
                            color: "#333",
                            textDecoration: "none",
                            fontWeight: "500",
                            fontSize: "16px",
                            margin: "15px",
                            "&:hover": { color: "#0072ff" },
                        }}
                    >
                        Free Tools
                    </Typography>
                    <Typography
                        component={Link}
                        href="/resource-center"
                        sx={{
                            display: "block",
                            color: "#333",
                            textDecoration: "none",
                            fontWeight: "500",
                            fontSize: "16px",
                            margin: "15px",
                            "&:hover": { color: "#0072ff" },
                        }}
                    >
                        Resource Center
                    </Typography>
                    <Button
                        variant="contained"
                        href="/"
                        fullWidth
                        sx={{
                            backgroundColor: "#0072ff",
                            textTransform: "none",
                            fontWeight: "bold",
                            fontSize: "16px",
                            borderRadius: "8px",
                            margin: "15px",
                            width: "91%",
                            "&:hover": {
                                backgroundColor: "#005ce6",
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
            )}
        </AppBar>
    );
};

export default Navbar;
