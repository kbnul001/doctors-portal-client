import React from 'react';
import bg from '../../../images/appointment-bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import { Button, Container, Typography } from '@mui/material';

const BannerStyle = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(72, 70, 69, 0.9)',
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175,
    marginBottom: 175
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Grid style={BannerStyle} container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: "450px", marginTop: "-120px" }} src={doctor} alt="" />
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} style={{ textAlign: 'left' }} item xs={12} md={7}>
                    <Box >
                        <Typography sx={{}} style={{ color: '#17e879', fontWeight: '500' }} variant="h6">
                            Appointment
                        </Typography>
                        <Typography sx={{ my: 5 }} style={{ color: 'white', fontWeight: '600' }} variant="h4">
                            Make an Appointment
                        </Typography>
                        <Typography sx={{}} style={{ color: 'white', fontWeight: '300' }} variant="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa repellat laboriosam ipsum molestiae consequatur officia, excepturi inventore laborum vero?
                        </Typography>
                        <br />
                        <Button sx={{ my: 5 }} style={{ backgroundColor: "#17e879" }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default AppointmentBanner;