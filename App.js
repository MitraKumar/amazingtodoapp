import React from 'react';

import TodoList from './components/TodoList'
import Form from './components/Form'
import Navbar from './components/Navbar'

import { TodoProvider } from './contexts/TodoContext'

import {Container, Paper} from '@material-ui/core'


import db from './firebase'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function App() {
  const classes = useStyles()
  return (
     <TodoProvider >
      <Navbar/>
      <Container maxWidth="sm">
        <Paper className={classes.root}>
          <Form />
          <TodoList/>
        </Paper>
      </Container>
    </TodoProvider>
  )
}
