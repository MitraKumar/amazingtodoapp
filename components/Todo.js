import React, { useState } from 'react';

import {Button, Typography} from '@material-ui/core/'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));


export default function Todo({ todo, onClick, onDelete }) {
  const {id, completed, name} = todo
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography
        component="span"
        style={{ textDecoration: completed ? 'line-through' : '', cursor: 'pointer' }}
        onClick={() => onClick(id)}
      >{name}</Typography>
      <Button onClick={() => onDelete(id)} variant="outlined" color="secondary">X</Button>
    </Paper>
  )
}