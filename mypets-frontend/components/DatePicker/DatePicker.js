import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function DatePicker({ field, onChange }) {
    
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                {...field}
                variant='static'
                format='dd/MM/yyyy'
                margin='normal'
                id='dob'
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                onChange={onChange}
                style={{
                    color: '#ffc400'
                }}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
