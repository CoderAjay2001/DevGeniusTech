import React from "react";
import { Box, Typography } from "@mui/material";

const Aboutus = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        width: "94vw",
        height: "95vh",
        m: 0,
        p: 5,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          fontSize: "5rem",
          fontWeight: "600",
          marginTop: ".3rem",
          display: { xs: "none", md: "flex" },
          color: "white",
        }}
      >
        About us
      </Typography>
      <Typography
        variant="h1"
        sx={{
          mr: 7,
          display: { xs: "flex", md: "none" },
          fontFamily: "sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
          color: "white",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        About us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: "98rem",
          color: "#FFFFFF",
          fontSize: "1.6rem",
          marginTop: "1.2rem",
          marginLeft: "2rem",
        }}
      >
        DevGenius Technology is your go-to partner for comprehensive software
        development solutions, tailored to meet the diverse needs of businesses
        ranging from small enterprises to tech giants. We specialize in crafting
        online presences that elevate your brand and enhance user experiences.
        Our team of skilled developers combines innovation and practicality to
        deliver cutting-edge solutions, ensuring your digital footprint is both
        impactful and efficient. Trust DevGenius Technology to transform your
        ideas into powerful online solutions, making your mark in the digital
        landscape.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: "98rem",
          color: "#FFFFFF",
          fontSize: "1.6rem",
          marginTop: "1.2rem",
          marginLeft: "2rem",
        }}
      >
        At DevGenius Technology, exceptional client service is at the heart of our operations. We pride ourselves on fostering strong client relationships, providing personalized attention to each project, regardless of size. Our dedicated support team ensures clear communication and prompt responses, making collaboration seamless. We understand that every client is unique, and our commitment to delivering tailored solutions extends beyond development to ongoing support. DevGenius Technology is not just a service provider; we are your trusted partner in navigating the digital realm, ensuring your satisfaction and success every step of the way.
      </Typography>
    </Box>
  );
};

export default Aboutus;
