import { Box } from '@mui/material'
import React from 'react'

const SolDescription = ({title,subtitle,description}) => {
  return (
    <>
      <Box sx={{display:"flex",flexDirection:"column",textAlign:"center"}}>
        <Box sx={{color:"#b1b3b1",fontSize:"1.5rem",fontWeight:600,}}>{subtitle}</Box>
        <Box sx={{color:"white",fontSize:"5rem",fontWeight:700,lineHeight:"1.2",paddingTop:"15px"}}>{title}</Box>
        <Box sx={{color:"#b1b3b1",fontSize:"1.125rem",fontWeight:300,paddingTop:"25px"}}>
            <p>{description}</p>
        </Box>
      </Box>
    </>
  )
}

export default SolDescription
