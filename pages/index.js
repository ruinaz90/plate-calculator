import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { calculate as calculatePlate } from '@/public/plate-calculator'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [plates, setPlates] = useState([5, 10, 25, 35, 45])
    const [weight, setWeight] = useState(45)
    const [resultsWeight, setResultsWeight] = useState(45)
    const [results, setResults] = useState([])
    const [resultsQty, setResultsQty] = useState([])

    function handleChange(e) {
        const { value, checked } = e.target
        const plateVal = Number(value)

        if(checked)
            setPlates([...plates, plateVal])
        else
            setPlates(plates.filter(element => element !== plateVal))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const plateList = calculatePlate(weight, {set: plates})
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
            {/*<link rel="icon" href="/favicon.ico" />*/}
        </Head>
        <main className={styles.main}>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="2.5 lbs" onChange={handleChange} value="2.5" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="5 lbs" onChange={handleChange} value="5" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="10 lbs" onChange={handleChange} value="10" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="25 lbs" onChange={handleChange} value="25" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="35 lbs" onChange={handleChange} value="35" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="45 lbs" onChange={handleChange} value="45" />
                <TextField sx={{ m: 1, width: '25ch' }} label="Weight (lbs)" variant="standard" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                <Button variant="contained" onClick={handleSubmit}>Calculate</Button>
            </FormGroup>

            <Typography variant="h5">Closest weight</Typography>
            <Typography variant="body1">{resultsWeight} lbs</Typography>
            
            <Typography variant="h5">Plates needed</Typography>
            <Typography variant="body1">{results.length ? results.map((element, index) => <li key={index}>{element} lbs x {resultsQty[index]}</li>) : "None"}</Typography>
        </main>
        </>
    )
}
