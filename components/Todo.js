import React, { useState } from 'react';

import {Button, Typography, Grid} from '@material-ui/core/'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
}));


export default function Todo({ todo, onClick, onDelete }) {
  const {id, completed, name} = todo
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={10}>
          <Typography
            component="span"
            style={{ textDecoration: completed ? 'line-through' : '', cursor: 'pointer' }}
            onClick={() => onClick(id)}
          >{name}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => onDelete(id)} variant="outlined" color="secondary">X</Button>
        </Grid>
      </Grid>
      
    </Paper>
  )
}