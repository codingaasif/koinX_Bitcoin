import { Card, CardContent, Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Tokenomics = () => {
    const data = [
        { name: "Crowdsale Investors", value: 80, color: "#007BFF" },
        { name: "Foundation", value: 20, color: "#FFA500" },
    ];

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
                    Tokenomics
                </Typography>

                {/* Subtitle */}
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                >
                    Initial Distribution
                </Typography>

                {/* Chart and Legend */}
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6}>
                        {/* Responsive Pie Chart */}
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    outerRadius="80%"
                                    innerRadius="60%"
                                    paddingAngle={5}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={index} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* Legend */}
                        <List>
                            {data.map((entry, index) => (
                                <ListItem key={index} disableGutters>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ color: entry.color, fontSize: "1rem" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={`${entry.name}: ${entry.value}%`}
                                        primaryTypographyProps={{
                                            fontSize: { xs: "0.9rem", sm: "1rem" },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>

                {/* Description */}
                <Box mt={3}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                            lineHeight: { xs: 1.5, sm: 1.75 },
                            textAlign: "justify",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
                        ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
                        bibendum amet enim sit eget leo amet. At metus orci augue fusce
                        eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
                        massa habitasse urna felis augue. Gravida aliquam fermentum augue
                        eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
                        rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
                        Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
                        nisi eu ac risus.
                    </Typography>
                </Box>
            </CardContent>
        </Card >
    );
};

export default Tokenomics;
