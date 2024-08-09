import { Box, Button } from "@mui/material";
import React from "react";

function Network() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          paddingTop: { xs: "40px", sm: "60px", md: "90px" },
          paddingBottom: { xs: "40px", sm: "60px", md: "90px" },
          gap: { xs: "30px", sm: "20px", md: "0px" },
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "100%" } }}>
          <Box
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem" },
              fontWeight: 700,
              lineHeight: "1.2",
              color: "white",
              width: "85%",
            }}
          >
            Ready to Optimize Your Supply Chain Network?
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "100%" } }}>
          <Box
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.25rem" },
              fontWeight: 400,
              lineHeight: "1.2",
              color: "#b1b3b1",
              paddingRight: { xs: "0px", sm: "0px", md: "60px" },
            }}
          >
            Get in touch with us to experience supply chain optimization through
            collaboration and advanced technology
          </Box>
          <Box sx={{ display: "flex", gap: "15px" }} paddingTop="30px">
            <input
              type="text"
              placeholder="Enter your Email or Phone Number"
              required
              style={{
                border: "1px solid white",
                backgroundColor: "#0f1d20",
                color: "white",
                borderRadius: "3px",
                fontSize: "1rem",
                lineHeight: "1.6",
                padding: "0.5rem 0.75rem",
                height: "auto",
                minHeight: "1.75rem",
                // height:"1.75rem",
                width: "100%",
                maxWidth: "400px",
                boxSizing: "border-box",
              }}
            />

            <Button
              sx={{
                paddingInline: "25px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#0f1d20",
                color: "white",
                border: "1px solid yellow",
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Network;
