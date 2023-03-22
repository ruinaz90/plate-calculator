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
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [plates, setPlates] = useState([5, 10, 25, 35, 45])
    const [weight, setWeight] = useState(45)

    function handleChange(e) {
        const { value, checked } = e.target
        const plateVal = Number(value)
        console.log(`${value} is ${checked}`)

        if(checked)
            setPlates([...plates, plateVal])
        else
            setPlates(plates.filter(element => element !== plateVal))
    }
    console.log(plates)
    const plateList = calculatePlate(weight, {set: plates})
    console.log(plateList)
    //console.log(plateList.plates[0].plateWeight)
    //console.log(plateList.plates[0].qty)

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
                <TextField id="weight" label="Weight" variant="standard" />
                <Button variant="contained">Calculate</Button>
            </FormGroup>
        </main>
        </>
    )
}
