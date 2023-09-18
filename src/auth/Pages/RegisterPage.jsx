import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';

export const RegisterPage = () => {

  const { name, email, password, onInputChange, } = useForm({
    name: 'John Doe',
    email: 'hola@mail.com',
    password:'asdfasdfasd'
  });

  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
        <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label='Full name'
              type='text'
              placeholder="John Doe"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label='Email'
              type='email'
              placeholder="correro@gmail.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label='Password'
              type='password'
              placeholder="password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
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
