import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

//images
import MAI from "../../assets/PartnerIcons/mai.PNG";
import Myanmar from "../../assets/PartnerIcons/myanmar.PNG";
import KBZ from "../../assets/PartnerIcons/kbz.PNG";
import Yadanar from "../../assets/PartnerIcons/yadanar.PNG";
import ThanLwin from "../../assets/PartnerIcons/thanlwin.PNG";
import Golden from "../../assets/PartnerIcons/golden.PNG";

const useStyles = makeStyles({
  container: {
    marginTop: 50,
  },
  headingText: {
    textAlign: "center",
  },
  partnerImage: {
    width: 150,
    height: 60,
  },
});
const PartnerList = [
  { image: MAI },
  { image: Myanmar },
  { image: KBZ },
  { image: Yadanar },
  { image: ThanLwin },
  { image: Golden },
];

const Partners = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        variant="h3"
        color="initial"
        mt={2}
        mb={2}
        className={classes.headingText}
      >
        Airline Partners
      </Typography>
      <Stack>
        {/* <Stack spacing={2} direction="row" justifyContent="center">
          <div>
            <img src={MAI} alt="Mai" />
          </div>
          <div>
            <img src={Myanmar} alt="Myanmar" />
          </div>
          <div>
            <img src={KBZ} alt="KBZ" />
          </div>
        </Stack> */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          px={2}
        >
          {PartnerList.map((slide, index) => (
            <Grid
              key={index}
              item
              xs={6}
              md={4}
              justify="center"
              alignItems="center"
            >
              <img
                src={slide.image}
                className={classes.partnerImage}
                alt="Slide"
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
};

export default Partners;
