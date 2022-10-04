/* eslint-disable @next/next/no-img-element */
import { Header } from "../../components";
import { Box, Button, Chip, Grid, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import BackArrowIcon from "@material-ui/icons/ArrowBackIos";
import { CardActions } from "@mui/material";
import { placeStyles } from "../../material-styles";
import { Key } from "react";

const Details = () => {
  // get data from local storage
  const data = JSON.parse(localStorage.getItem("place") || "{}");
  const classes = placeStyles();

  return (
    <div>
      <Header setCoordinates={"" as any} />

      <Grid
        container
        spacing={3}
        style={{
          width: "95%",
          margin: "0 auto",
          color: "#990011FF",
        }}
      >
        <Button
          onClick={() => window.history.back()}
          style={{
            marginTop: 10,
            marginLeft: 10,
            backgroundColor: "#990011FF",
            color: "white",
            borderRadius: 10,
            padding: 10,
            width: 100,
            height: 40,
            fontSize: 15,
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          }}
        >
          <BackArrowIcon />
          Back
        </Button>
        <Grid item xs={12}>
          <Typography variant="h4">{data.name}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.inner}
        >
          <Grid item xs={12}>
            <img
              src={
                data.photo
                  ? data.photo.images.large.url
                  : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
              }
              alt={data.name}
              style={{ width: "100%", height: 450, objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} sm={12}>
              <Box display="flex" justifyContent="space-between">
                <Rating
                  size="small"
                  value={Number(data.rating)}
                  color="primary"
                  readOnly
                />
                out of {data.num_reviews} reviews
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterBottom variant="subtitle1">
                  {data.price_level}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                Ranking
                <Typography gutterBottom variant="subtitle2">
                  {data.ranking}
                </Typography>
              </Box>
              {data?.cuisine?.map(({ name }: any) => (
                <Chip
                  key={name}
                  size="small"
                  label={name}
                  className={classes.chip}
                />
              ))}
              {data?.address && (
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  <LocationOnIcon /> {data.address}
                </Typography>
              )}
              {data?.phone && (
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  className={classes.spacing}
                >
                  <PhoneIcon /> {data.phone}
                </Typography>
              )}
            </Grid>
            {data?.awards?.map(
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
                  <img
                    src={award.images.small}
                    alt={award.display_name as any}
                  />
                  <Typography variant="subtitle2" color="textSecondary">
                    {award.display_name}
                  </Typography>
                </Box>
              )
            )}

            <CardActions>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => window.open(data.web_url, "_blank")}
                  >
                    World Strides
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => window.open(data.website, "_blank")}
                  >
                    Website
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
