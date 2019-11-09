import React, { useState } from 'react';

import { useTodoValue } from '../contexts/TodoContext'

import {FormControl, TextField, Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(themes => ({
  inputField: {
    width: '100%'
  } 
}))

export default function Form({onSubmit}) {
  const [name, setName] = useState("")
  const [ _ , dispatch] = useTodoValue()

  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12}>
        <form onSubmit={e => {
            e.preventDefault()
            dispatch({ type: "add", payload: name })
            setName("")
        }}>
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Enter a todo..."
            margin="normal"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </form>
      </Grid>
    </Grid>
  )
}


/**
 * 
 <Grid item xs={4}>
        <Button
          variant="contained" 
          color="primary"
          onClick={e => {
            e.preventDefault()
            dispatch({ type: "add", payload: name })
            setName("")
          }}
        >Save</Button>
      </Grid>
 */