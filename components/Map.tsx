/* eslint-disable @next/next/no-img-element */
/* global google */
import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import { mapStyles } from "../material-styles";
import { snazzyMapStyles } from "../material-styles/snazzyMapStyles";
import { Marker } from "@react-google-maps/api";

type Props = {
  setCoordinates: (coordinates: { lat: number; lng: number }) => void;
  setBounds: (bounds: any) => void;
  coordinates: { lat: number; lng: number };
  places: any;
  setClickedChild: (clickedChild: any) => void;
  weatherData: any;
};

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setClickedChild,
  weatherData,
}: Props): JSX.Element => {
  const classes = mapStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  console.log({ places });
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
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
        onChange={(e: {
          center: { lat: any; lng: any };
          marginBounds: { ne: any; sw: any };
        }) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child: any) => setClickedChild(child)}
      >
        {places?.map(
          (
            place: {
              [x: string]: any;
              latitude: any;
              longitude: any;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              photo: { images: { large: { url: string | undefined } } };
            },
            i: React.Key | null | undefined
          ) => (
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
                  <Typography
                    className={classes.typography}
                    variant="subtitle1"
                  >
                    {place.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place?.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place?.name as any}
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
          )
        )}
        {weatherData?.list?.map(
          (
            data: {
              [x: string]: any;
              dt: any;
              main: { temp: any };
              weather: { icon: any }[];
            },
            i: React.Key | null | undefined
          ) => (
            <div key={i} lat={data?.coord.lat} lng={data?.coord.lon}>
              <img
                height={100}
                width={100}
                src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
                alt=""
              />
            </div>
          )
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
