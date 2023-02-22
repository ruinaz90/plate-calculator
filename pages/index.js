import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { calculate as calculatePlate } from '@/public/plate-calculator'

import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [plates, setPlates] = useState({
        5: 4,
        10: 4,
        35: 4,
        45: 4
    })
    const [weight, setWeight] = useState(45)
    const [resultsWeight, setResultsWeight] = useState(45)
    const [results, setResults] = useState([])
    const [resultsQty, setResultsQty] = useState([])

    function handleChange(e) {
        const weight = Number(e.target.id), plateAmount = Number(e.target.value)
        setPlates({...plates, [weight]: plateAmount})
        console.log(plates)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const plateList = calculatePlate(weight, {weightLimits: plates})
        setResultsWeight(plateList.closestWeight)

        if(plateList.plates[0]) {
            let platesNeeded = plateList.plates.map(plate => plate.plateWeight)
            let platesQty = plateList.plates.map(plate => plate.qty)
            setResults(platesNeeded)
            setResultsQty(platesQty)
        }
        else {
            setResults([])
            setResultsQty([])
        }
    }

    return (
        <>
        <Head>
            <title>Plate Calculator</title>
            <meta name="description" content="Calculate plates needed" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
        <Container maxWidth="xs">
            <Card>
            <CardContent>
                <Box sx={{ mb: 3, mx: 2 }}>
                    <Typography variant="h4" gutterBottom>Calculate</Typography>
                    <Typography color="text.secondary" variant="body2" gutterBottom>Enter target weight and click CALCULATE.</Typography>
                </Box>
                
                <Box sx={{ m: 3, mx: 2 }}><TextField sx={{ width: '20ch' }} label="Target weight (lbs)" variant="outlined" type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} /></Box>
                <Box sx={{ mb: 3, mx: 2 }}><Button variant="contained" onClick={handleSubmit}>Calculate</Button></Box>

                <Box sx={{ mb: 3, mx: 2 }}>
                    <Typography variant="h5" gutterBottom>Closest weight</Typography>
                    <Typography variant="body1">{resultsWeight} lbs</Typography>
                    </Box>
                <Box sx={{ mb: 3, mx: 2 }}>
                    <Typography variant="h5" gutterBottom>Plates needed</Typography>
                    {results.length ? results.map((element, index) => <Typography variant="body1" key={index}>{element} lbs x {resultsQty[index]}</Typography>) : <Typography variant="body1">None</Typography>}
                    </Box>

                <Box sx={{ mb: 3, mx: 2 }}>
                    <Typography variant="h4" gutterBottom>Plates</Typography>
                    <Typography color="text.secondary" variant="body2" gutterBottom>Enter the number of plates available.</Typography>
                </Box>
                
                <Grid container spacing={2}>
                    <Grid xs display="flex" justifyContent="center" alignItems="center"><Typography variant="h6" gutterBottom>Weight (lbs)</Typography></Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center"><Typography variant="h6" gutterBottom>Available</Typography></Grid>
                </Grid>

                <Divider variant="middle" />

                <Box sx={{ m: 2 }}>
                    <Grid container spacing={2}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><Typography variant="body1" gutterBottom>2.5</Typography></Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><TextField type="number" variant="outlined" id="2.5" placeholder="0" onChange={handleChange} /></Grid>
                    </Grid>
                </Box>
                <Box sx={{ m: 2 }}>
                    <Grid container spacing={2}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><Typography variant="body1" gutterBottom>5</Typography></Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><TextField type="number" variant="outlined" id="5" placeholder="4" onChange={handleChange} /></Grid>
                    </Grid>
                </Box>
                <Box sx={{ m: 2 }}>
                    <Grid container spacing={2}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><Typography variant="body1" gutterBottom>10</Typography></Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><TextField type="number" variant="outlined" id="10" placeholder="4" onChange={handleChange} /></Grid>
                    </Grid>
                </Box>
                <Box sx={{ m: 2 }}>
                    <Grid container spacing={2}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><Typography variant="body1" gutterBottom>25</Typography></Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><TextField type="number" variant="outlined" id="25" placeholder="4" onChange={handleChange} /></Grid>
                    </Grid>
                </Box>
                <Box sx={{ m: 2 }}>
                    <Grid container spacing={2}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><Typography variant="body1" gutterBottom>35</Typography></Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><TextField type="number" variant="outlined" id="35" placeholder="4" onChange={handleChange} /></Grid>
                    </Grid>
                </Box>
                <Box sx={{ m: 2 }}>
                    <Grid container spacing={2}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><Typography variant="body1" gutterBottom>45</Typography></Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center"><TextField type="number" variant="outlined" id="45" placeholder="4" onChange={handleChange} /></Grid>
                    </Grid>
                </Box>
            </CardContent>
            </Card>
            </Container>
        </main>
        </>
    )
}
