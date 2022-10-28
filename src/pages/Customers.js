import React, {useState, useEffect} from "react"
import axios from 'axios'
import Grid from '@mui/material/Grid'
import {makeStyles} from '@mui/styles'
import CustomersCard from "../components/CustomerCard"


const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2)
  }
}))

const Customers = () => {
  const classes = useStyles()

  const [customers, setCustomers] = useState([])
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then(response => {
      const {data} = response.data
      setCustomers(data)
    })
  }, [])
  return(
    <>
      <h1>Customers</h1>
      <Grid container>
      {
        customers.map(item => (
          <Grid item xs = {12} md = {4}>
            <CustomersCard
            name = {item.first_name}
            lastName = {item.last_name}
            email = {item.email}
            avatar = {item.avatar}
            className = {classes.card}
        />
          </Grid>
  
        ))    
      }
      </Grid>
    </> 
  )
}

export default Customers