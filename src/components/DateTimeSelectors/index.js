import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

// images
import FromFlightIcon from "../../assets/Icons/fromFlight.png";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateTimeSelectors() {
  const [airWayType, setAirWayType] = React.useState("domestic");
  const [isMyanmarCitizens, setIsMyanmarCitizens] = React.useState("yes");
  const [dateValue, setDateValue] = React.useState(new Date());

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            background: "white",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            fontSize: "16px",
            width: "100%",
            [theme.breakpoints.down("lg")]: {
              width: "90%",
            },
          })}
          mb={0.3}
        >
          <Grid container spacing={0} py={1}>
            <Grid
              item
              sm={6}
              md={6}
              lg={3}
              sx={{
                fontSize: "10px",
                display: "flex",
                justifyContent: "center",
                padding: "0px 15px",
                borderRight: "1px solid gray",
              }}
            >
              <Box
                sx={(theme) => ({
                  position: "absolute",
                  marginLeft: "13%",
                  marginTop: "-7px",
                  display: "flex",
                  justifyItems: "center",
                  [theme.breakpoints.down("lg")]: {
                    marginLeft: "30%",
                  },
                })}
              >
                <span
                  style={{
                    padding: "1px 4px",
                    fontSize: "12px",
                    backgroundColor: "orange",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  New!
                </span>
              </Box>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={airWayType}
                onChange={(event) => setAirWayType(event.target.value)}
                sx={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <FormControlLabel
                  value="domestic"
                  control={
                    <Radio sx={{ padding: "0px", paddingRight: "4px" }} />
                  }
                  label={
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: `${
                          airWayType === "domestic" ? "bold" : ""
                        }`,
                      }}
                    >
                      Domestic
                    </span>
                  }
                  sx={{ margin: "0px" }}
                />
                <FormControlLabel
                  value="international"
                  control={
                    <Radio sx={{ padding: "0px", paddingRight: "4px" }} />
                  }
                  label={
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: `${
                          airWayType === "international" ? "bold" : ""
                        }`,
                      }}
                    >
                      International
                    </span>
                  }
                  sx={{ margin: "0px" }}
                />
              </RadioGroup>
            </Grid>
            <Grid
              item
              sm={6}
              md={6}
              lg={3.5}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "0px 15px",
                borderRight: "1px solid gray",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  style={{
                    fontSize: "14px",
                    alignItems: "end",
                    display: "flex",
                  }}
                >
                  Myanmar Citizens
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue={isMyanmarCitizens}
                  onChange={(event) => setIsMyanmarCitizens(event.target.value)}
                  sx={(theme) => ({
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "space-between",
                    [theme.breakpoints.up("lg")]: {
                      width: "40%",
                    },
                  })}
                >
                  <FormControlLabel
                    value="yes"
                    control={
                      <Radio sx={{ padding: "0px", paddingRight: "4px" }} />
                    }
                    label={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: `${
                            isMyanmarCitizens === "yes" ? "bold" : ""
                          }`,
                        }}
                      >
                        Yes
                      </span>
                    }
                    sx={{ margin: "0px" }}
                  />
                  <FormControlLabel
                    value="no"
                    control={
                      <Radio sx={{ padding: "0px", paddingRight: "4px" }} />
                    }
                    label={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: `${
                            isMyanmarCitizens === "no" ? "bold" : ""
                          }`,
                        }}
                      >
                        No
                      </span>
                    }
                    sx={{ margin: "0px" }}
                  />
                </RadioGroup>
              </Box>
            </Grid>
            <Grid
              item
              sm={6}
              md={6}
              lg={2.5}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "0px 15px",
                borderRight: "1px solid gray",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    fontSize: "14px",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  Trip Type
                </Box>
                <Autocomplete
                  id="disable-close-on-select"
                  disableCloseOnSelect={false}
                  defaultValue={tripTypes[0]}
                  options={tripTypes}
                  clearIcon={false}
                  sx={{
                    alignItems: "end",
                    display: "flex",
                    justifyContent: "center",
                    padding: "0px",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      sx={{
                        width: "100px",
                        padding: "0px !important",
                        alignItems: "center",
                      }}
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        style: {
                          fontWeight: 700,
                          fontSize: "14px",
                          width: "100px",
                          positon: "relative",
                          padding: "0px",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid
              item
              sm={6}
              md={6}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "0px 15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    fontSize: "14px",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  Passengers
                </Box>
                <Autocomplete
                  id="disable-close-on-select"
                  disableCloseOnSelect={false}
                  defaultValue={passengers[0]}
                  options={passengers}
                  clearIcon={false}
                  sx={{
                    alignItems: "end",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      sx={{
                        width: "100px",
                        padding: "0px !important",
                        alignItems: "end",
                        fontSize: "16px",
                      }}
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        style: {
                          fontSize: "14px",
                          fontWeight: 700,
                          width: "100px",
                          positon: "relative",
                          padding: "0px",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* from and to , selected date */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            background: "white",
            borderRadius: 3,
          }}
        >
          <Grid container spacing={0} py={2}>
            <Grid
              item
              xs={6}
              md={3}
              sx={{
                borderRight: "1px solid gray",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={(theme) => ({
                  display: "flex",
                  alignItems: "center",
                  [theme.breakpoints.down("lg")]: {
                    paddingLeft: "20px",
                  },
                })}
              >
                <img src={FromFlightIcon} alt="From Flight Icon" />
                <TextField
                  id="standard-basic"
                  label="From"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  style={{
                    marginLeft: 20,
                    dislay: "flex",
                    alignItems: "center",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              sx={{
                borderRight: "1px solid gray",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={FromFlightIcon} alt="To Flight Icon" />
                <TextField
                  id="standard-basic"
                  label="To"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  style={{
                    marginLeft: 20,
                    fontSize: "14px",
                    alignItems: "center",
                    display: "flex",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                padding: "0px 10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {/* <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}> */}
                {/* <img
                    src={CalendarIcon}
                    alt="From Flight Icon"
                    style={{ width: 35, height: 35}}
                  /> */}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Custom input"
                    value={dateValue}
                    onChange={(newValue) => {
                      setDateValue(newValue);
                    }}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "20px",
                          alignItems: "center",
                        }}
                      >
                        {InputProps?.endAdornment}
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <span>Deparature Date</span>
                          <input
                            ref={inputRef}
                            value={new Date(
                              { ...inputProps }.value
                            ).toDateString()}
                            style={{
                              fontSize: "14px",
                              fontWeight: "bold",
                              border: "0px",
                              outline: "0px",
                              padding: "0px",
                            }}
                          />
                        </Box>
                      </Box>
                    )}
                  />
                </LocalizationProvider>

                {/* </Box> */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="contained"
                    size="medium"
                    style={{
                      height: 45,
                      width: 150,
                      marginTop: 1,
                      backgroundColor: "#ef900b",
                      borderRadius: 10,
                      fontSize: "14px",
                    }}
                  >
                    Searh
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

const tripTypes = [
  { label: "One Way" },
  { label: "Two Way" },
  { label: "Three Way" },
];

const passengers = [
  { label: "1 Adult" },
  { label: "2 Adult" },
  { label: "3 Adult" },
];
