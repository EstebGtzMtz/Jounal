import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startWithEmailAndPassword } from '../../store/auth/authThunks';

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {errorMessage, status} = useSelector(state => state.auth);

  const isAuthenticating = useMemo(()=> status === 'checking', [status])

  const formData = {
    name: '',
    email: '',
    password:''
  }

  const formValidators = {
    name: [ value => value.length >= 1, 'name is required'],
    email: [ value => value.includes('@'), 'email must contain @'],
    password: [ value => value.length >= 6, 'password minimum length is 6']
  }

  const {
    name,
    email,
    password,
    onInputChange,
    // isFormValid,
    formValidation:{
      nameValid,
      emailValid,
      passwordValid
    }
  } = useForm(formData, formValidators);

  const onSubmit = e => {
    e.preventDefault();
    setFormSubmitted(true)
    dispatch(startWithEmailAndPassword({name, email, password}))
  }


  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid container>
        <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label='Full name'
              type='text'
              placeholder="John Doe"
              name='name'
              value={name}
              onChange={onInputChange}
              error={!!nameValid && formSubmitted}
              helperText={nameValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label='Email'
              type='email'
              placeholder="correro@gmail.com"
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label='Password'
              type='password'
              placeholder="password"
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth type='submit' disabled={isAuthenticating}>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography mr={1} display='inline'>Already have an account?</Typography>
            <Link component={RouterLink} to='/auth/login'>
              Login
            </Link>
          </Grid>

          {
            errorMessage &&
            <Grid container sx={{mb:2, mt: 1}}>
              <Grid item xs={12}>
                <Alert severity='error'> {errorMessage} </Alert>
              </Grid>
            </Grid>
          }

        </Grid>
      </form>
    </AuthLayout>
  )
}
