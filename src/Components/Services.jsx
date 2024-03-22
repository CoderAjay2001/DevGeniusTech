import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea} from "@mui/material";

const cardsData = [
  {
    title: "UI/UX Design",
    image:
      "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=ais",
    description:
      "Elevate Experiences: Crafting Intuitive and Inspiring UI/UX Designs for a Seamless Digital Journey.",
  },
  {
    title: "Web development",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=ais",
    description:
      "Building Tomorrow's Web Today: Innovative Solutions, Seamless Experiences.",
  },
  {
    title: "Digital Marketing",
    image:
      "https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9027.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=ais",

    description:
      "Power Your Presence: Strategic Digital Marketing for Growth and Impact.",
  },
  {
    title: "Branding",
    image:
      "https://img.freepik.com/free-vector/branding-concept-landing-page_52683-21189.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=sph",

    description:
      "Beyond Logos, Creating Legacies: Crafting Memorable Brands for Lasting Impressions.",
  },
];
const technologies = [
  {
    name: "React",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-quantum-illustration_23-2149246000.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=sph",
  },
  {
    name: "Python",
    image:
      "https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=sph",
  },
  {
    name: "Java",
    image:
      "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=sph",
  },
  {
    name: "Wordpress",
    image:
      "https://img.freepik.com/free-vector/isometric-cms-concept_23-2148807389.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=sph",
  },
];
const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        width: "94vw",
        height: "190vh",
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
        Our Services
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
        Our Services
      </Typography>
      <Grid container spacing={1}>
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "2rem",
                marginTop: "4rem",
                marginRight: "2rem",
                display: "flex",
                borderTopLeftRadius: "2.4rem",
                borderBottomRightRadius:"2.4rem",
                transition: "transform 0.3s", // Added transition property
                "&:hover": {
                  transform: "scale(1.07)", // Scale-out effect on hover
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    display: {
                      xs: "flex-column",
                      md: "flex",
                      borderRadius: "2rem",
                      height: "20rem",
                    },
                  }}
                />
              </CardActionArea>
            </Card>
            <Card
              sx={{
                marginLeft: "2rem",
                marginRight: "2rem",
                marginBottom: "2rem",
                display: "flex",
                borderRadius: "2.4rem",
                backgroundColor: "#000000",
                color: "#FFFFFF",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "1rem",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    fontFamily: "sans-serif",
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: "5rem",
            fontWeight: "600",
            marginTop: "1.5rem",
            display: { xs: "none", md: "flex" },
            color: "white",
          }}
        >
          Technologies
        </Typography>
        <Grid container spacing={1}>
          {technologies.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 345,
                  marginLeft: "2rem",
                  marginTop: "4rem",
                  marginRight: "2rem",
                  display: "flex",
                  borderTopRightRadius:"2.4rem",
                  borderBottomLeftRadius:"2.4rem",
                  transition: "transform 0.3s", // Added transition property
                  "&:hover": {
                    transform: "scale(1.07)", // Scale-out effect on hover
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="160"
                    image={card.image}
                    alt={card.name}
                    sx={{
                      display: {
                        xs: "flex-column",
                        md: "flex",
                        borderRadius: "2rem",
                        height: "20rem",
                      },
                    }}
                  />
                </CardActionArea>
              </Card>
              <Card
                sx={{
                  marginLeft: "2rem",
                  marginRight: "2rem",
                  marginBottom: "2rem",
                  display: "flex",
                  borderRadius: "2.4rem",
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      marginLeft: "5rem",
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      fontFamily: "monospace",
                    }}
                  >
                    {card.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
