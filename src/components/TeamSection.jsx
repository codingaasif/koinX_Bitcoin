import { Container, Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const teamMembers = [
    {
        name: 'John Smith',
        designation: 'Designation here',
        image: 'https://via.placeholder.com/100',
        description:
            'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consequat proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum.',
    },
    {
        name: 'Elina Williams',
        designation: 'Designation here',
        image: 'https://via.placeholder.com/100',
        description:
            'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consequat proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum.',
    },
    {
        name: 'John Smith',
        designation: 'Designation here',
        image: 'https://via.placeholder.com/100',
        description:
            'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consequat proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum.',
    },
];

const TeamSection = () => {
    return (
        <Box sx={{ py: 4, backgroundColor: '#f9f9f9', width: "100%" }}>
            <Container>
                <Typography variant="h4" align="center" gutterBottom>
                    Team
                </Typography>
                <Typography variant="body1" align="justify" paragraph>
                    Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: "35px", padding: "10px 0" }}>
                                <Avatar src={member.image} alt={member.name} sx={{ width: 80, height: 80, mb: 2 }} />
                                <CardContent>
                                    <Typography variant="h6">{member.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {member.designation}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1, textAlign: "justify" }}>
                                        {member.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TeamSection;
