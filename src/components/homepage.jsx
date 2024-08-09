import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Homepage = ({title,description}) => {
  return (
    <>
      <Container maxWidth="lg">
      <Box sx={{ position: "absolute", top: "150px" ,width: {lg:"30%",md:"60%",sm:"90%",xs:"100%"} }}>
        <Box>
          <Typography
            sx={{
              color: "#b1b3b1",
              fontSize: {
                xs: "1rem",  // small for mobile devices
                sm: "1.25rem", // medium for tablets
                md: "1.25rem", // medium for laptops
                lg: "1.5rem",  // large for desktops
              },
              fontWeight:800,
            }}
          >
            {title}
          </Typography>
          <Box>
            <Box
              sx={{
                color: "white",
                fontSize: {
                  xs: "3rem",  // small for mobile devices
                  sm: "3.5rem", // medium for tablets
                  md: "5rem", // medium for laptops
                  lg: "5rem",  // large for desktops
                },
                fontWeight:800,
              }}
            >
              {description}
            </Box>
            <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
              <Button
                sx={{
                  paddingInline: "25px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  backgroundColor: "yellow",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#ffd700",
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      </Container>
    </>
  );
};

export default Homepage;
