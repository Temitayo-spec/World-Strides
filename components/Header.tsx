/* global google */
import React, { useState } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import dynamic from "next/dynamic";
import SearchIcon from "@material-ui/icons/Search";

import { headerStyles } from "../material-styles";

type Props = {
  setCoordinates: (coordinates: any) => void;
};

const libraryProps = ["places"] as any;

const Header = ({ setCoordinates }: Props): JSX.Element => {
  const classes = headerStyles();
  const [autocomplete, setAutocomplete] = useState(null) as any;

  const onLoad = (autoComplete: any) => {
    setAutocomplete(autoComplete);
  };

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          World Strides
        </Typography>
        <Box display="flex" className={classes.flex}>
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <LoadScript
            googleMapsApiKey="AIzaSyCdmqmjNtCI4Z74x2McFxpreTBUbUOMFZs"
            libraries={["places"]}
          >
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {/* </Autocomplete>
          </LoadScript> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
