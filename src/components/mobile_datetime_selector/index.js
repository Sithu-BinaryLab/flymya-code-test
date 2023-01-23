import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import * as React from "react";
import CUSTOM_ICON_PACK from "../../components/Icon";

function MobileDateTimeSelector({ value }) {
  return (
    <Box
      sx={{
        padding: "10px",
        gap: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Box
          sx={{
            display: "flex",
            borderRadius: "10px",
            justifyContent: "space-between",
            padding: "10px 16px",
            backgroundColor: "#eee",
          }}
        >
          <Box>Myanmar Citizens</Box>
          <Box>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={"yes"}
              //onChange={(event) => setIsMyanmarCitizens(event.target.value)}
              sx={{ display: "flex", gap: "5px" }}
            >
              <FormControlLabel
                value="yes"
                control={<Radio sx={{ padding: "0px", paddingRight: "4px" }} />}
                label={<span>Yes</span>}
                sx={{ margin: "0px" }}
              />
              <FormControlLabel
                value="no"
                control={<Radio sx={{ padding: "0px", paddingRight: "4px" }} />}
                label={<span>No</span>}
                sx={{ margin: "0px" }}
              />
            </RadioGroup>
          </Box>
        </Box>

        {value === "one" ? (
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "5px 7px 5px 5px #eee",
              color: "gray",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "4px 0px",
                  borderBottom: "2px solid #0d87dd",
                }}
              >
                <Button sx={{ fontWeight: "bold" }}>One Way</Button>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#eee",
                }}
              >
                <Button
                  sx={{ borderBottom: "2px solid $0d87dd", color: "gray" }}
                >
                  Round Trip
                </Button>
              </Grid>
            </Grid>
            <Box>
              {CUSTOM_ICON_PACK.swagDestination}
              <Box sx={{ borderBottom: "2px solid #eee", padding: "16px 6px" }}>
                <label>From</label>
                <label></label>
              </Box>

              <Box sx={{ borderBottom: "2px solid #eee", padding: "16px 6px" }}>
                <label>To</label>
                <label></label>
              </Box>
              <Box
                sx={{
                  color: "black",
                  borderBottom: "2px solid #eee",
                  padding: "16px 6px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label>Depature</label>
                <label style={{ fontWeight: "bold" }}>Tue,24 Jan 2023</label>
              </Box>
              <Box
                sx={{
                  borderBottom: "2px solid #eee",
                  padding: "16px 6px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label>Return</label>
                <label style={{ fontWeight: "bold" }}>
                  Tue,29 Jan 2023
                </label>{" "}
              </Box>
              <Box
                sx={{
                  borderBottom: "2px solid #eee",
                  padding: "16px 6px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label>Passenger</label>
                <label style={{ fontWeight: "bold" }}>1 Adult</label>{" "}
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              border: "1px solid gray",
              padding: "10px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <label style={{ color: "gray" }}>Destination/Property</label>
              <input
                type="text"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
              />
            </Box>
            <hr style={{ border: "1px solid #eee", width: "100%" }} />
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <label style={{ color: "gray" }}>Check-in date</label>
                <input
                  type="text"
                  value="Tue,24 Jan 2023"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "95%",
                    border: "none",
                    outline: "none",
                  }}
                />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <label style={{ color: "gray" }}>Check-in date</label>
                <input
                  type="text"
                  value="Tue,24 Jan 2023"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "95%",
                    border: "none",
                    outline: "none",
                  }}
                />
              </Box>
            </Grid>
            <hr style={{ border: "1px solid #eee", width: "100%" }} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <label style={{ color: "gray" }}>Pax</label>
              <input
                type="text"
                value="2 Adults,3 Childs,1 Room"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "none",
                  outline: "none",
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
      <Box>
        <Button
          sx={{
            padding: "16px 0px",
            width: "100%",
            backgroundColor: "#0d87dd",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default MobileDateTimeSelector;
