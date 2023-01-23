import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  slide_image: {
    cursor: "pointer",
    width: "100%",
    height: "auto",
  },
});

const SlideGroup = ({ groupName, setOpen, setSlideImage }) => {
  const classes = useStyles();
  const DilogImageState = (image_no) => {
    setOpen(true);
    setSlideImage(image_no);
  };

  return (
    <Grid container spacing={2} px={2}>
      {groupName.map((slide, index) => (
        <Grid key={index} item xs={12} md={4}>
          <img
            src={slide.image}
            className={classes.slide_image}
            alt="Slide"
            onClick={() => DilogImageState(slide.image)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SlideGroup;
