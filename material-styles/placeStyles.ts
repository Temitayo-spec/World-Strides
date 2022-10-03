import { makeStyles } from "@material-ui/core/styles";

export const placeStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "0 1rem",
    boxSizing: "border-box",
  },
  spacing: {
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  chip: {
    margin: "0.5rem",
  },
}));
