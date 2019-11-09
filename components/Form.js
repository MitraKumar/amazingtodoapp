import React, { useState } from 'react';

import { useTodoValue } from '../contexts/TodoContext'

import {FormControl, TextField, Button} from '@material-ui/core';

export default function Form({onSubmit}) {
  const [name, setName] = useState("")
  const [ _ , dispatch] = useTodoValue()

  return (
    <FormControl>
      <TextField
        id="standard-basic"
        label="Enter a todo..."
        margin="normal"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      
      <Button
        variant="contained" 
        color="primary"
        onClick={e => {
          e.preventDefault()
          dispatch({ type: "add", payload: name })
          setName("")
        }}
      >Save</Button>
    </FormControl>
  )
}
