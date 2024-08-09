import { Box, Button } from "@mui/material";
import React from "react";

function Managment() {
  return (
    <>
      <Box
        sx={{
          paddingTop: "80px",
          paddingBottom: { xs: "40px", sm: "60px", md: "90px" },
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          width: "100%",
          gap: { xs: "40px", sm: "40px", md: "15px" },
          // justifyContent:"space-between"
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}>
          <Box sx={{ fontSize: "1.5rem", fontWeight: 600, color: "#b1b3b1" }}>
            Transform Logistics with The STMS
          </Box>
          <Box
            sx={{
              fontSize: { xs: "2rem", sm: "5rem", md: "5rem" },
              fontWeight: 800,
              color: "white",
            }}
          >
            Unified <br /> Logistics <br />
            Management with <br /> Freightro
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
            },
            backgroundColor: "#0f1d20",
            // marginRight: "24px",
            padding: "40px",
            boxSizing: "border-box",
            maxWidth: "584px",
            // display:"flex",flexDirection:"column",justifyContent:"center"
            marginInline: { xs: "auto", sm: "auto", md: "initial" },
            
          }}
        >
          <Box sx={{ backgroundColor: "#0f1d20" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "1.5rem",
              }}
            >
              <Box
                sx={{ marginBottom: "24px", width: { xs: "100%", sm: "50%" } }}
              >
                <Box
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    lineHeight: "1.4",
                    color: "white",
                  }}
                >
                  Connect
                </Box>
                <Box
                  sx={{
                    backgroundColor: "yellow",
                    height: "2px",
                    width: "100%",
                    borderRadius: "40px",
                    marginTop: "1.5rem",
                    marginBottom: "1.2rem",
                  }}
                ></Box>
                <Box style={{ color: "#b1b3b1" }}>
                  Freightro enables users to connect with a vast network of
                  shippers and providers, facilitating efficient and effective
                  collaborations.
                </Box>
              </Box>
              <Box
                sx={{ marginBottom: "24px", width: { xs: "100%", sm: "50%" } }}
              >
                <Box
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    lineHeight: "1.4",
                    color: "white",
                  }}
                >
                  Procure
                </Box>
                <Box
                  sx={{
                    backgroundColor: "yellow",
                    height: "2px",
                    width: "100%",
                    borderRadius: "40px",
                    marginTop: "1.5rem",
                    marginBottom: "1.2rem",
                  }}
                ></Box>
                <Box style={{ color: "#b1b3b1" }}>
                  Centralize your freight procurement operations for maximum
                  efficiency. Freightro integrates smart technology to
                  streamline bid requests, carrier selection, and
                  decision-making processes.
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                paddingTop: "25px",
                gap: "1.5rem",
              }}
            >
              <Box
                sx={{ marginBottom: "24px", width: { xs: "100%", sm: "50%" } }}
              >
                <Box
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    lineHeight: "1.4",
                    color: "white",
                  }}
                >
                  Communicate
                </Box>
                <Box
                  sx={{
                    backgroundColor: "yellow",
                    height: "2px",
                    width: "100%",
                    borderRadius: "40px",
                    marginTop: "1.5rem",
                    marginBottom: "1.2rem",
                  }}
                ></Box>
                <Box style={{ color: "#b1b3b1" }}>
                  Foster better collaboration among shippers, providers, and
                  other stakeholders with centralized communication features.
                </Box>
              </Box>
              <Box
                sx={{ marginBottom: "24px", width: { xs: "100%", sm: "50%" } }}
              >
                <Box
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    lineHeight: "1.4",
                    color: "white",
                  }}
                >
                  Network
                </Box>
                <Box
                  sx={{
                    backgroundColor: "yellow",
                    height: "2px",
                    width: "100%",
                    borderRadius: "40px",
                    marginTop: "1.5rem",
                    marginBottom: "1.2rem",
                  }}
                ></Box>
                <Box style={{ color: "#b1b3b1" }}>
                  Freightro provides comprehensive tools to expand and manage
                  your freight network. Our platform facilitates interactions
                  between all parties involved, promoting networking and
                  collaboration.
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ paddingTop: "40px" }}>
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

export default Managment;
