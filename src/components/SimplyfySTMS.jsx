import { Box, Button } from '@mui/material'
import React from 'react'

function SimplyfySTMS() {
  return (
    <Box py="60px" sx={{paddingLeft:"24px",paddingRight:"24px",}}>
    <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}>
    <Box sx={{display:"flex",flexDirection:"column",width:"100%",maxWidth:"48rem",textAlign:"center"}}>
        <Box sx={{color:"#b1b3b1",fontWeight:600,fontSize:"1.5rem",marginBottom:"1rem",width:"100%"}}>Simplify With The STMS</Box>
        <Box sx={{color:"white",fontWeight:700,fontSize:"3rem",lineHeight:"1.2",marginBottom:"1.7rem",width:"100%"}}>Tool To Manage The <br />Chaos</Box>
        <Box sx={{color:"white",fontWeight:400,fontSize:"1.12rem",marginBottom:"1.7rem",width:"100%"}}>Freightro integrates procurement, communication, and networking with Smart technology and automation. Strengthen your relationship with your freight provider with no added markups on freight rates.</Box>
      </Box>
    </Box>
      <Box sx={{display:"flex",justifyContent:"center"}}>
      <Button
                sx={{
                  paddingInline: "25px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  backgroundColor: "rgb(26, 49, 54)",
                  color: "white",
                  border:"1px solid yellow",
                }}
              >
                Learn more
      </Button>
      </Box>
    </Box>
  )
}

export default SimplyfySTMS
