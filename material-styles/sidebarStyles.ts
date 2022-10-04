import { makeStyles } from "@material-ui/core/styles";

export const sidebarStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    width: "100%",
  },
  container: {
    padding: "25px",
    width: "100%",
  },
  marginBottom: {
    marginBottom: "20px",
  },
  formControl: {
    color: "#f5f5f5",
    margin: theme.spacing(2),
    minWidth: 120,
    marginBottom: "20px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  list: {
    overflow: "auto",
    color: "#f5f5f5",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gridGap: "1em",
    padding: "0",
    margin: "0 0 1em 0",
    height: "55vh",

    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
  },
  text: {
    color: "#990011FF",
    textAlign: "center",
    margin: "0",

    "@media (max-width: 600px)": {
      fontSize: "1.2rem",
    },
  },
}));
