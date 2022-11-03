import React from 'react'
import Container from '@mui/material/Container'
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles({
  container: {
    padding: '20px 0',
  },
})

const Clean = ({Component}) => {
  const classes = useStyles()

  return(
    <>
      <Container className = {classes.container}>
        <Component/>
      </Container> 
    </>
  ) 
}

export default Clean