import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = ({title, body}) => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}} className='animate__animated animate__fadeIn animate__faster'>
      <Grid item>
        <Typography fontSize={30} fontWeight='light'>28 agosto 2023</Typography>
      </Grid>

      <Grid item>
        <Button color='primary' sx={{padding:2}}>
          <SaveOutlined sx={{fontSize:30, mr: 1}}/>
          <Typography> save </Typography>
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Write a title'
          label='Title'
          sx={{border:'none', mb:1}}
          value={body}
        />

        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='Tell us a history'
          label='What happened today?'
          minRows={5}
          value={body}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
