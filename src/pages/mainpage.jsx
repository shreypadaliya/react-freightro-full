import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../data/video.mp4";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Homepage from "../components/homepage";
import Cardhover from "../components/Cardhover";
import backgroundImage from "../data/pic2.jpg";
import backgroundImage2 from "../data/pic1.jpg";
import backgroundImage3 from "../data/pic3.jpg";
import backgroundImage4 from "../data/pic4.jpg";
import SimplyfySTMS from "../components/SimplyfySTMS";
import "../App.css";
import Managment from "../components/Managment";
import Network from "../components/Network";
import Footer from "../components/Footer";
import hoverpic1 from "../data/hoverpic1.png"
import hoverpic2 from "../data/hoverpic2.png"
import hoverpic3 from "../data/hoverpic3.png"
import hoverpic4 from "../data/hoverpic4.png"

const Mainpage = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
<>
      <Box className="relative w-full overflow-hidden" sx={{ height: "960px" }}>
        <video
          className="absolute top-0 left-0"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src={backgroundVideo}
          autoPlay
          loop
          muted
        ></video>
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
            <Link path="/"  />
            <Link path="/solution"  />
            <Link path="/request-demo"  />
            <Homepage title="Freightro | The STMS" description="Supply Chain Optimization Through Network Collaboration"/>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "rgb(26, 49, 54)" }}>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "rgb(26, 49, 54)", paddingInline: "0px" }}
        >
          <SimplyfySTMS />
          <Container maxWidth="xl">
            <Box
              className="parent"
              sx={{
                display: "flex",
                gap: "30px",
                paddingTop: "50px",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              <Cardhover
                ref={card1Ref}
                image={backgroundImage}
                // icon={LocalShipping}
                image2={hoverpic1}
                title="Shippers-Centric Approach is here"
                description="Freightro's platform connects shippers with trusted providers, streamlining communication and logistics. With integrated messaging, users enjoy real-time load referencing, secure messaging, and efficient collaboration, all within a single, user-friendly interface."
                onMouseEnter={() => handleMouseEnter("card1")}
                onMouseLeave={handleMouseLeave}
                isHovered={hoveredCard === "card2"}
              />
              <Cardhover
                ref={card2Ref}
                image={backgroundImage2}
                // icon={LocalShipping}
                image2={hoverpic2}
                title="Simplified Procurement Processes"
                description="Freightro centralizes logistics operations, streamlines quote management, and automates BOL creation and POD uploads. Save time and costs with enhanced transparency and efficiency."
                onMouseEnter={() => handleMouseEnter("card2")}
                onMouseLeave={handleMouseLeave}
                isHovered={hoveredCard === "card1"}
              />
            </Box>
          </Container>
          <Container maxWidth="xl">
            <Box
              className="parent"
              sx={{
                display: "flex",
                gap: "30px",
                paddingTop: "50px",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              <Cardhover
                ref={card3Ref}
                image={backgroundImage3}
                // icon={LocalShipping}
                image2={hoverpic3}
                title="Enhanced Communication Platform"
                description="Freightro's platform connects shippers with trusted providers, streamlining communication and logistics. With integrated messaging, users enjoy real-time load referencing, secure messaging, and efficient collaboration, all within a single, user-friendly interface."
                onMouseEnter={() => handleMouseEnter("card2")}
                onMouseLeave={handleMouseLeave}
                isHovered={hoveredCard === "card1"}
              />
              <Cardhover
                ref={card4Ref}
                image={backgroundImage4}
                // icon={LocalShipping}
                image2={hoverpic4}
                title="Enhanced Technological Processing"
                description="Freightro leverages advanced technology to automate logistics operations, streamline procurement, and provide real-time insights, enhancing efficiency and accuracy in supply chain management."
                onMouseEnter={() => handleMouseEnter("card2")}
                onMouseLeave={handleMouseLeave}
                isHovered={hoveredCard === "card1"}
              />
            </Box>
          </Container>
          <Managment />
          <Network />
        </Container>
        <Box sx={{ width: "100%", backgroundColor: "#0f1d20" }}>
          <Container maxWidth="xl">
            <Footer />
          </Container>
        </Box>
      </Box>
      </>
  );
};

export default Mainpage;
