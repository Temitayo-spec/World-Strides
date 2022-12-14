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

    [theme.breakpoints.down("md")]: {
      padding: 0,
      width: "100%",
      margin: "0.5em auto",
    },
  },
  marginBottom: {
    marginBottom: "20px",
  },
  formControl: {
    color: "#f5f5f5",
    minWidth: 120,
    marginBottom: 20,
    marginRight: 30,
    marginTop: 5,
    marginLeft: "2em",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  list: {
    overflowY: "auto",
    color: "#f5f5f5",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gridGap: "1em",
    padding: "0",
    margin: "0 0 1em 0",
    height: "55vh",
    "@media(max-width: 600px)": {
      width: "100%",
    },

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
