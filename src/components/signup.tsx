import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {
    Box,
    Button, Checkbox,
    Container,
    FormControlLabel,
    Grid, InputAdornment,
    Paper,
    Stack, TextField,
    Typography
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { auth} from '../config/firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { useState, useEffect, useRef } from 'react'

export const Signup = () => {
    const [registerEmail, registerSetEmail] = useState<any | string>('')
    const [registerPassword, registerSetPassword] = useState<any | string>('')
    const [confirmPassword, confirmSetPassword] = useState<any | string>('')

    const inputRef = useRef<any>();

    console.log(auth?.currentUser?.email)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const Signup = async () => {
        if(confirmPassword === registerPassword)
        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            navigate('/')
        }
        catch (err) {
            console.log('error')
        }

    
    }
    

    const navigate = useNavigate()

    return (
        <Container className='Signup' component="main"  >
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                }}
            >
                <Paper elevation={16} >
                    <Grid margin={4}>
                        <Stack spacing={4} width='360px' >
                            <Stack >
                                <Typography variant='h5' color='primary'>Add your credential</Typography>
                            </Stack>
                            <Stack spacing={2}>
                                <TextField color='primary' label='Email' size='medium'
                                    ref={inputRef} placeholder='email' onChange={(e) => registerSetEmail(e.target.value)} required
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>{<EmailIcon />}</InputAdornment>
                                    }}
                                >
                                </TextField>
                                <TextField label='Password'
                                    ref={inputRef} placeholder='password' type='password' onChange={(e) => registerSetPassword(e.target.value)} required
                                    color='primary'
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>{<LockIcon />}</InputAdornment>
                                    }}
                                >
                                </TextField>
                                <TextField label='confirmPassword'
                                    ref={inputRef} placeholder='Confirm Password' type='password' onChange={(e) => confirmSetPassword(e.target.value)} required
                                    color='primary'
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>{<LockIcon />}</InputAdornment>
                                    }}
                                >
                                </TextField>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <FormControlLabel control={<Checkbox value='Remember me' />} label='Remember me' />
                            </Stack>
                            <Stack sx={{ dispaly: 'block', justifyContent: 'space-between' }}>
                                <Button variant='contained' sx={{ margin: '5px' }} onClick={Signup}>Sign up</Button>
                            </Stack>
                         
                        </Stack>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    )
}

export default Signup
