import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

function Plates() {
    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="2.5 lbs" id="plate2-5" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="5 lbs" id="plate5" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="10 lbs" id="plate10" />
            </FormGroup>
        </div>
    )
}
export default Plates