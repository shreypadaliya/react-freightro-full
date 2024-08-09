import { Box } from "@mui/material";
import React from "react";

function Cardhover({
  image,
  icon: Icon,
  title,
  description,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) {
  return (
    <Box
      className="boxmain1"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        height: "671px",
        width: { xs: "100%", sm: "100%", md: "50%" },
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: {
          xs: "none", // No transition for xs and sm screen sizes
          sm: "none",
          md: "width 0.3s ease", // Smooth transition for width change on md and larger
        },
        "&:hover": {
          width: { md: "55%" }, // Increase width on hover only for md and larger
        },
        position: "relative",
        "&:hover .boxmain1": {
          transform: {
            md: "translateY(0)", // Move to original position on hover only for md and larger
          },
          transition: {
            md: "transform 1.9s ease", // Smooth transition only for md and larger
          },
        },
        "&:hover .boxmain3": {
          display: { md: "block" }, // Show the boxmain3 on hover only for md and larger
          transition: {
            md: "opacity 0.3s ease", // Smooth transition for display effect only for md and larger
          },
          opacity: { md: 1 }, // Ensure opacity transition is applied only for md and larger
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity to darken the video
        }}
      >
        <Box
          className="boxmain2"
          sx={{
            position: "absolute",
            bottom: "60px",
            width: "80%",
            // marginInline: "75px",
            marginLeft:{xs:"25px",sm:"40px",md:"55px",lg:"75px"},
            marginRight:{xs:"25px",sm:"40px",md:"55px",lg:"75px"},
            opacity: isHovered ? 0 : 1, // Hide content when another card is hovered
            transition: "opacity 0.3s ease", // Smooth transition for opacity change
          }}
        >
          <Box sx={{ marginBottom: "15px" }}>
            <Icon sx={{ color: "yellow", fontSize: "3rem" }} />
          </Box>
          <Box
            sx={{ color: "white", fontSize: {xs:"2.0rem",sm:"2.5rem",md:"3.0rem"}, marginBottom: "10px" }}
          >
            {title}
          </Box>
          <Box
            sx={{
              height: "4px",
              backgroundColor: "yellow",
              width: "100%",
              borderRadius: "10px",
            }}
          ></Box>
          <Box
            className="boxmain3"
            sx={{
              width: "100%",
              maxWidth: "450px",
              color: "white",
              marginTop: "15px",
              display: {
                xs: "block", // Display by default on extra-small screens (mobile)
                sm: "block", // Display by default on small screens (tablets)
                md: "none", // Hide on medium screens and up until hover
              },
              opacity: {
                xs: 1, // Full opacity by default on extra-small screens
                sm: 1, // Full opacity by default on small screens
                md: 0, // Hidden by default on medium screens and up until hover
              },
            }}
          >
            {description}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cardhover;
