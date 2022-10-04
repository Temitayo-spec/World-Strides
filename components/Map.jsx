/* eslint-disable @next/next/no-img-element */
/* global google */
import React from "react";
import GoogleMap from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import { mapStyles } from "../material-styles";
import { snazzyMapStyles } from "../material-styles/snazzyMapStyles";
import DropDownIcon from "@material-ui/icons/ExpandMore";

// type Props = {
//   setCoordinates: (coordinates: { lat: number; lng: number }) => void;
//   setBounds: (bounds: any) => void;
//   coordinates: { lat: number; lng: number };
//   places: any;
//   setClickedChild: (clickedChild: any) => void;
//   weatherData: any;
// };

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setClickedChild,
  weatherData,
}) => {
  const classes = mapStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");
  const [toggleMap, setToggleMap] = React.useState(false);

  console.log({ places });
  return (
    <div className={`${classes.mapContainer} ${
      toggleMap ? classes.mapContainerToggle : ""
    }`}>
      <header className={classes.header}>
        <div className={classes.header__text}>
          <Typography variant="h5" gutterBottom className={classes.h1}>
            Explore Nearby
          </Typography>
          {isMobile && (
            <Typography variant="subtitle2" gutterBottom className={classes.h2}>
              {weatherData
                ? `Weather in ${weatherData?.name}, ${weatherData?.sys?.country}`
                : "Weather"}
            </Typography>
          )}
        </div>
        <div className={classes.weather__container}>
          {weatherData &&
            weatherData?.weather?.map((data, i) => (
              <div key={i} className={classes.weather__box}>
                <img
                  src={`http://openweathermap.org/img/w/${data?.icon}.png`}
                  alt="weather"
                />
                <Typography variant="subtitle2">
                  {new Date(weatherData?.dt * 1000).toLocaleString("en-US", {
                    hour: "numeric",
                  })}
                </Typography>
              </div>
            ))}
        </div>
        <div
          className={`${classes.toggle__icon} ${
            toggleMap ? classes.toggle__icon__active : ""
          }`}
        >
          <DropDownIcon
            onClick={() => setToggleMap(!toggleMap)}
            fontSize="large"
            cursor="pointer"
          />
        </div>
      </header>

      <GoogleMap
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: snazzyMapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setClickedChild(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place?.latitude)}
            lng={Number(place?.longitude)}
            key={i}
          >
            {!isMobile ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle1">
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place?.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place?.name}
                  height={100}
                  width={100}
                />
                <Rating
                  size="small"
                  value={Number(place.rating)}
                  color="primary"
                  readOnly
                />
              </Paper>
            )}
          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <React.Fragment key={i} lat={data?.coord.lat} lng={data?.coord.lon}>
            <img
              height={100}
              width={100}
              src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
              alt=""
            />
          </React.Fragment>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
