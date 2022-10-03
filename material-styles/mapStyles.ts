import { makeStyles } from "@material-ui/core/styles";

export const mapStyles = makeStyles(() => ({
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  mapContainer: {
    height: "88vh",
    width: "100%",
    position: "relative",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
  typography: {
    fontSize: "0.4rem",
  },
}));
