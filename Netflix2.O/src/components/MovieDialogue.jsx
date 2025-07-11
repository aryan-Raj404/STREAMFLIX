import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { setOpen } from '../redux/movieSlice.js';
import { useSelector , useDispatch } from 'react-redux';
import VideoBackground from './VideoBackground';

export default function MovieDialogue() {
    const dispatch = useDispatch();

    const { open , id , name} = useSelector((store) => store.movies);

  const handleClose = () => {
    dispatch(setOpen(false))
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {name}
        </DialogTitle>
        <DialogContent>
          <VideoBackground bool={true} movieId={id}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}