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
    height: "100vh",
    width: "100%",
    position: "fixed",
    left: 0,
    bottom: 0,
    zIndex: 1,
    padding: "2em",
    borderRadius: "0.5em",
    transition: "all 0.5s ease",
  },
  h1: {
    fontSize: "2em",
    color: "#3c3c3c",
    textAlign: "center",
  },
  h2: {
    fontSize: "1.2em",
    color: "#666",
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
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5em",
    backgroundColor: "white",
    borderRadius: "0.5em 0.5em 0 0",
    boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
  },
  toggle__icon__active: {
    color: "#3c3c3c",
    transform: "rotate(180deg)",
  },
  mapContainerToggle: {
    height: "18vh",
  },
}));
