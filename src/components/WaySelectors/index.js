import * as React from "react";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import CUSTOM_ICON_PACK from "../Icon";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

export default function WaySelectors({ value, setValue }) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.container} mb={2}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{ display: "flex" }}
      >
        <Tab
          value="one"
          label="Flights"
          icon={
            value === "one"
              ? CUSTOM_ICON_PACK.FlightActiveIcon
              : CUSTOM_ICON_PACK.FlightIcon
          }
        />
        <Tab
          value="two"
          label="Hotels"
          icon={
            value === "two"
              ? CUSTOM_ICON_PACK.HotelActiveIcon
              : CUSTOM_ICON_PACK.HotelIcon
          }
        />

        <Tab
          value="three"
          label="bus"
          icon={
            value === "three"
              ? CUSTOM_ICON_PACK.BusActiveIcon
              : CUSTOM_ICON_PACK.BusIcon
          }
        />

        <Tab
          value="four"
          label="Cars"
          icon={
            value === "four"
              ? CUSTOM_ICON_PACK.CarActiveIcon
              : CUSTOM_ICON_PACK.CarIcon
          }
        />
        <Tab
          value="five"
          label="Ballons"
          icon={
            value === "five"
              ? CUSTOM_ICON_PACK.BallonActiveIcon
              : CUSTOM_ICON_PACK.BallonIcon
          }
        />
        <Tab
          value="size"
          label="Promo"
          icon={CUSTOM_ICON_PACK.PromoIcon}
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.down("md")]: {
              display: "",
            },
          })}
        />
        <Tab
          value="seven"
          label="FAQ"
          icon={CUSTOM_ICON_PACK.FAQIcon}
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.down("md")]: {
              display: "",
            },
          })}
        />
      </Tabs>
    </Box>
  );
}
