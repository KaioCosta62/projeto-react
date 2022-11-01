import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import {makeStyles} from '@mui/styles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import Toasty from '../../components/Toasty'

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(3)
  }
}))

const Edit = () => {
  const classes = useStyles()
  const {id} = useParams()
  
  const [form, setForm] = useState({
    name: {
      value: '',
      error: false
    },
    job: {
      value: '',
      error: false
    }
  })

  const [openToasty, setOpenToasty] = useState(false)

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
    .then((response) => {
      const {data} = response.data
      setForm({
          name: {
            value: data.first_name,
            error: false
          },
          job: {
            value: data.job,
            error: false
        }
      })
    })
  }, [])


  const handleInputChange = (e) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: {
        value
      }
    })
  }

  const handleRegisterButton = () => {
    let verifyErrorForm = false
    let newFormState = {
      ...form,
    }
    if(!form.name.value){
      verifyErrorForm = true
      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Digite o campo nome corretamente'
      }
    }

    if(!form.job.value){
      verifyErrorForm = true
      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Digite o campo cargo corretamente'
      }
    }

   if(verifyErrorForm){
      return setForm(newFormState)
   }

   axios.put(`https://reqres.in/api/users/${id}`, {
    name: form.name.value,
    job: form.job.value
   }).then(response => {
    setOpenToasty(true)
   })
  }
  return(
    <>
      <div className = {classes.wrapper}>
        <TextField 
        error = {form.name.error}
        helperText = {form.name.error ? form.name.helperText : ''}
        label = 'Digite o seu nome' 
        variant='standard' 
        value = {form.name.value} 
        onChange = {handleInputChange} 
        name='name'></TextField>
      </div>
      <div  className = {classes.wrapper}>
        <TextField 
        error = {form.job.error}
        helperText = {form.job.error ? form.job.helperText : ''}
        label = 'Digite o seu cargo' 
        variant='standard' 
        value = {form.job.value} 
        onChange = {handleInputChange} 
        name='job'></TextField>
      </div>
      <div  className = {classes.wrapper}>
        <Button variant = 'contained' onClick={handleRegisterButton}>Salvar alterações</Button>
      </div>
      <Toasty
        open={openToasty}
        severity = 'success'
        message = 'Registro atualizado com sucesso'
        onClose = {() => setOpenToasty(false)}
      />
    </>
  )
}

export default Edit