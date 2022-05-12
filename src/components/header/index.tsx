import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'

export const Header = () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Typography variant="h6" component="div">
          Наш суперкофе
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
