import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import Dialog from "@mui/material/Dialog";

//images
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SlideOne from "../../assets/SlideIcons/slide_one.PNG";
import SlideTwo from "../../assets/SlideIcons/slide_two.PNG";
import SlideThree from "../../assets/SlideIcons/slide_three.PNG";

//components
import SlideDialog from "./SlideDialog";
import SlideGroup from "./SlideGroup";

const DialogTheme = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const useStyles = makeStyles({
  button_position: {
    paddingTop: "6%",
  },
  slide_image: {
    cursor: "pointer",
    width: "100%",
    height: "auto",
  },
});

const slideGpOne = [
  { image: SlideOne },
  { image: SlideTwo },
  { image: SlideThree },
];

const slideGpTwo = [
  { image: SlideThree },
  { image: SlideOne },
  { image: SlideTwo },
];

const Slides = () => {
  const [slideGroup, setSlideGroup] = useState("slide-one");
  const [open, setOpen] = useState(true);
  const [slideImage, setSlideImage] = useState(SlideOne);
  const classes = useStyles();

  const handleSlideChange = () => {
    if (slideGroup === "slide-one") {
      setSlideGroup("slide-two");
    }
    if (slideGroup === "slide-two") {
      setSlideGroup("slide-one");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        mt={5}
        mb={2}
      >
        <Box className={classes.button_position}>
          <Hidden mdDown>
            <ChevronLeftIcon
              color="primary"
              fontSize="large"
              style={{ color: "#000", cursor: "pointer" }}
              onClick={handleSlideChange}
            />
          </Hidden>
        </Box>
        <SlideGroup
          groupName={slideGroup === "slide-one" ? slideGpOne : slideGpTwo}
          setOpen={setOpen}
          setSlideImage={setSlideImage}
        />
        <Box className={classes.button_position}>
          <Hidden mdDown>
            <ChevronRightIcon
              color="primary"
              fontSize="large"
              style={{ color: "#000", cursor: "pointer" }}
              onClick={handleSlideChange}
            />
          </Hidden>
        </Box>
      </Box>
      <div>
        <DialogTheme
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <SlideDialog handleClose={handleClose} slideImage={slideImage} />
        </DialogTheme>
      </div>
    </Container>
  );
};

export default Slides;
