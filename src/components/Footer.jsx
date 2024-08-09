import React from "react";
import { Box, Button,Typography, Link, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../data/logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f1d20",
        color: "white",
        width: "100%",
        paddingInline: "20px",
        paddingTop: { xs: "20px", sm: "30px", md: "80px" },
        paddingBottom: { xs: "20px", sm: "30px", md: "80px" },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Logo and Newsletter Section */}
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "flex-start", md: "flex-start" }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ maxHeight: "70px", marginBottom: "16px" }}
            />
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "left", md: "left" },
                marginBottom: "16px",
                fontSize: "16px",
              }}
            >
              Join our newsletter to stay up to date on features and releases.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "row", sm: "row" }}
              alignItems="flex-start"
              gap="15px"
            >
              {/* <TextField
                variant="outlined"
                placeholder="Enter your email"
                sx={{
                  backgroundColor: "#0f1d20",
                  borderRadius: "3px",
                  input: { color: "white" },
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "#FFFF00" },
                  "&.Mui-focused fieldset": { borderColor: "#FFFF00" },
                  marginBottom: { xs: "16px", sm: "0" },
                  width: { xs: "100%", sm: "100%" },
                  maxWidth: "500px",
                //   flexGrow: 1,
                  marginRight: { sm: "16px" },
                }}
              /> */}
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
              {/* <Button
                variant="outlined"
                sx={{
                  borderColor: "#FFFF00",
                  color: "white",
                  "&:hover": { backgroundColor: "#FFFF00", color: "black" },
                }}
              >
                Subscribe
              </Button> */}
              <Button
                sx={{
                  paddingInline: "25px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  backgroundColor: "#0f1d20",
                  color: "white",
                  border: "1px solid yellow",
                  
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Typography
              variant="caption"
              sx={{
                marginTop: "8px",
                textAlign: { xs: "center", md: "left" },
                fontSize: "0.75rem",
              }}
            >
              By subscribing you agree to our{" "}
              <Link href="#" color="#b1b3b1">
                Privacy Policy
              </Link>{" "}
              and provide consent to receive updates from our company.
            </Typography>
          </Box>
        </Grid>

        {/* Sitemap and Follow Us Section */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography variant="h6" sx={{ marginBottom: "16px" }}>
                Site Map
              </Typography>
              <Link
                href="#"
                color="inherit"
                sx={{
                  display: "block",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Home
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{
                  display: "block",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Solutions
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{
                  display: "block",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Request a Quote
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{
                  display: "block",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Login
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" sx={{ marginBottom: "16px" }}>
                Follow us
              </Typography>
              <Link
                href="#"
                color="inherit"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <LinkedInIcon sx={{ height: "24px", marginRight: "8px" }} />
                LinkedIn
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        my="40px"
        sx={{ backgroundColor: "black", height: "1px", borderRadius: "30px" }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: {xs:"0px",sm:"0px",md:"30px"},
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Typography sx={{}}>
          © 2024 Freightro Inc. All rights reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            paddingTop:{xs:"10px",sm:"10px",md:"0px"},
          }}
        >
          <Link href="#" color="inherit" sx={{}}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit">
            Terms of Service
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
