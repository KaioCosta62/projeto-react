import React, {useState} from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './ModalConfirm'

const CustomerCard = ({id,name, lastName, email, avatar, className, onRemoveCustomer}) => {
  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = (id) => {
    handleToggleOpenModal(!openModal)
    onRemoveCustomer(id)
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }
  return (
    <>
      <Card sx={{ maxWidth: 345}} className = {className}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src = {avatar}>
              {name[0]}
            </Avatar>
          }
          title= {`${name} ${lastName}`}
          subheader= {email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="Editar cadastro">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Deletar cadastro">
            <DeleteIcon onClick = {handleRemoveCustomer} />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open = {openModal}
        onClose = {handleToggleOpenModal}
        onConfirm = { () => handleConfirmModal(id)}
        title = 'Deseja realmente excluir esse cadastro?'
        message = 'Ao confirmar não será possível reverter essa operação'
      />
    </>
   
  )
}

export default CustomerCard