// import { Box } from "@mui/material";
// import React from "react";

// function SolCard({ title, description, image }) {
//   return (
//     <Box 
//       sx={{
//         backgroundColor: "#0f1d20",
//         width: "100%",
//         height: "100%",
//         borderRadius: "4px",
//         textAlign: "center",
//         padding:"20px",
        
//       }}
//     >
//       <img
//         style={{ height: "3rem", width: "3rem" ,paddingBottom:"15px"}}
//         src={image}
//         alt={title}
//       />
//       <Box>
//         <Box
//           sx={{
//             color: "white",
//             fontSize: "1.5rem",
//             fontWeight: 700,
//             lineHeight: "1.4",
//             width:"80%",
//             marginInline:"auto"
            
//           }}
//         >
//           {title}
//         </Box>
//         <Box
//           sx={{
//             backgroundColor: "yellow",
//             borderRadius: "20px",
//             height: "3.5px",
//             marginTop: "3.5px",
//             marginBottom:"15px"
//           }}
//         ></Box>
//       </Box>
//       <p style={{ color: "#b1b3b1" }}>
//         {description}
//       </p>
//     </Box>
//   );
// }

// export default SolCard;

import React from "react";
import { Box, Typography } from "@mui/material";

function SolCard({ title, description, image }) {
  return (
    <Box 
      sx={{
        backgroundColor: "#0f1d20",
        height: '100%',
        borderRadius: "4px",
        textAlign: "center",
        padding: { xs: '15px', sm: '20px' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flexGrow: 0, mb: { xs: 1, sm: 2 } }}>
        <img
          style={{ height: "3rem", width: "3rem" }}
          src={image}
          alt={title}
        />
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: 700,
            lineHeight: 1.4,
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            mb: { xs: 1, sm: 2 },
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            backgroundColor: "yellow",
            borderRadius: "20px",
            height: "3.5px",
            width: '80%',
            maxWidth: '150px',
            mx: 'auto',
            mb: { xs: 1, sm: 2 },
          }}
        />
        <Typography 
          variant="body2" 
          sx={{ 
            color: "#b1b3b1", 
            flexGrow: 1,
            fontSize: { xs: '0.875rem', sm: '1rem' },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default SolCard;