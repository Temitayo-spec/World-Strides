/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { placeStyles } from "../material-styles";
import Link from "next/link";

type Props = {
  place: any;
  selected: boolean;
  refProp: any;
  id: number;
};

const PlaceDetails = ({ place, selected, refProp, id }: Props): JSX.Element => {
  const classes = placeStyles();

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <Link href={`/details/${id}`}>
      <div
        onClick={() => {
          localStorage.setItem("place", JSON.stringify(place));
        }}
        style={{ cursor: "pointer" }}
      >
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
              <Rating
                size="small"
                value={Number(place.rating)}
                color="primary"
                readOnly
              />
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
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};

export default PlaceDetails;
