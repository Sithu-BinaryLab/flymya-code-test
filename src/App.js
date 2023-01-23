import "./App.css";
import * as React from "react";
import Navigation from "./components/Navigation";
import DateTimeSelectors from "./components/DateTimeSelectors";
import WaySelectors from "./components/WaySelectors";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import MobileDateTimeSelector from "./components/mobile_datetime_selector";
import Slides from "./components/Slides";

function App() {
  const [value, setValue] = React.useState("one");

  return (
    <div>
      <Navigation />
      <Slides />
      <WaySelectors value={value} setValue={setValue} />
      <Hidden smDown>
        <Box
          sm={{ display: "none" }}
          sx={{
            background: "#188ad8",
            paddingTop: 5,
            paddingBottom: 5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DateTimeSelectors />
        </Box>
      </Hidden>
      <Hidden smUp>
        <MobileDateTimeSelector value={value} />
      </Hidden>
    </div>
  );
}

export default App;
