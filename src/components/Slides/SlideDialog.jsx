import React from "react";
import { makeStyles } from "@mui/styles";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  slide_image: {
    cursor: "pointer",
    width: "100%",
    height: "auto",
  },
  close_icon: {
    cursor: "pointer",
  },
});

export default function SlideDialog({ handleClose, slideImage }) {
  const classes = useStyles();

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "right" }}
        className={classes.close_icon}
        onClick={handleClose}
      >
        <CloseIcon />
      </Box>
      <DialogContent>
        <img src={slideImage} className={classes.slide_image} alt="Slide" />
        <Typography variant="h6" color="initial" mt={2} mb={2}>
          Gong Xi Fa Cai 🏮🎊
        </Typography>
        <Typography gutterBottom>
          Get 3,000 Kyats off for every minimum purchase of 50,000 Kyats from
          our Flymya during this Happy Chinese New Year. Since the promotion is
          only available from 21st January to 25th January 2023, use the promo
          code (CNY2k23) and buy now.
        </Typography>
      </DialogContent>
    </div>
  );
}
