import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum repellat impedit aliquam saepe consectetur facilis, recusandae fuga assumenda omnis doloremque adipisci quos quisquam? Sed illo qui libero eligendi quam?",
        img: cavity
    },
    {
        name: "Fluride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum repellat impedit aliquam saepe consectetur facilis, recusandae fuga assumenda omnis doloremque adipisci quos quisquam? Sed illo qui libero eligendi quam?",
        img: fluoride
    },
    {
        name: "Teeth Whitenning",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum repellat impedit aliquam saepe consectetur facilis, recusandae fuga assumenda omnis doloremque adipisci quos quisquam? Sed illo qui libero eligendi quam?",
        img: whitening
    },
]

const Services = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Typography sx={{ my: 3, color: 'success.main', fontWeight: 500 }} variant="h6" component="div">
                Our Services
            </Typography>
            <Typography sx={{ my: 5, fontWeight: 600 }} variant="h4" component="div">
                Services We Provide
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(sv => <Service
                        key={sv.name}
                        service={sv}
                    ></Service>)
                }
            </Grid>
        </Container>
    );
};

export default Services;