import React from 'react'
import Typography from '@mui/material/Typography'

const Default = ({title, Component}) => {
  return(
    <>
      <Typography variant='h3'>{title}</Typography>
      <Component/>
    </>
  ) 
}

export default Default