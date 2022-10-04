import { makeStyles } from "@material-ui/core/styles";

export const placeStyles = makeStyles(() => ({
  root: {
    color: "#990011FF !important",
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
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 20,

    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
}));
