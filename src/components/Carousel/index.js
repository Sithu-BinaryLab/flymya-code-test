import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//images
import CarouselOne from "../../assets/Icons/carousel.png";
import CarouselTwo from "../../assets/Icons/carousel1.png"

export default function Carousel() {
  const [Image, setImage] = useState("CarouselOne");

  const handleSlideImage = () => {
    if (Image === "CarouselOne") {
      setImage("CarouselTwo");
    }
    if (Image === "CarouselTwo") {
      setImage("CarouselOne")
    }
  }
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        mt={5}
        mb={5}
      >
        <ChevronLeftIcon
          color="primary"
          fontSize="large"
          style={{ paddingTop: "6%", cursor: "pointer" }}
          onClick={handleSlideImage} />
        <img
          src={Image === "CarouselOne" ? CarouselOne : CarouselTwo}
          style={{ cursor: "pointer", width: "90%", height: "auto" }}
          alt="Carousel"
        />
        <ChevronRightIcon
          color="primary"
          fontSize="large"
          style={{ paddingTop: "6%", cursor: "pointer" }}
          onClick={handleSlideImage} />
      </Box>
    </Container>
  );
}
