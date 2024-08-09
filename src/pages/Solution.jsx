import React from "react";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundpic from "../data/soluctionbackphoto.jpg";
import Navbar from "../components/Navbar";
import Homepage from "../components/homepage";
import SolDescription from "../components/SolDescription";
import SolCard from "../components/SolCard";
import cardData from "../data/cardData";

const Solution = ({ title, description, image }) => {
  return (
    <Box sx={{ backgroundColor: "rgb(26, 49, 54)" }}>
      <Box className="relative w-full overflow-hidden" sx={{ height: "960px" }}>
        <img
          className="absolute top-0 left-0"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src={backgroundpic}
          autoPlay
          loop
          muted
        ></img>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity to darken the video
          }}
        ></Box>
        <Box style={{ backgroundColor: "rgb(26, 49, 54)" }}>
          <Navbar />
          <Link path="/" />
          <Link path="/solution" />
          <Link path="/request-demo" />
          <Homepage
            title="Freightro | The STMS"
            description="Simplify and Transform Supply Chain Procurement"
          />
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ backgroundColor: "rgb(26, 49, 54)" }}>
        <Box py="7rem">
          <Box
            sx={{
              width: "100%",
              maxWidth: "900px",
              marginInline: "auto",
              paddingBottom: "5rem",
            }}
          >
            <SolDescription
              subtitle="Efficient Connections, Seamless Operations"
              title="Broker Service"
              description="Enhance your brokerage with centralized quote management, streamlined communications, automated documentation, and AI-powered networking. Optimize operations with performance analytics."
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "25px",
              flexWrap:{xs:"initial",sm:"wrap",md:"initial",lg:"initial"},
              flexDirection: { xs: "column", sm: "column", md: "row" },
              
            }}
          >
            {cardData.map((card, index) => (
              <SolCard  
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default Solution;
