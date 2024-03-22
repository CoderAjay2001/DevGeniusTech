import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const cardsData = [
  {
    title: "Real Estate",
    image:
      "https://img.freepik.com/free-photo/set-designer-work-indoors_23-2149836942.jpg?size=626&ext=jpg&ga=GA1.2.915961146.1702115503&semt=ais",
    description:
      "Unlock the door to your ideal home at our real estate hub, where every listing is a gateway to a brighter future.",
  },
  {
    title: "Restaurant Website",
    image:
      "https://img.freepik.com/free-photo/chinese-traditional-interior-restaurant_1409-6256.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=sph",
    description:
      "Indulge your senses and explore a culinary journey with us – where every dish tells a story of flavor, passion, and a warm welcome.",
  },
  {
    title: "Tours and Travels",
    image:
      "https://img.freepik.com/premium-photo/travel-world-monuments-concept_117023-14.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=ais",

    description:
      "Embark on unforgettable adventures with our travel expertise—your gateway to discovering the world's wonders, one destination at a time.",
  },
  {
    title: "Gym Website",
    image:
      "https://img.freepik.com/free-vector/sport-landing-page-with-photo_23-2148362702.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=ais",

    description:
      "Ignite your fitness journey with us, where every workout is a step towards a stronger, healthier, and more vibrant version of you.",
  },
  {
    title: "E-Commerce",
    image:
      "https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34865.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=ais",

    description:
      "Shop smarter, live better – your online marketplace for effortless and delightful shopping.",
  },
  {
    title: "Employee Management",
    image:
      "https://img.freepik.com/free-photo/working-fun-atmosphere-group-young-freelancers-office-have-conversation-smiling_146671-13588.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=ais",

    description:
      "Optimize your workforce seamlessly with our streamlined employee management app.",
  },
  {
    title: "Barber Shop Website",
    image:
      "https://img.freepik.com/free-vector/barber-shop-hair-styling-tools-supplies-set-realistic-monochrome-top-view-with-shaving-brush-vector-illustration_1284-30216.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=ais",

    description:
      "Transform your look, renew your confidence at our barber shop - where style meets expertise.",
  },
    {
      title: "Pharmacy Website",
      image:
        "https://img.freepik.com/free-photo/young-hispanic-woman-pharmacist-smiling-confident-standing-with-arms-crossed-gesture-pharmacy_839833-7087.jpg?size=626&ext=jpg&ga=GA1.1.915961146.1702115503&semt=sph",

      description:
        "Your health hub: A pharmacy where care meets convenience for a healthier you.",
    },
];

const Projects = () => {
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
        Our Projects
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
        Our Projects
      </Typography>
      <Typography
        variant="h3"
        sx={{
          ml: "22rem",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "200",
          marginTop: "2rem",
          display: { xs: "none", md: "flex" },
          fontFamily: "roboto",
          color: "white",
        }}
      >
        Your business gets the ideal website through our careful design strategy
      </Typography>
      <Typography
        variant="h3"
        sx={{
          mt: 3,
          mr: 4,
          display: { xs: "flex", md: "none" },
          fontFamily: "roboto",
          fontSize: "1.8rem",
          fontWeight: "200",
          color: "white",
        }}
      >
        Your business gets the ideal website through our careful design strategy
      </Typography>

      <Grid container spacing={1}>
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "2rem",
                marginTop: "2rem",
                marginRight: "2rem",
                display: "flex",
                borderRadius: "2rem",
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
    </Box>
  );
};

export default Projects;
