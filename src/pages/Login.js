import React, {useState} from 'react'
import {makeStyles} from '@mui/styles'
import { TextField, Button, Typography } from '@mui/material'
import {useHistory } from 'react-router-dom'
import useAuth from '../state/auth'

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(3)
  }
}))

const Login = () => {
  const classes = useStyles()
  const history = useHistory()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isLoading, setIsLoading] = useState(false)

  const {user, setUser} = useAuth()

  const handleInputChange = (e) => {
    const {name, value} = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleFormSubmit = () => {
    setIsLoading(true)

    setTimeout(() => {
      setUser({
        logged: true,
        email: form.email
      })

      history.push('/')
    }, 4000)
  }
  return(
    <>
      <Typography variant="h3">Acesso Restrito</Typography>
      <div className = {classes.wrapper}>
        <TextField
          onChange = {handleInputChange}
          label = "Digite seu e-mail"
          name = "email"
          variant="standard"
        />
      </div>
      <div className = {classes.wrapper}>
        <TextField
          onChange = {handleInputChange}
          label = "Digite sua senha"
          type = "password"
          name = "password"
          variant="standard"
        />
      </div>
      <div className = {classes.wrapper}>
        <Button variant="contained" color = "primary" onClick = {handleFormSubmit}>
          {
            isLoading ? 'Aguarde...' : 'Entrar'
          }
        </Button>
      </div>
    </>
  )
}

export default Login