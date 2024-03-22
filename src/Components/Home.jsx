import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "../Components/Home.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const cardsData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDwTCGOUowhBNXIqEy9CAEy2LcylRzlvDr0gzItuIGA&s",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EKNVvloVcnSF-d5U0J6Hlqta5S6IS236ZA&usqp=CAU",
  },

  {
    image:
      "https://images-platform.99static.com//-q05jxeZ7qO6rfG3fryx5ESTOgg=/118x119:1479x1480/fit-in/500x500/99designs-contests-attachments/103/103768/attachment_103768679",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAPijfztovaGKUQQlhQgLsAKmX8xBg__nXg&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0qx_AJHjsyJYxODbrrxyXDOlLFIZ5aHcYg&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5W9BRZLC3uJh7-YxzGDu4yVlQQ6gNPx8iktJDhjC38dUIBOe4eEtNenbMAUD9AX-Y1NI&usqp=CAU",
  },
  {
    image:
      "https://logos-world.net/wp-content/uploads/2021/08/Shortcut-Logo.png",
  },
  {
    image:
      "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/hsbc-logo.png",
  },
];

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        width: "94vw",
        height: "270vh",
        m: 0,
        p: 5,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          ml: "3rem",
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "500",
          marginTop: ".2rem",
          display: { xs: "none", md: "flex" },
          color: "white",
        }}
      >
        Website Development Company
      </Typography>
      <Typography
        variant="h1"
        sx={{
          mr: "2rem",
          textAlign: "center",
          fontSize: "1.7rem",
          fontWeight: "500",
          marginTop: ".2rem",
          display: { xs: "flex", md: "none" },
          color: "white",
        }}
      >
        Website Development Company
      </Typography>
      <Typography
        variant="h1"
        sx={{
          mt: 3,
          mr: 2,
          display: { xs: "flex", md: "none" },
          fontFamily: "sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
          // letterSpacing: ".1rem",
          color: "white",
        }}
      >
        Empowering Your Online Presence with Precision....
      </Typography>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontSize: "5rem",
          fontWeight: "600",
          marginTop: "2rem",
          display: { xs: "none", md: "flex" },
          color: "white",
        }}
      >
        Empowering Your Online Presence with Precision....
      </Typography>
      <Typography
        variant="h3"
        sx={{
          ml: "3rem",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "200",
          marginTop: "3rem",
          display: { xs: "none", md: "flex" },
          fontFamily: "roboto",
          color: "white",
        }}
      >
        "Your Success, Our Priority: Client Satisfaction, Strategic Approach,
        Timely Deliveries—Building Digital Triumphs Together."
      </Typography>
      <Typography
        variant="h3"
        sx={{
          mt: 3,
          mr: 4,
          display: { xs: "flex", md: "none" },
          fontFamily: "roboto",
          fontSize: "2rem",
          fontWeight: "200",
          color: "white",
        }}
      >
        "Your Success, Our Priority: Client Satisfaction, Strategic Approach,
        Timely Deliveries—Building Digital Triumphs Together."
      </Typography>
      <Button
        variant="contained"
        sx={{
          height: "6rem",
          width: "18rem",
          fontSize: "1.5rem",
          ml: "42rem",
          mt: 8,
          display: { xs: "none", md: "flex" },
          borderRadius: "10rem",
        }}
      >
        Get Started {"</>"}
      </Button>
      <Button
        variant="contained"
        sx={{
          height: "5rem",
          width: "18rem",
          fontSize: "1.5rem",
          ml: "3rem",
          mt: 6,
          display: { xs: "flex", md: "none" },
          borderRadius: "10rem",
        }}
      >
        Get Started {"</>"}
      </Button>
      <Box>
        <Typography
          sx={{
            marginTop: "5rem",
            marginLeft: "2rem",
            color: "#FFFFFF",
            fontSize: "3rem",
            fontWeight: "600",
            fontFamily: "monospace",
          }}
        >
          Trusted by Top Brands
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
                  marginBottom: "2rem",
                  display: "flex",
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
                      display: { xs: "none", md: "flex" },
                    }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          style={{
            display: "inline-block",
            animation: "moveTextFadeIn 25s linear infinite",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              width: "108rem",
              color: "#FFFFFF",
              fontSize: "1.8rem",
              marginTop: "1.2rem",
            }}
          >
            "Building Websites That Work for You: Affordable, Reliable, and
            Tailored to Your Business Needs. Your Online Success Starts Here!"
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            marginTop: "5rem",
            marginLeft: "2rem",
            color: "#FFFFFF",
            fontSize: "4.6rem",
            fontFamily: "revert",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Accordion sx={{ mt: "2rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              fontSize: "3rem",
            }}
          >
            Who we are?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              fontSize: "2rem",
            }}
          >
            "DevGenius Technologies is a leading software development company
            dedicated to delivering comprehensive and innovative web development
            solutions. With a commitment to excellence, we offer end-to-end
            services that encompass the entire web development lifecycle. From
            conceptualization and design to development, testing, and
            deployment, our team of experts at DevGenius Technologies ensures
            seamless, customized, and scalable web solutions. We pride ourselves
            on combining technical expertise with a client-centric approach to
            empower businesses with robust, user-friendly, and future-ready
            websites. Trust DevGenius Technologies to transform your digital
            vision into reality, elevating your online presence and driving
            success for your business."
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              fontSize: "3rem",
            }}
          >
            What are our main technologies?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              fontSize: "2rem",
            }}
          >
            "At DevGenius Technologies, we specialize in crafting dynamic and
            efficient web solutions by leveraging a versatile technology stack.
            Our team excels in both front-end and back-end development,
            utilizing cutting-edge frameworks such as ReactJS for engaging user
            interfaces and Spring Boot for robust server-side applications.
            Database management is a forte, with expertise in MySQL and MongoDB,
            ensuring seamless data integration and retrieval. In the cloud
            realm, we harness the power of AWS (Amazon Web Services) to optimize
            scalability, reliability, and security. Additionally, our
            proficiency extends to .NET technologies, enabling us to deliver
            comprehensive and integrated solutions. With a focus on innovation
            and client satisfaction, DevGenius Technologies is your go-to
            partner for end-to-end web development, where advanced technology
            meets tailored solutions."
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              fontSize: "3rem",
            }}
          >
            Why to choose us ?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              fontSize: "2rem",
            }}
          >
            DevGenius Technologies delivers tailored web solutions with
            expertise in ReactJS, Spring Boot, AWS, .NET, and more. Our
            client-centric approach ensures innovation, reliability, and
            user-friendly designs.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              fontSize: "3rem",
            }}
          >
            Do we provide support after project delivery ?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              fontSize: "2rem",
            }}
          >
            Yes, DevGenius Technologies is committed to providing post-delivery
            support services. Our team ensures ongoing assistance, addressing
            any issues, updates, or maintenance requirements to ensure the
            sustained performance and success of your web solutions.
          </AccordionDetails>
        </Accordion>
        <Button
          variant="contained"
          sx={{
            marginTop: "5rem",
            marginLeft: "40rem",
            height: "6rem",
            fontSize: "1.5rem",
            fontFamily: "roboto",
            borderRadius: "5rem",
            fontWeight: "500",
            padding: "1.3rem",
          }}
        >
          Let's discuss your project
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
