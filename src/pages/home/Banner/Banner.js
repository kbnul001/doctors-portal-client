import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const BannerBg = {
    background: `url(${bg})`,
    height: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Banner = () => {
    return (
        <Container style={BannerBg}>
            <Grid container spacing={2} sx={{ mt: 5 }}>

                <Grid sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} style={{ textAlign: 'left' }} item xs={12} md={6}>
                    <Box >

                        <Typography sx={{ mb: 5 }} style={{ color: 'black', fontWeight: '400' }} variant="h4">
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography sx={{ mb: 5 }} style={{ color: 'gray', fontWeight: '300' }} variant="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa repellat laboriosam ipsum molestiae consequatur officia, excepturi inventore laborum vero?
                        </Typography>
                        <br />
                        <Button sx={{ my: 5 }} style={{ backgroundColor: "#17e879" }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} style={{ width: "450px" }} alt="" />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Banner;