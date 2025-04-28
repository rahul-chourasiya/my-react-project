import { Container, Typography, Box, Button } from '@mui/material'

    const About = () => {
      return (
        <Container maxWidth="md" className="py-10">
          <Box className="text-center">
            <Typography variant="h2" component="h1" gutterBottom className="font-bold text-gray-800">
              About Us
            </Typography>
            <Typography variant="h5" component="p" gutterBottom className="text-gray-600">
              Welcome to our website! We are a team dedicated to building awesome web applications.
            </Typography>
            <Typography variant="body1" component="p" className="mt-4 text-gray-500">
              Our mission is to create user-friendly, responsive, and modern web solutions using cutting-edge technologies like React and Material-UI. We believe in delivering quality and innovation in every project we undertake.
            </Typography>
            <Box className="mt-6">
              <Button variant="contained" color="primary" size="large" href="#contact">
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      );
    };

    export default About;