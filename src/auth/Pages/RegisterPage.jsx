import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';

export const RegisterPage = () => {

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
    isFormValid,
    formValidation:{
      nameValid,
      emailValid,
      passwordValid
    }
  } = useForm(formData, formValidators);

  const onSubmit = e => {
    e.preventDefault();
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
              error={nameValid ? true : false}
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
              error={emailValid ? true : false}
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
              error={passwordValid ? true : false}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth type='submit' disabled={!isFormValid}>
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

        </Grid>
      </form>
    </AuthLayout>
  )
}
