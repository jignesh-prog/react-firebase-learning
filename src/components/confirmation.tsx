import { Typography ,Stack,Button} from "@mui/material"
import {useNavigate} from 'react-router-dom'
export const Confirmation = () => {
   const navigate = useNavigate()
  return (
    <div>
      <Typography variant='h6' sx={{color:'red'}} > 
        <Stack sx={{fontSize:'50px',color:'red'}}>Jai Swaminarayan !</Stack>
       <Stack sx={{fontSize:'25px',color:'Black',padding:'50px'}}> Thank you for your request.
        Mandir karyakar will be in touch with you soon.
        </Stack>
      </Typography>
      <Button variant='contained' color='warning' sx={{width:'100px',height:'50px'}} onClick= {() => navigate('/')}>Logout</Button>
    </div>
  )
}

export default Confirmation
