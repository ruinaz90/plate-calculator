import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'

function Plates() {
    const [plates, setPlates] = useState([])

    function handleChange(e) {
        const { value, checked } = e.target
        const weight = Number(value)
        console.log(`${value} is ${checked}`)

        if(checked) {
            setPlates([...plates, weight])
        }
        else {
            setPlates(plates.filter(element => element !== weight))
        }
    }
    console.log(plates)

    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="2.5 lbs" onChange={handleChange} value="2.5" />
                <FormControlLabel control={<Checkbox />} label="5 lbs" onChange={handleChange} value="5" />
                <FormControlLabel control={<Checkbox />} label="10 lbs" onChange={handleChange} value="10" />
            </FormGroup>
        </div>
    )
}
export default Plates