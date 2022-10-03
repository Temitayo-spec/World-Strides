import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { useEffect, useState, createRef } from "react";
import { sidebarStyles } from "../material-styles";
import PlaceDetails from "./PlaceDetails";

type Props = {
  places: any;
  clickedChild: any;
  loading: boolean;
  type: string;
  setType: (type: string) => void;
  rating: number;
  setRating: (rating: number) => void;
};

const Sidebar = ({
  places,
  clickedChild,
  loading,
  type,
  setType,
  rating,
  setRating,
}: Props): JSX.Element => {
  const classes = sidebarStyles();

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs: never[] = Array(places?.length)
      .fill(null)
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center">
        Restaurants, Hotels and Attractions around you
      </Typography>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress size="3rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value as any)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={rating}
              onChange={(e) => setRating(e.target.value as any)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place: any, i: number) => (
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                <PlaceDetails
                  selected={Number(clickedChild) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default Sidebar;