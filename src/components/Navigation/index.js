import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";

// images
import FlymyaLogo from "../../assets/Icons/flymya_logo.png";
import FlagIcon from "../../assets/Icons/language_flag.png";
import ProfileIcon from "../../assets/Icons/flymya_profile.png";

const useStyles = makeStyles({
  logo: {
    cursor: "pointer",
    height: 40,
  },
  blog_nav: {
    cursor: "pointer",
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 500,
  },
  flag_prolile: {
    cursor: "pointer",
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        pt={2}
      >
        <img src={FlymyaLogo} className={classes.logo} alt="Flymya Logo" />
        <div>
          <Stack direction="row" spacing={5}>
            <Hidden smDown>
              <div className={classes.blog_nav}>Blog</div>
            </Hidden>
            <img src={FlagIcon} className={classes.flag_prolile} alt="Flag" />
            <img
              src={ProfileIcon}
              className={classes.flag_prolile}
              alt="Profile"
            />
          </Stack>
        </div>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          align="center"
          className={classes.title}
          style={{ fontWeight: "700", color: "#01aeef" }}
        >
          Travel is easy with us
        </Typography>
      </Box>
    </Container>
  );
};

export default Navigation;
