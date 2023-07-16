
import {useEffect,useState} from 'react'
import {Stack,Box, Button, TextField, Checkbox,Typography,Paper,} from '@mui/material'

import {db} from '../config/firebase'
import {getDocs,collection,addDoc} from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { auth} from '../config/firebase'
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

import {Outlet, useNavigate} from 'react-router-dom'

export const Booking = () => {
    const [select,setSelect] = useState<any>([])
    
    const [name,setName] = useState<any>('')
    const [email,setEmail] =useState<any>('')
    const [contactNo,setContactNo] = useState<any>(0)
    const [add,setAdd] =useState<any>('')
    const [mahapuja,setMahapuja] =useState<any>(false)

    const form = useForm();

    const {register,control,handleSubmit,formState:{errors}} = form

    const navigate = useNavigate()

    const bookingCollectionRef = collection(db,'Booking');

    useEffect(() => {
    const getBooking = async() => {
        try {
         const data = await getDocs(bookingCollectionRef)
         const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
        id: doc.id,
    }));
        setSelect(filteredData)
    }
         catch (err) {
            console.error(err);
         }
    };
    
    getBooking();
}); 

const onSubmit = async() => {
    try{ 
await addDoc(bookingCollectionRef,{
    Name:name,Address:add,ContactNo:contactNo, Mahapuja:mahapuja,Email:email
}); navigate('confirmation');

}
catch (err) {
    console.error('err');
   
}
}

const logOut = async () => {
    try {
        await signOut(auth);
        navigate('/')
    }
    catch (err) {
        console.error('err')
    }
}
  return (
    <div>
  <form  noValidate>
    <Box sx={{padding:'25px',bgcolor:'lightgrey',alignItems:'center',display:'flex',justifyContent:'center',justifyItems:'center',justifySelf:'center'}}>
            
                <Paper elevation={8} sx={{padding:'25px',width:'500px',justifyContent:'center',alignItems:'center',}}>
       <Typography variant='h5' color='secondary'>
        Please add your details.
       </Typography>
        <Stack sx={{display:'block', width:'100%',height:'100%',textAlign:'center'}}>          <Box sx={{ display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    
                    padding:'10px',
                    width:'100%'
                }}>
        <Stack spacing={2} sx={{width:'70%',padding:'15px'}}>
        <TextField label='Name' {...register('Name', {required: 'name required',})} 
        error={Boolean(errors.Name)}
         helperText= {errors.Name?.message?.toString()}
          onChange={(e) => setName(e.target.value) } ></TextField >
        </Stack>
        <Stack spacing={2} sx={{width:'70%',padding:'15px'}}>
            <TextField  
            label='Email' 
            {...register('email',
            {pattern:{
                value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'invalid email'}})} 
            required 
            onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.Email)}
          helperText= {errors.Email?.message?.toString()}
           
            > </TextField >
        </Stack>
        <Stack sx={{width:'70%',padding:'15px'}}>
        <TextField  label='Address' {...register('Address',{required:'address required'})}   onChange={(e) => setAdd(e.target.value)}></TextField >
        </Stack>
        <Stack sx={{width:'70%',padding:'15px'}}>
        <TextField  label='ContactNo' {...register('ContactNo',{required:'number required'
            })}  onChange={(e) => setContactNo(e.target.value)}></TextField >
        </Stack>
        </Box>
       
        </Stack>
      <Box sx={{display:'flex',flexDirection:'row', width:'100%',padding:'15px',justifyContent:'center'}}>
        <Stack>
        <Typography variant='h6' >Mahapuja</Typography>
        </Stack>
        <Stack>
        <Checkbox  id='puja' placeholder='Mahapuja'  checked={mahapuja}  onChange={(e) => setMahapuja(e.target.checked)}/>
        </Stack>
        </Box>
       <Button variant='contained' onClick={handleSubmit(onSubmit)} >submit</Button>
       <Button variant='contained' color='warning' onClick={logOut} >Logout</Button>
       </Paper>
       </Box>
    </form>
    <DevTool control={control} />
    <Outlet/>
        {select.map((Booking:any) => (
            <div>
                <p>Name: {Booking.Name}</p>
                <p>Address: {Booking.Address}</p>
                <p>Email: {Booking.EmailID}</p>
                <p>Padhramni only: {Booking.Padhramni}</p>
                <p>Contact No: {Booking.ContactNo}</p>
                <p>Mahapooja: {Booking.Mahapooja}</p>

                <p>Reference: {Booking.Reference}</p>
            </div>
        ) )}
    
   
    </div>
  )
}

export default Booking
