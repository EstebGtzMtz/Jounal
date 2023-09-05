import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';

export const LoginPage = () => {

  const { email, password, onInputChange, onResetForm } = useForm({
    email: 'hola@mail.com',
    password:'qwerty'
  })


  const onSubmit = (e) => {
    e.preventDefault();
    console.log({email, password})
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label='Email'
              type='email'
              placeholder="correro@gmail.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{marginTop: 2}}>
            <TextField
              label='Password'
              type='password'
              placeholder="password"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant='contained' fullWidth >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} to='/auth/register'>
              Create Account
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
