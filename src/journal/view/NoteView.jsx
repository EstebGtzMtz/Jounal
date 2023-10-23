import { SaveOutlined, UploadFileOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hooks/useForm';
import { setActiveNote, startSaveNote } from '../../store/journal';
import { ImageGallery } from '../components';

export const NoteView = () => {

  const dispatch = useDispatch();
  const {activeNote: currentNote, savedMessage, isSaving} = useSelector(state => state.journal);
  const {title, body, date, onInputChange, formState} = useForm(currentNote);

  const dateString = useMemo(()=> new Date(date).toUTCString(), [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState])

  useEffect(() => {
    savedMessage !== null && Swal.fire({
      title: 'Updated Note',
      text: savedMessage,
      timer: 2000
    })
  }, [savedMessage])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onInputFileChange = ({target}) => {
    if(target.files === 0) return;
    console.log(target.files);
  }

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}} className='animate__animated animate__fadeIn animate__faster'>
      <Grid item>
        <Typography fontSize={30} fontWeight='light'>{dateString}</Typography>
      </Grid>

      <Grid item>
        <input type="file" multiple onChange={onInputFileChange} style={{display: 'none'}} ref={fileInputRef}/>
        <IconButton color='primary' disabled={isSaving} onClick={()=> fileInputRef.current.click()}>
          <UploadFileOutlined />
        </IconButton>

        <Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{padding:2}}>
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
          name='title'
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='Tell us a history'
          label='What happened today?'
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
