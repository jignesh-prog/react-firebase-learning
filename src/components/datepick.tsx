import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {useState} from 'react'
import { Timestamp } from 'firebase/firestore';
export const BasicDateTimePicker = () => {
  const [dateAndTime,setDateAndTime] = useState< Timestamp | null>()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Choose Date & Time"  value={dateAndTime}  onChange={(newValue) => setDateAndTime(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
export default BasicDateTimePicker