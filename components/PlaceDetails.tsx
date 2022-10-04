/* eslint-disable @next/next/no-img-element */
import React, { Key } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import { placeStyles } from "../material-styles";

type Props = {
  place: any;
  selected: boolean;
  refProp: any;
};

const PlaceDetails = ({ place, selected, refProp }: Props): JSX.Element => {
  const classes = placeStyles();

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div>
      <Card elevation={6} className={classes.root}>
        <CardMedia
          style={{ height: 350 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Rating size="small" value={Number(place.rating)} color="primary" readOnly />
            out of {place.num_reviews} reviews
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price_level}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.ranking}
            </Typography>
          </Box>
          {place?.awards?.map(
            (
              award: {
                display_name:
                  | boolean
                  | React.Key
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | null
                  | undefined;
                images: { small: string | undefined };
              },
              i: Key
            ): any => (
              <Box
                key={i}
                my={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <img src={award.images.small} alt={award.display_name as any} />
                <Typography variant="subtitle2" color="textSecondary">
                  {award.display_name}
                </Typography>
              </Box>
            )
          )}
          {place?.cuisine?.map(({ name }: any) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))}
          {place?.address && (
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              className={classes.subtitle}
            >
              <LocationOnIcon /> {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              className={classes.spacing}
            >
              <PhoneIcon /> {place.phone}
            </Typography>
          )}
          <CardActions>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(place.web_url, "_blank")}
                >
                  World Strides
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(place.website, "_blank")}
                >
                  Website
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceDetails;
