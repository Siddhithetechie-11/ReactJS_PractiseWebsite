import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [nameOfBird, setnameOfBird] = useState('');
  const [type, setType] = useState('');
  const [habitat, setHabitat] = useState('');
  const [location, setLocation] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(nameOfBird, type, habitat, location, color);
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h1><strong>Submit Information About other species</strong></h1>

      <TextField
        label="Name of Bird"
        variant="filled"
        required
        value={nameOfBird}
        onChange={e => setnameOfBird(e.target.value)}
      />
      <TextField
        label="Type"
        variant="filled"
        required
        value={type}
        onChange={e => setType(e.target.value)}
      />
      <TextField
        label="Habitat"
        variant="filled"
        type="habitat"
        required
        value={habitat}
        onChange={e => setHabitat(e.target.value)}
      />
      <TextField
        label="Color"
        variant="filled"
        required
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <TextField
        label="Location"
        variant="filled"
        type="Location"
        required
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;