import React from 'react'
import {makeStyles} from '@mui/styles'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles({
  container: {
    padding: '20px 0',
  },
})

const Default = ({title, Component}) => {
  return(
    <>
      <Typography variant='h3'>{title}</Typography>
      <Component/>
    </>
  ) 
}

export default Default