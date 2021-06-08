import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import { chakra } from '@chakra-ui/react'
import React, {useReducer} from 'react'
import {DateSingleInput} from '@datepicker-react/styled'

const StyledDateSingleInput = chakra(DateSingleInput)

function DatePicker({ field, onChange }) {

    return (
        <StyledDateSingleInput
            rounded='lg'
            onDateChange={onChange}
            date={null}
            showDatepicker={false}
            {...field}
            id='dob'
        />
        // <MuiPickersUtilsProvider utils={DateFnsUtils}>
        //     <KeyboardDatePicker
        //         disableToolbar
        //         {...field}
        //         variant='static'
        //         format='dd/MM/yyyy'
        //         margin='normal'
        //         id='dob'
        //         KeyboardButtonProps={{
        //             'aria-label': 'change date',
        //         }}
        //         onChange={onChange}
        //         style={{
        //             color: '#ffc400'
        //         }}
        //     />
        // </MuiPickersUtilsProvider>
    )
}

export default DatePicker
