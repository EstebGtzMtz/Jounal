import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth';

export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: '',
    password:''
  });

  const isAuthenticating = useMemo(()=> status === 'checking', [status])

  const onSubmit = async(e) => {
    e.preventDefault();
    dispatch(checkingAuthentication());
    dispatch(startLoginWithEmailAndPassword({email, password}));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
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
              <Button type='submit' variant='contained' fullWidth disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant='contained' fullWidth disabled={isAuthenticating}>
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
